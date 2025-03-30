"use client";
import AuthContext from "@/components/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import LogoutPNG from "../../../../public/logout.png"; // Đường dẫn đến hình ảnh
function Logout() {
  const { toast } = useToast();
  const { logout } = useContext(AuthContext);
  const router = useRouter(); // Khởi tạo useRouter

  const handleLogout = () => {
    // Xóa token khỏi localStorage
    // localStorage.removeItem("token");
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }

    logout(); // Gọi hàm logout từ AuthContext

    toast({
      title: "Success",
      description: "Bạn đã đăng xuất, đăng nhập để có trải nghiệm tốt hơn",
      status: "success",
      duration: 5000, // duration in milliseconds
      className: "bg-green-500 text-[#141414] border-0",
    });

    router.push("/login"); // Chuyển hướng đến trang đăng nhập
  };

  return (
    <div className="container">
      <div className="min-h-[240px] items-center justify-center flex flex-col gap-8 mt-8 m">
        <Image
          src={LogoutPNG}
          alt="Background Image"
          className="relative w-[200px] h-[200px]"
          priority
        />
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Đăng xuất
        </button>
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default Logout;
