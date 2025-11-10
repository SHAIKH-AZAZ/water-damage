"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">💧 WaterCare Pro</h3>
            <p className="text-gray-400 mb-4">
              Professional water damage restoration services available 24/7 for emergency situations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-cyan-400 transition-colors">Our Process</a></li>
              <li><a href="#emergency" className="text-gray-400 hover:text-cyan-400 transition-colors">Emergency</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Water Extraction</li>
              <li>Structural Drying</li>
              <li>Mold Remediation</li>
              <li>Fire Damage</li>
              <li>Flood Cleanup</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+18009119111" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <FaPhone className="text-cyan-400" />
                <span>1-800-911-9111</span>
              </a>
              <a href="mailto:help@watercarepro.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="text-cyan-400" />
                <span>help@watercarepro.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} WaterCare Pro. All rights reserved. | Licensed & Insured</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
