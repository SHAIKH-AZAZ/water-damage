"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Incredible service! They responded within 30 minutes of my call and had the water extracted same day. Professional team and excellent communication throughout.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    location: "New York, NY",
    rating: 5,
    text: "After a pipe burst in my basement, these guys saved the day. Fast, efficient, and they worked directly with my insurance. Highly recommend!",
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    name: "Emily Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "Best water damage restoration company! They were thorough, professional, and got my home back to normal quickly. Thank you so much!",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all relative"
            >
              <FaQuoteLeft className="text-4xl text-blue-200 absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - satisfied water damage restoration customer`}
                  className="w-16 h-16 rounded-full border-4 border-blue-100"
                  loading="lazy"
                  width="64"
                  height="64"
                />
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full shadow-lg">
            <FaStar className="text-2xl" />
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-lg">Average Rating (500+ Reviews)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
