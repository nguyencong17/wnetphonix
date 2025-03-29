"use client";
import React from "react";
import { useState } from "react"; 
import Image from "next/image";
import LoginImage from "../../../../public/login-bg.jpg"; // Đường dẫn đến hình ảnh
import { Input } from "@/components/ui/input";
import { API_AUTH } from "@/utils/constants";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";

function Register() {
  const { toast } = useToast();
  const router = useRouter();

  // Khởi tạo state cho form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Xử lý khi nhập dữ liệu vào form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Xử lý khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_AUTH}/api/users/register`,
        formData,
        {
          withCredentials: true, // Nếu backend yêu cầu cookies/token
        }
      );
      setMessage(res.data.message); // Hiển thị thông báo từ server
      console.log("Đăng ký thành công:", res.data);
      toast({
        title: "Success",
        description: "Bạn đã đăng kí thành công",
        status: "success",
        duration: 5000,
        className: "bg-green-500 text-[#141414] border-0",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      router.push("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Đăng ký thất bại!");
    }
  };

  return (
    <div>
      <div className="relative min-h-screen">
        <Image
          src={LoginImage}
          alt="Background Image"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
          fill
          priority
        />
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[448px]">
          <div className="px-8  py-16 rounded-lg max-w-md w-full bg-[rgba(0,0,0,0.3)] relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-[3px] rounded-lg"></div>
            <div className="relative top-0 left-0 right-0 bottom-0 z-20">
              <h2 className="text-3xl font-semibold text-center mb-4">
                Đăng kí tài khoản
              </h2>

              <form onSubmit={handleSubmit} className="text-center">
                <div className="mb-4 relative">
                  <i className="fas fa-envelope custom-input-icon"></i>
                  <Input
                    className="w-full focus:outline-transparent focus:ring-transparent focus:border-primary focus:text-white"
                    placeholder="Họ và tên"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <i className="fas fa-envelope custom-input-icon"></i>
                  <Input
                    className="w-full focus:outline-transparent focus:ring-transparent focus:border-primary focus:text-white"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <i className="fas fa-lock custom-input-icon"></i>
                  <Input
                    className="w-full focus:outline-transparent focus:ring-transparent focus:border-primary focus:text-white"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <i className="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
                </div>
                <button
                  className="bg-primary text-white px-8 py-2 h-[52px] rounded-lg hover:bg-gray-800 transition duration-200"
                  type="submit"
                >
                  Tạo tài khoản
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default Register;
