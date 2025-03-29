'use client'
import { Manrope } from "next/font/google";
import "@/_styles/globals.css";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Provider } from "react-redux";
import store from "@/store/store";
import { AuthProvider } from "@/components/context/AuthContext";
const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} bg-background`}>
        <AuthProvider>
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
