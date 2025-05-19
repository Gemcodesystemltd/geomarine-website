"use client";
import React from "react";
import { motion } from "framer-motion";

export function NavBanner({ bgImage, title, description }) {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section
      className="nav-banner bg-cover bg-center text-white py-56 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* Overlay */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariant}
        className="relative px-4 md:px-16 mx-auto z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </motion.div>
    </section>
  );
}
