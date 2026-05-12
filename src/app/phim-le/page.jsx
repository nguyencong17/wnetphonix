"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/Card/Card";
import { MovieFilter } from "@/components/MovieFilter";
import movieAPIs from "@/apis/movieAPIs"; // Import lớp trừu tượng

function Phimle() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const ITEMS_PER_PAGE = 32;

  const fetchEnoughMovies = async (targetCount) => {
    setLoading(true);
    let tempMovies = [...allMovies];
    let apiPageToCall = Math.ceil(tempMovies.length / 20) + 1;

    try {
      while (tempMovies.length < targetCount) {
        // GỌI QUA HÀM TRỪU TƯỢNG (Dễ dàng thay đổi sau này)
        const res = await movieAPIs.getListFilm("phim-le", apiPageToCall);
        
        if (res.data.status === "success" && res.data.items.length > 0) {
          const newItems = res.data.items;
          tempMovies = [...tempMovies, ...newItems].filter(
            (item, index, self) => index === self.findIndex((t) => t.slug === item.slug)
          );
          apiPageToCall++;
        } else break;
      }
      setAllMovies(tempMovies);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const requiredMovies = currentPage * ITEMS_PER_PAGE;
    if (allMovies.length < requiredMovies) fetchEnoughMovies(requiredMovies);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const displayMovies = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return allMovies.slice(start, start + ITEMS_PER_PAGE);
  }, [allMovies, currentPage]);

  return (
    <div className="py-[32px] container mx-auto px-4">
      <h4 className="mb-6 text-2xl font-bold">Phim Lẻ</h4>
      <MovieFilter /> 
      
      {loading && allMovies.length < currentPage * ITEMS_PER_PAGE ? (
        <div className="text-center py-20 animate-pulse text-gray-500">Đang tải dữ liệu phim...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {displayMovies.map((item, index) => (
            <Card key={item.id || index} movie={item} />
          ))}
        </div>
      )}

      {/* Điều hướng giữ nguyên... */}
    </div>
  );
}

export default Phimle;