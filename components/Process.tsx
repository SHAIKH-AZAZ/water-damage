"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaPhoneAlt, FaSearch, FaTint, FaHammer, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: FaPhoneAlt,
    title: "Emergency Call",
    description: "Contact us 24/7 for immediate assistance",
    step: "01"
  },
  {
    icon: FaSearch,
    title: "Inspection",
    description: "Free assessment and damage evaluation",
    step: "02"
  },
  {
    icon: FaTint,
    title: "Water Removal",
    description: "Fast extraction using professional equipment",
    step: "03"
  },
  {
    icon: FaHammer,
    title: "Restoration",
    description: "Complete repair and reconstruction",
    step: "04"
  },
  {
    icon: FaCheckCircle,
    title: "Final Check",
    description: "Quality assurance and satisfaction guarantee",
    step: "05"
  }
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, efficient, and proven restoration process
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center relative z-10">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-8 mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <step.icon className="text-4xl text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
