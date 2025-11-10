"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWater, FaHome, FaTools, FaShieldAlt, FaSnowflake, FaFire } from "react-icons/fa";

const services = [
  {
    icon: FaWater,
    title: "Water Extraction",
    description: "Rapid water removal using industrial-grade equipment to prevent further damage",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaHome,
    title: "Structural Drying",
    description: "Complete drying of walls, floors, and ceilings with advanced dehumidification",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaTools,
    title: "Restoration & Repair",
    description: "Full restoration services to return your property to pre-damage condition",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FaShieldAlt,
    title: "Mold Remediation",
    description: "Professional mold removal and prevention to ensure a healthy environment",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: FaSnowflake,
    title: "Freeze Damage",
    description: "Expert repair of burst pipes and freeze-related water damage",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: FaFire,
    title: "Fire & Smoke",
    description: "Water damage cleanup after fire suppression and smoke damage restoration",
    color: "from-red-500 to-orange-500"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive water damage restoration solutions for every situation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
