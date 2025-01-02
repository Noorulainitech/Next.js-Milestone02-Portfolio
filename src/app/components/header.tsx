"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <Image
            src="/images/noorr.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
          
          <div>
            <p className="text-sm font-bold text-black mt-4">Noor Ul Ain</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact-us" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
