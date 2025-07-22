"use client"; 
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function RootLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div> 
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}