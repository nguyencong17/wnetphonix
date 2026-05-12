"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/Card/Card";
import movieAPIs from "@/apis/movieAPIs";

function SearchPage() {
  const searchParams = useSearchParams();
  // Đồng bộ key 'keyword' với logic handleSearch ở Header
  const keyword = searchParams.get("keyword"); 

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const fetchSearchData = async (page) => {
    if (!keyword) return;
    setLoading(true);
    try {
      const res = await movieAPIs.searchMovies(keyword, page);
      if (res.data.status === "success") {
        const { items, params } = res.data;
        setMovies(items || []);
        // Lấy thông tin phân trang từ params.pagination của API Nguonc
        setPagination({
          currentPage: page,
          totalPages: Math.ceil(params.pagination.totalItems / params.pagination.totalItemsPerPage) || 1
        });
      }
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Reset và gọi lại khi keyword thay đổi
  useEffect(() => {
    fetchSearchData(1);
  }, [keyword]);

  const handlePageChange = (newPage) => {
    fetchSearchData(newPage);
  };

  if (!keyword) return <div className="container mx-auto p-20 text-center">Vui lòng nhập từ khóa tìm kiếm...</div>;

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-2xl mb-8 border-l-4 border-red-600 pl-4 uppercase font-black">
        Kết quả cho: <span className="text-red-500 italic">"{keyword}"</span>
      </h1>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-zinc-900 aspect-[3/4] rounded-xl animate-pulse" />
          ))}
        </div>
      ) : movies.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
            {movies.map((movie) => (
              <Card key={movie._id || movie.slug} movie={movie} />
            ))}
          </div>

          {/* Phân trang UI Clean */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center mt-16 gap-6">
              <button
                disabled={pagination.currentPage === 1 || loading}
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                className="px-6 py-2 bg-zinc-800 rounded-full hover:bg-zinc-700 disabled:opacity-20 transition-all font-bold"
              >
                Trước
              </button>
              
              <div className="bg-zinc-900 px-5 py-2 rounded-full border border-white/5 shadow-inner">
                <span className="text-red-500 font-bold">{pagination.currentPage}</span>
                <span className="mx-2 text-zinc-600">/</span>
                <span className="text-zinc-400">{pagination.totalPages}</span>
              </div>

              <button
                disabled={pagination.currentPage === pagination.totalPages || loading}
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                className="px-6 py-2 bg-zinc-800 rounded-full hover:bg-zinc-700 disabled:opacity-20 transition-all font-bold"
              >
                Sau
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-32 bg-zinc-900/50 rounded-3xl border border-dashed border-white/10">
          <p className="text-zinc-500 text-lg">Không tìm thấy phim nào phù hợp với yêu cầu của bạn.</p>
        </div>
      )}
    </div>
  );
}

export default SearchPage;