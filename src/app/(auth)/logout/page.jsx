"use client";
import AuthContext from "@/components/context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

function Logout() {
  const { toast } = useToast();
  const { logout } = useContext(AuthContext);
  const router = useRouter(); // Khởi tạo useRouter
  const accessToken = localStorage.getItem("token");

  const handleLogout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("token");

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
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Đăng xuất
      </button>
      <Toaster></Toaster>
    </div>
  );
}

export default Logout;
