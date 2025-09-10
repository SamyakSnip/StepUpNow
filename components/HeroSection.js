'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative pt-14 pb-16 md:pt-24 md:pb-24 min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-8 h-8 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-25 blur-sm shadow-[0_0_10px_rgba(147,51,234,0.15)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.02, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-6 h-6 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-20 blur-sm shadow-[0_0_8px_rgba(59,130,246,0.15)]"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 0.02, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-20 left-1/3 w-10 h-10 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-25 blur-sm shadow-[0_0_12px_rgba(147,51,234,0.15)]"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.02, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-35 blur-sm shadow-[0_0_15px_rgba(59,130,246,0.25)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.016, repeat: Infinity, delay: 3 }}
        />
        <motion.div
          className="absolute top-5 right-5 w-14 h-14 md:w-18 md:h-18 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-30 blur-sm shadow-[0_0_18px_rgba(147,51,234,0.2)]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.02, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-40 blur-sm shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.012, repeat: Infinity, delay: 4 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-30 blur-sm shadow-[0_0_12px_rgba(59,130,246,0.2)]"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.024, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-10 h-10 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-800 rounded-full opacity-20 blur-sm shadow-[0_0_10px_rgba(147,51,234,0.1)]"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.016, repeat: Infinity, delay: 1.5 }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 h-full">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left max-w-xl md:max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
            Get There Faster — With Someone Who Just Did
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Land your dream job with 1-on-1 mentorship from top college achievers
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
            Book a session for just ₹349 and get real answers.
          </p>
          <Link
            href="/mentors"
            className="block mx-auto md:mx-0 w-44 md:w-auto text-center bg-white text-black px-8 py-4 rounded-lg text-xl sm:text-lg hover:bg-gray-100 hover:shadow-xl transition duration-300 shadow-lg transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
        
        {/* Animation Section */}
        <div className="flex-1 relative z-10 w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Hero Image"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg border-2 border-white/20"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
