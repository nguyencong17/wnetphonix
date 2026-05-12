"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

export const Card = ({ movie }) => {
  // Destructuring các trường từ Object thực tế của bạn
  const {
    name,
    slug,
    thumb_url,
    poster_url,
    language,
    current_episode,
    original_name,
  } = movie;

  // Logic kiểm tra ngôn ngữ dựa trên trường 'language' thực tế
  const isPhuDe = language?.toLowerCase().includes("vietsub");
  const isThuyetMinh = language?.toLowerCase().includes("thuyết minh");

  // Xử lý chuỗi tập phim để hiển thị gọn (VD: "Hoàn tất (40/40)" -> "40/40")
  const episodeDisplay =
    current_episode?.match(/\d+\/\d+/)?.[0] || current_episode;

  return (
    <Link href={`/movie/${slug}`} className="group block text-white w-full">
      <div className="relative flex flex-col h-full">
        {/* KHUNG ẢNH & OVERLAY */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-white/5 shadow-lg">
          <Image
            src={thumb_url || poster_url || ""}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, 15vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Icon Play khi Hover */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <PlayCircleIcon className="h-12 w-12 text-white/80" />
          </div>

          {/* NHÃN PHỤ ĐỀ / THUYẾT MINH CĂN GIỮA ĐÁY ẢNH */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 w-max">
            {isPhuDe && (
              <Badge className="bg-zinc-900/90 border border-white/10">
                P.Đề
              </Badge>
            )}

            {isThuyetMinh && (
              <Badge className="bg-green-600/90">
                T.Minh {episodeDisplay ? `. ${episodeDisplay}` : ""}
              </Badge>
            )}

            {/* Nếu không có thuyết minh thì vẫn hiện số tập */}
            {!isThuyetMinh && episodeDisplay && (
              <Badge className="bg-green-600/90">{episodeDisplay}</Badge>
            )}
          </div>

          {/* Gradient đáy ảnh để nổi nhãn */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* THÔNG TIN PHIM */}
        <div className="mt-3 px-1 text-center">
          <h4 className="line-clamp-1 text-[15px] font-bold group-hover:text-red-500 transition-colors">
            {name}
          </h4>
          <p className="text-[12px] text-zinc-500 mt-0.5 line-clamp-1 italic">
            {original_name || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Component Badge nhỏ tái sử dụng
const Badge = ({ children, className }) => (
  <span
    className={`px-2 py-1 rounded-md text-[10px] font-bold shadow-sm whitespace-nowrap ${className}`}
  >
    {children}
  </span>
);

Card.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    thumb_url: PropTypes.string,
    poster_url: PropTypes.string,
    language: PropTypes.string,
    current_episode: PropTypes.string,
    original_name: PropTypes.string,
  }).isRequired,
};
