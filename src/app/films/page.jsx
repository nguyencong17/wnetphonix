
"use client";
import React, { useState, useEffect } from "react";
import movieAPIs from "@/apis/movieAPIs";
import { Card } from "@/components/Card/Card";
import { useInView } from "react-intersection-observer";
import axios from "axios";

function Films() {
  // danh sach phim bo noi bat
  const [listfilms, setListfilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [loading, setLoading] = useState(false); // Trạng thái tải dữ liệu
  const [hasMore, setHasMore] = useState(true); // Còn dữ liệu không?

  // Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.05, // Kích hoạt khi phần tử xuất hiện 10% trên màn hình
  });

  const fetchFilms = async (page) => {
    setLoading(true);
    try {
      const listfilms = await axios.get(
        `https://phim.nguonc.com/api/films/danh-sach/phim-le?page=${page}`
      );

      if (listfilms.data.status === "success") {
        // const intersection = array1.filter(obj1 =>
        //   array2.some(obj2 => obj1.id === obj2.id)
        // );
        setListfilms((prevMovies) => [
          ...prevMovies,
          ...listfilms.data.items,
        ]);
        setHasMore(page < listfilms.data.paginate.total_page);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  // // Gọi API khi component mount hoặc currentPage thay đổi
  useEffect(() => {
    if (hasMore && currentPage > 1) {
      fetchFilms(currentPage);
    }
  }, [currentPage]);

  // Theo dõi khi phần tử cuối danh sách xuất hiện
  useEffect(() => {
    if (inView && hasMore && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore, loading]);

  return (
    <div className="py-[32px] lg:py-[64px]">
      <div className="container flex flex-col items-end">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {listfilms.map((item, index) => (
            <Card key={index} movie={item} />
          ))}
        </div>
      </div>
      {/* Phần tử đánh dấu cuối danh sách */}
      {hasMore && !loading && (
        <div ref={ref} className="load-more-trigger"></div>
      )}

      {/* Hiển thị thông báo khi tải */}
      {!loading && (
        <div className="flex justify-center my-[32px]">
          <button className="bg-[rgba(255,255,255,0.2)] p-4 rounded-lg">
            Loading...
          </button>
        </div>
      )}

      {/* Hiển thị thông báo khi hết dữ liệu */}
      {!hasMore && <p>No more movies to load!</p>}
    </div>
  );
}

export default Films;
