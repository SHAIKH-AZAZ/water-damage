"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Emergency", path: "/emergency" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-4" : "bg-white/95 backdrop-blur-sm shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            💧 WaterCare Pro
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer ${
                  pathname === item.path ? "text-blue-600 font-bold" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+18009119111"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <FaPhone className="animate-pulse" />
            <span className="font-semibold">1-800-911-9111</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white shadow-lg mt-4 py-4"
        >
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors cursor-pointer ${
                  pathname === item.path ? "bg-blue-50 text-blue-600 font-bold" : ""
                }`}
                onClick={() => setMobileMenu(false)}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <a
            href="tel:+18009119111"
            className="block mx-4 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full text-center font-semibold"
          >
            📞 Call Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
