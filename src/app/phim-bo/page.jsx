"use client";
import movieAPIs from "@/apis/movieAPIs";
import { Card } from "@/components/Card/Card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useMemo, useState } from "react";

function Phimbo() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const ITEMS_PER_PAGE = 32;

  const loadData = async (targetPage) => {
    setLoading(true);
    try {
      let tempMovies = [...allMovies];
      const requiredItems = targetPage * ITEMS_PER_PAGE;

      // Tính toán trang API tiếp theo cần gọi (mỗi trang API Nguồn C thường có 20 items)
      let apiPageToCall = Math.ceil(tempMovies.length / 20) + 1;

      // Vòng lặp lấy đủ 32 phim cho trang hiện tại
      while (tempMovies.length < requiredItems) {
        const res = await movieAPIs.getListFilm("phim-bo", apiPageToCall);
        const newItems = res.data?.items || [];

        if (newItems.length === 0) break;

        tempMovies = [...tempMovies, ...newItems];

        // Lọc trùng theo slug để tránh lỗi key React
        tempMovies = tempMovies.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.slug === item.slug),
        );
        apiPageToCall++;
      }
      setAllMovies(tempMovies);
    } catch (error) {
      console.error("Lỗi tải phim bộ:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(currentPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Lấy chính xác 32 phim để render
  const displayMovies = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return allMovies.slice(start, start + ITEMS_PER_PAGE);
  }, [allMovies, currentPage]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 uppercase border-l-4 border-red-500 pl-3">
        Phim Bộ
      </h2>

      {/* Grid 8 cột trên màn hình cực lớn (xl), 4 cột trên tablet */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {loading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <Skeleton key={index} className="aspect-[3/4] rounded-xl" />
            ))
          : displayMovies.map((movie, index) => (
              <Card key={movie.slug || index} movie={movie} />
            ))}
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mt-12 gap-4">
        <button
          disabled={currentPage === 1 || loading}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-6 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 disabled:opacity-30"
        >
          Trước
        </button>
        <span className="flex items-center font-bold text-red-500">
          Trang {currentPage}
        </span>
        <button
          disabled={loading}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-6 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 disabled:opacity-30"
        >
          Sau
        </button>
      </div>
    </div>
  );
}

export default Phimbo;
