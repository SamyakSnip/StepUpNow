'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative pt-14 pb-16 md:pt-24 md:pb-24 min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-36 h-36 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-40 blur-md shadow-[0_0_10px_rgba(147,51,234,0.3)]"
          animate={{ y: [0, -486, 0] }}
          transition={{ duration: 112.5, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-27 h-27 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-35 blur-md shadow-[0_0_8px_rgba(59,130,246,0.3)]"
          animate={{ y: [0, -324, 0] }}
          transition={{ duration: 112.5, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-20 left-1/3 w-45 h-45 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-40 blur-md shadow-[0_0_12px_rgba(147,51,234,0.3)]"
          animate={{ y: [0, -810, 0] }}
          transition={{ duration: 112.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-54 h-54 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-50 blur-md shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          animate={{ y: [0, -1296, 0] }}
          transition={{ duration: 90.0, repeat: Infinity, delay: 3 }}
        />
        <motion.div
          className="absolute top-5 right-5 w-63 h-63 md:w-81 md:h-81 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-45 blur-md shadow-[0_0_18px_rgba(147,51,234,0.35)]"
          animate={{ y: [0, -972, 0] }}
          transition={{ duration: 112.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-55 blur-md shadow-[0_0_20px_rgba(34,197,94,0.45)]"
          animate={{ y: [0, -1620, 0] }}
          transition={{ duration: 67.5, repeat: Infinity, delay: 4 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-54 h-54 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-45 blur-md shadow-[0_0_12px_rgba(59,130,246,0.35)]"
          animate={{ y: [0, -648, 0] }}
          transition={{ duration: 135.0, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-45 h-45 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-35 blur-md shadow-[0_0_10px_rgba(147,51,234,0.2)]"
          animate={{ y: [0, -486, 0] }}
          transition={{ duration: 90.0, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-30 h-30 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-30 blur-md shadow-[0_0_8px_rgba(147,51,234,0.2)]"
          animate={{ y: [0, -600, 0] }}
          transition={{ duration: 80.0, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="absolute top-35 right-20 w-48 h-48 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-45 blur-md shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          animate={{ y: [0, -1200, 0] }}
          transition={{ duration: 95.0, repeat: Infinity, delay: 1.1 }}
        />
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-54 h-54 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-40 blur-md shadow-[0_0_18px_rgba(147,51,234,0.3)]"
          animate={{ y: [0, -1050, 0] }}
          transition={{ duration: 115.0, repeat: Infinity, delay: 1.8 }}
        />
        <motion.div
          className="absolute top-55 left-10 w-39 h-39 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-35 blur-md shadow-[0_0_14px_rgba(34,197,94,0.3)]"
          animate={{ y: [0, -840, 0] }}
          transition={{ duration: 130.0, repeat: Infinity, delay: 2.6 }}
        />
        <motion.div
          className="absolute bottom-45 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-700 rounded-full opacity-45 blur-md shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          animate={{ y: [0, -1350, 0] }}
          transition={{ duration: 140.0, repeat: Infinity, delay: 4.6 }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 h-full">
        {/* Text Section */}
        <div className="flex-1 md:flex-[2] flex flex-col space-y-6 text-center md:text-left max-w-xl md:max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-snug text-white">
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
            className="self-center md:self-start w-96 text-center bg-white text-black px-8 py-5 rounded-lg text-xl hover:bg-gray-100 hover:shadow-xl transition duration-300 shadow-lg transform hover:scale-105"
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
