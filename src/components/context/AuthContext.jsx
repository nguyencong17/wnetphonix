"use client";
import { createContext, useState } from "react";
import axios from "axios";
import { API_AUTH } from "@/utils/constants";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("token") ? true : false);
  const router = useRouter(); // Khởi tạo useRouter

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_AUTH}/api/users/login`, { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(true);
      console.log("Đăng nhập thành công:", res.data);
      // Chuyển hướng sang trang logout
      router.push("/movies");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error.response?.data?.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;