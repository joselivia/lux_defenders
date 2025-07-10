"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const partnerLogos = [
  "/partners/cisco.png",
  "/partners/microsoft.png",
  "/partners/aws.png",
  "/partners/google.png",
  "/partners/ibm.png",
  "/partners/cloudflare.png",
];

const testimonials = [
  {
    name: "David Kimani",
    role: "CTO, Safebank Kenya",
    quote: "Lux Defenders helped us avoid a serious breach. Professional, fast, and precise.",
  },
  {
    name: "Faith Wambui",
    role: "Founder, TechLink",
    quote: "Highly impressed by their penetration testing. Found vulnerabilities we never knew existed.",
  },
  {
    name: "Samuel Otieno",
    role: "IT Manager, HealthCare Plus",
    quote: "The cybersecurity awareness training changed how our team approaches digital safety.",
  },
  {
    name: "Aisha Hassan",
    role: "COO, CloudLogix",
    quote: "Trustworthy, reliable, and incredibly smart — Lux Defenders is our long-term security partner.",
  },
];

export default function PartnersAndTestimonials() {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        },
      });
    } else {
      controls.stop(); // pause on hover
    }
  }, [isHovered, controls]);

  return (
    <>
      {/* Trusted Partners */}
      <section className="bg-[#002226] text-white py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
            {partnerLogos.map((logo, i) => (
              <div key={i} className="relative h-12 w-full">
                <Image
                  src={logo}
                  alt={`Partner ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-[#001a1c] text-white py-16 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            What Our Clients Say
          </h2>
        </div>

        <motion.div
          className="flex space-x-10 w-max"
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-[#00333a] border border-cyan-400 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <FaUserCircle size={32} className="text-cyan-400 mr-3" />
                <div className="text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">“{testimonial.quote}”</p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
