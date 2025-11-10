"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaClock, FaMapMarkerAlt, FaCertificate, FaDollarSign } from "react-icons/fa";

const features = [
  {
    icon: FaClock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency response team ready to help"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Local Service",
    description: "Fast response times with local technicians in your area"
  },
  {
    icon: FaCertificate,
    title: "Certified Experts",
    description: "IICRC certified professionals with years of experience"
  },
  {
    icon: FaDollarSign,
    title: "Insurance Help",
    description: "We work directly with your insurance company"
  }
];

export default function Emergency() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="emergency" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Emergency <span className="text-cyan-300">Response</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            When disaster strikes, every minute counts. We're here for you 24/7.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-3xl text-cyan-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-effect inline-block p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Help?</h3>
            <p className="text-xl text-blue-100 mb-8">Our emergency team is standing by</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+18009119111"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-orange-500/50 transition-all"
            >
              📞 Call: 1-800-911-9111
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
