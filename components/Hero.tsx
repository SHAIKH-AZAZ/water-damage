"use client";

import { motion } from "framer-motion";
import { FaPhone, FaCheckCircle } from "react-icons/fa";
import WaterAnimation from "./WaterAnimation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <WaterAnimation />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-white z-10" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-900">Emergency</span>
              <br />
              <span className="gradient-text">Water Damage</span>
              <br />
              <span className="text-gray-900">Restoration</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              24/7 Professional water damage restoration services. Fast response,
              certified technicians, and guaranteed results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+18009119111"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-3"
              >
                <FaPhone className="animate-pulse" />
                Call Now: 1-800-911-9111
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all border-2 border-blue-600"
              >
                Get Free Estimate
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["24/7 Emergency Service", "Licensed & Insured", "Fast Response Time", "Free Inspection"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xl" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="glass-effect rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop"
                alt="Professional water damage restoration technician using industrial equipment to extract water from flooded residential property"
                className="rounded-2xl shadow-xl"
                loading="eager"
                width="600"
                height="600"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
