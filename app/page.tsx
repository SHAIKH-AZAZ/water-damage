"use client";

import Hero from "@/components/Hero";
import Services from "../components/Services"
import Process from "../components/Process";
import Emergency from "../components/Emergency";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Emergency />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
