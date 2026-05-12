"use client";
import { mycountry, mygenres } from "@/apis/mydata";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Danh sách năm có thể để ở file config riêng hoặc khai báo tại đây
const YEARS = Array.from({ length: 11 }, (_, i) => (2026 - i).toString());

export const MovieFilter = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    genre: "",
    country: "",
    year: "",
  });

  const handleFilter = () => {
    // Logic điều hướng linh hoạt: Bạn có thể thay đổi cách nối URL tại đây
    // Nếu tương lai API hỗ trợ lọc gộp (ví dụ: ?genre=...&year=...), bạn chỉ cần sửa hàm này
    if (selected.genre) router.push(`/list/${selected.genre}`);
    else if (selected.country) router.push(`/list/${selected.country}`);
    else if (selected.year) router.push(`/list/${selected.year}`);
  };

  return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl mb-8 border border-white/5 flex flex-wrap items-end gap-4">
      {/* Select Thể Loại */}
      {/* <FilterSelect
        label="Thể loại"
        options={mygenres}
        onChange={(val) => setSelected({ ...selected, genre: val })}
      /> */}

      {/* Select Quốc Gia */}
      <FilterSelect
        label="Quốc gia"
        options={mycountry}
        onChange={(val) => setSelected({ ...selected, country: val })}
      />

      {/* Select Năm */}
      {/* <div className="flex-1 min-w-[140px]">
        <label className="text-[10px] text-gray-500 uppercase font-bold mb-2 block">
          Năm
        </label>
        <select
          className="w-full bg-[#262626] text-sm p-3 rounded-lg outline-none border border-white/10 focus:border-primary text-white"
          onChange={(e) => setSelected({ ...selected, year: e.target.value })}
        >
          <option value="">Tất cả</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div> */}

      <button
        onClick={handleFilter}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all text-sm h-[46px]"
      >
        Lọc Phim
      </button>
    </div>
  );
};

// Sub-component nhỏ để code gọn hơn
const FilterSelect = ({ label, options, onChange }) => (
  <div className="flex-1 min-w-[140px]">
    <label className="text-[10px] text-gray-500 uppercase font-bold mb-2 block">
      {label}
    </label>
    <select
      className="w-full bg-[#262626] text-sm p-3 rounded-lg outline-none border border-white/10 focus:border-primary text-white"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Tất cả</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);
