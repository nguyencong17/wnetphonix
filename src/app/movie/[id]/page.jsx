"use client";
import movieAPIs from "@/apis/movieAPIs";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { InformationCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { PlayIcon, PlusIcon, ShareIcon, UsersIcon } from "@heroicons/react/24/solid";

const DetailMovie = ({ params }) => {
  const slug = params.id;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("info");

  // ✅ LOGIC MỚI: Dùng ref thay vì state cho video URL
  // → Cập nhật iframe trực tiếp qua DOM, không trigger re-render
  const iframeRef = useRef(null);
  const currentUrlRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // chỉ để toggle UI (boolean)

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const res = await movieAPIs.getMovieDetail(slug);
        const data = res?.data?.movie || res?.data?.item || res?.movie;
        if (!cancelled) setMovie(data || null);
      } catch (error) {
        if (!cancelled) console.error("Lỗi khi fetch dữ liệu phim:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [slug]);

  const movieData = useMemo(() => {
    if (!movie) return null;
    const category = movie.category || {};
    const values = Object.values(category);
    const castList = movie.casts ? movie.casts.split(",").map((name) => name.trim()) : [];
    return {
      genres: values[1]?.list || [],
      year: values[2]?.list || [],
      country: values[3]?.list || [],
      description: movie.description?.replace(/<\/?p>/g, "") || "",
      episodes: movie.episodes || [],
      casts: castList,
    };
  }, [movie]);

  // ✅ LOGIC MỚI: Không set state URL → không re-render → iframe không remount
  const handleSelectEpisode = useCallback((url) => {
    if (!url || currentUrlRef.current === url) return;
    currentUrlRef.current = url;

    // Cập nhật src iframe trực tiếp qua DOM ref — không qua React state
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }

    // Chỉ set isPlaying 1 lần duy nhất để hiển thị iframe
    setIsPlaying((prev) => (prev ? prev : true));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) return <div className="min-h-screen bg-[#060606] flex items-center justify-center">Đang tải...</div>;
  if (!movie) return <div className="text-white text-center p-20">Không tìm thấy phim.</div>;

  return (
    <div className="bg-[#060606] min-h-screen text-white font-sans">

      {/* ✅ LOGIC MỚI: iframe luôn tồn tại trong DOM, ẩn/hiện bằng CSS */}
      {/* KHÔNG dùng {isPlaying && <iframe>} vì unmount/remount sẽ reload video */}
      <div className={`w-full bg-black shadow-2xl ${isPlaying ? "block animate-in fade-in duration-500" : "hidden"}`}>
        <div className="container mx-auto">
          <div className="relative pt-[56.25%] w-full bg-black">
            <iframe
              ref={iframeRef}
              src="about:blank"
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* ── HERO / BANNER ── */}
      <div className={`relative w-full ${!isPlaying ? "lg:h-[550px] flex items-end pb-12 pt-20" : "py-10 bg-[#0b0b0b] border-b border-white/5"}`}>
        {!isPlaying && (
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${movie.poster_url})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/40 to-transparent" />
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-end">

            {/* Thumbnail */}
            <div className={`shrink-0 shadow-2xl rounded-xl border border-white/10 overflow-hidden transition-all duration-500 ${!isPlaying ? "w-[200px] lg:w-[260px]" : "w-[120px] lg:w-[160px]"}`}>
              <img src={movie.thumb_url} alt={movie.name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex gap-2 mb-4 justify-center md:justify-start">
                <span className="bg-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase">PHIM BỘ</span>
                <span className="bg-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase">FULL HD</span>
              </div>

              <h1 className={`font-black tracking-wider mb-4 ${!isPlaying ? "text-4xl lg:text-6xl" : "text-2xl lg:text-4xl text-red-500"}`}>
                {movie.name}
              </h1>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm text-zinc-400 font-medium">
                <span className="bg-zinc-900/80 px-3 py-1 rounded border border-white/5">🗓️ {movieData.year[0]?.name}</span>
                <span className="bg-zinc-900/80 px-3 py-1 rounded border border-white/5">🌐 {movieData.country[0]?.name}</span>
                <span className="bg-zinc-900/80 px-3 py-1 rounded border border-white/5">⏱️ {movie.time}</span>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <button
                  onClick={() => handleSelectEpisode(movieData.episodes[0]?.items[0]?.embed)}
                  className="flex items-center gap-2 bg-[#E50914] px-8 py-3 rounded-lg font-bold hover:scale-105 transition shadow-lg shadow-red-600/20"
                >
                  <PlayIcon className="w-5 h-5" />
                  {isPlaying ? "ĐANG PHÁT" : "XEM PHIM"}
                </button>
                <button className="p-3 bg-zinc-800/40 rounded-lg border border-white/10 hover:bg-zinc-700 transition">
                  <PlusIcon className="w-6 h-6" />
                </button>
                <button className="p-3 bg-zinc-800/40 rounded-lg border border-white/10 hover:bg-zinc-700 transition">
                  <ShareIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TABS + CONTENT ── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">

            {/* Tab buttons */}
            <div className="flex gap-10 border-b border-zinc-800 mb-10 overflow-x-auto no-scrollbar">
              {[
                { id: "info", label: "THÔNG TIN", icon: <InformationCircleIcon className="w-5 h-5" /> },
                { id: "episodes", label: "TẬP PHIM", icon: <ListBulletIcon className="w-5 h-5" /> },
                { id: "casts", label: "DIỄN VIÊN", icon: <UsersIcon className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-4 text-xs font-bold tracking-[2px] relative transition-all whitespace-nowrap ${activeTab === tab.id ? "text-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                >
                  {tab.icon} {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 shadow-[0_0_10px_#ef4444]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">

              {activeTab === "info" && (
                <div className="animate-in fade-in duration-500 space-y-6">
                  <h3 className="text-xl font-bold border-l-4 border-red-600 pl-4 uppercase tracking-tighter">Cốt truyện</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg italic">{movieData.description}</p>
                </div>
              )}

              {activeTab === "episodes" && (
                <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
                  {movieData.episodes.map((server, idx) => (
                    <div key={idx}>
                      <p className="text-zinc-600 text-[10px] font-black mb-4 uppercase tracking-[3px]">
                        Máy chủ: {server.server_name}
                      </p>
                      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
                        {server.items.map((ep, i) => (
                          <button
                            key={i}
                            onClick={() => handleSelectEpisode(ep.embed)}
                            className={`py-2.5 rounded font-bold text-xs border transition-all ${
                              currentUrlRef.current === ep.embed
                                ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/40"
                                : "bg-zinc-900 border-white/5 text-zinc-500 hover:bg-zinc-800 hover:text-white"
                            }`}
                          >
                            TẬP {ep.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "casts" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-in fade-in duration-500">
                  {movieData.casts.map((name, i) => (
                    <div key={i} className="group text-center">
                      <div className="aspect-square rounded-full overflow-hidden bg-zinc-900 border-2 border-transparent group-hover:border-red-600 transition-all duration-500 mb-3 mx-auto w-3/4 shadow-xl">
                        <img
                          src={`https://ui-avatars.com/api/?name=${name}&background=random&color=fff`}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[11px] font-bold text-zinc-500 group-hover:text-white uppercase transition">{name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900/40 p-6 rounded-xl border border-white/5">
              <h3 className="text-sm font-black mb-6 border-l-4 border-red-500 pl-4 uppercase tracking-widest text-zinc-200">Thể loại</h3>
              <div className="flex flex-wrap gap-2">
                {movieData.genres.map((g, i) => (
                  <span key={i} className="bg-zinc-800/60 px-3 py-1.5 rounded-md text-[10px] text-zinc-300 font-bold border border-white/5 uppercase">
                    {g.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/40 p-6 rounded-xl border border-white/5">
              <h3 className="text-sm font-black mb-6 border-l-4 border-red-500 pl-4 uppercase tracking-widest text-zinc-200">Trạng thái</h3>
              <div className="space-y-4 text-xs font-bold uppercase">
                <div className="flex justify-between border-b border-white/5 pb-3">
                  <span className="text-zinc-500">Ngôn ngữ:</span>
                  <span className="text-white">{movie.language || "Vietsub"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Tình trạng:</span>
                  <span className="text-green-500">{movie.current_episode}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailMovie;