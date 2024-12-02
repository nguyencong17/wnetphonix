"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/Card/Card";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { useRouter } from "next/router";

function List(props) {
  const { params } = props;
  const slug = params.slug;
  const [movies, setMovies] = useState([]); // Danh sách phim
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [loading, setLoading] = useState(false); // Trạng thái tải dữ liệu
  const [hasMore, setHasMore] = useState(true); // Còn dữ liệu không?

  // Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.05, // Kích hoạt khi phần tử xuất hiện 10% trên màn hình
  });

  // Hàm Fetch API
  const fetchMovies = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://phim.nguonc.com/api/films/the-loai/${slug}?page=${page}`
      );

      if (response.data.status === "success") {
        // const intersection = array1.filter(obj1 =>
        //   array2.some(obj2 => obj1.id === obj2.id)
        // );
        setMovies((prevMovies) => [...prevMovies, ...response.data.items]);
        setHasMore(page < response.data.paginate.total_page);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(movies);

  // Gọi API khi component mount hoặc currentPage thay đổi
  useEffect(() => {
    if (hasMore && currentPage > 1) {
      fetchMovies(currentPage);
    }
  }, [currentPage]);

  // Theo dõi khi phần tử cuối danh sách xuất hiện
  useEffect(() => {
    if (inView && hasMore && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore, loading]);

  // Nếu slug chưa sẵn sàng, hiển thị loading
  // if (!slug) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="py-[64px]">
      <div className="container flex flex-col items-end">
        <div className="w-full grid grid-cols-1 2xl:grid-cols-7 gap-4">
          {movies.map((item, index) => (
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

export default List;
