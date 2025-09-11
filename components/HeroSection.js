'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-black">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-20 w-36 h-36 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-20 blur-md shadow-[0_0_10px_rgba(220,38,127,0.12)]"
          animate={{ y: [0, -486, 0] }}
          transition={{ duration: 75, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-27 h-27 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-18 blur-md shadow-[0_0_8px_rgba(59,130,246,0.1)]"
          animate={{ y: [0, -324, 0] }}
          transition={{ duration: 75, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-20 left-1/3 w-45 h-45 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-22 blur-md shadow-[0_0_12px_rgba(220,38,127,0.14)]"
          animate={{ y: [0, -810, 0] }}
          transition={{ duration: 75, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-54 h-54 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-25 blur-md shadow-[0_0_15px_rgba(59,130,246,0.16)]"
          animate={{ y: [0, -1296, 0] }}
          transition={{ duration: 60, repeat: Infinity, delay: 3 }}
        />
        <motion.div
          className="absolute top-5 right-5 w-63 h-63 md:w-81 md:h-81 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-24 blur-md shadow-[0_0_18px_rgba(220,38,127,0.18)]"
          animate={{ y: [0, -972, 0] }}
          transition={{ duration: 75, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-28 blur-md shadow-[0_0_20px_rgba(59,130,246,0.2)]"
          animate={{ y: [0, -1620, 0] }}
          transition={{ duration: 45, repeat: Infinity, delay: 4 }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-54 h-54 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-24 blur-md shadow-[0_0_12px_rgba(220,38,127,0.18)]"
          animate={{ y: [0, -648, 0] }}
          transition={{ duration: 90, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-45 h-45 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-19 blur-md shadow-[0_0_10px_rgba(59,130,246,0.12)]"
          animate={{ y: [0, -486, 0] }}
          transition={{ duration: 60, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-30 h-30 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-18 blur-md shadow-[0_0_8px_rgba(220,38,127,0.1)]"
          animate={{ y: [0, -600, 0] }}
          transition={{ duration: 53, repeat: Infinity, delay: 0.1 }}
        />
        <motion.div
          className="absolute top-35 right-20 w-48 h-48 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-25 blur-md shadow-[0_0_20px_rgba(59,130,246,0.16)]"
          animate={{ y: [0, -1200, 0] }}
          transition={{ duration: 63, repeat: Infinity, delay: 1.1 }}
        />
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-54 h-54 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-22 blur-md shadow-[0_0_18px_rgba(220,38,127,0.14)]"
          animate={{ y: [0, -1050, 0] }}
          transition={{ duration: 77, repeat: Infinity, delay: 1.8 }}
        />
        <motion.div
          className="absolute top-55 left-10 w-39 h-39 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-20 blur-md shadow-[0_0_14px_rgba(59,130,246,0.12)]"
          animate={{ y: [0, -840, 0] }}
          transition={{ duration: 87, repeat: Infinity, delay: 2.6 }}
        />
        <motion.div
          className="absolute bottom-45 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-gradient-to-r from-blue-950 via-blue-900 to-gray-900 rounded-full opacity-24 blur-md shadow-[0_0_25px_rgba(220,38,127,0.18)]"
          animate={{ y: [0, -1350, 0] }}
          transition={{ duration: 93, repeat: Infinity, delay: 4.6 }}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 h-full">
        {/* Text Section */}
        <div className="flex-1 md:flex-[2] flex flex-col space-y-6 text-center md:text-left max-w-none md:max-w-4xl">
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
      </div>

      {/* Stairs Animation - Desktop only, positioned at bottom */}
      <div className="hidden md:flex absolute bottom-0 right-16 z-10 items-end gap-4 h-[48rem]">
        {[
          "w-[60px] h-64",
          "w-[60px] h-96",
          "w-[60px] h-[32rem]",
          "w-[60px] h-[40rem]",
          "w-[60px] h-[48rem]"
        ].map((sizeClasses, index) => (
          <motion.div
            key={index}
            className={`origin-bottom ${sizeClasses} bg-gradient-to-b from-blue-500 to-slate-800 border border-blue-400/30 rounded-lg shadow-[0_0_18px_rgba(59,130,246,0.3)] flex-shrink-0`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          />
        ))}
      </div>

      {/* Mobile stairs - centered below content with proper spacing */}
      <div className="md:hidden flex justify-center items-end gap-2 h-48 mt-12 px-4">
        {[
          "w-10 h-20",
          "w-10 h-28",
          "w-10 h-36", 
          "w-10 h-44",
          "w-10 h-48"
        ].map((sizeClasses, index) => (
          <motion.div
            key={`mobile-${index}`}
            className={`origin-bottom ${sizeClasses} bg-gradient-to-b from-blue-600 to-purple-700 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)] flex-shrink-0`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;