"use client";

import { generateWAUrl } from "@/data/siteData";
import Logo from "./Logo";

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Mencegah penambahan hash (#) ke URL
    
    // Jika sedang berada di halaman utama
    if (window.location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jika berada di halaman lain, berpindah dulu ke halaman utama
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-amber-500/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Logo />
        </a>

        {/* Menu Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-300">
          <a
            href="#tentang"
            onClick={(e) => handleScroll(e, "tentang")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            TENTANG GUN
          </a>

          <a
            href="#produk"
            onClick={(e) => handleScroll(e, "produk")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            PRODUK
          </a>

          <a
            href="#keunggulan"
            onClick={(e) => handleScroll(e, "keunggulan")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            KEUNGGULAN
          </a>

          <a
            href="#bujp"
            onClick={(e) => handleScroll(e, "bujp")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            SOLUSI BUJP
          </a>

          <a
            href="#alur"
            onClick={(e) => handleScroll(e, "alur")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            ALUR PESAN
          </a>

          <a
            href="#faq"
            onClick={(e) => handleScroll(e, "faq")}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Tombol CTA */}
        <a
          href={generateWAUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-lg group bg-gradient-to-br from-amber-400 to-amber-600 hover:text-white text-slate-950 shadow-lg shadow-amber-500/20"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-amber-400 hover:bg-opacity-0 rounded-md">
            MINTA PENAWARAN
          </span>
        </a>
      </div>
    </header>
  );
}