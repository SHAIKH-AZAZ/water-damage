"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Call Us",
      info: "1-800-911-9111",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      info: "help@watercarepro.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Service Area",
      info: "Nationwide Coverage",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaClock,
      title: "Hours",
      info: "24/7 Emergency Service",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Get In <span className="text-cyan-300">Touch</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Contact us for a free consultation and estimate
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-2xl text-center"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-blue-100">{item.info}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Licensed & Insured Professionals",
                  "Advanced Equipment & Technology",
                  "Direct Insurance Billing",
                  "Satisfaction Guaranteed",
                  "Free Inspection & Estimate"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Request Free Estimate</h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
                
                <textarea
                  placeholder="Describe your water damage situation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  required
                />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Free Estimate
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
