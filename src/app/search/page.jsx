import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent"; // Đổi tên component cũ của bạn thành tên này

export default function SearchPage() {
  return (
    // Bọc Suspense ở đây để fix lỗi build
    <Suspense fallback={<div className="text-white text-center p-20">Đang tải tìm kiếm...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}