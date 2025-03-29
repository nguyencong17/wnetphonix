"use client";
import { useState, useContext, useEffect } from "react";
import AuthContext from "@/components/context/AuthContext";
import Image from "next/image";
import LoginImage from "../../../../public/login-bg.jpg"; // Đường dẫn đến hình ảnh
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    toast({
      title: "Success",
      description: "Bạn đã đăng nhập thành công",
      status: "success",
      duration: 5000,
      className: "bg-green-500 text-[#141414] border-0",
    });
  };

  return (
    <div className="relative min-h-screen">
      <Image
        src={LoginImage}
        alt="Background Image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        fill
        priority
      />
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="px-8  py-16 rounded-lg max-w-md w-full bg-[rgba(0,0,0,0.3)] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-[3px] rounded-lg"></div>
          <div className="relative top-0 left-0 right-0 bottom-0 z-20">
            <h2 className="text-3xl font-semibold text-center mb-2">
              WnetPhonix
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Kho phim bất tận, trải nghiệm điện ảnh sống động từng khoảnh khắc
            </p>
            <form onSubmit={handleSubmit} className="text-center">
              <div className="mb-4 relative">
                <i className="fas fa-envelope custom-input-icon"></i>
                <Input
                  className="w-full focus:outline-transparent focus:ring-transparent focus:border-primary focus:text-white"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 relative">
                <i className="fas fa-lock custom-input-icon"></i>
                <Input
                  className="w-full focus:outline-transparent focus:ring-transparent focus:border-primary focus:text-white"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
              </div>
              <div className="flex justify-between items-center mb-6">
                <a className="text-sm text-white hover:underline" href="#">
                  Quên mật khẩu?
                </a>
                <Link
                  className="text-sm text-white hover:underline"
                  href="/register"
                >
                  Bạn chưa có tài khoản?
                </Link>
              </div>
              <button
                className="bg-primary text-white px-8 py-2 h-[52px] rounded-lg hover:bg-gray-800 transition duration-200"
                type="submit"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
}

export default LoginPage;
