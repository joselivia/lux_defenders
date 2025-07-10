// components/TeamShowcase.tsx

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

export default function TeamShowcase() {
  return (<div>
      <section className="flex flex-col md:flex-row bg-[#002f34] text-white min-h-screen overflow-hidden">
        <div className="md:w-1/2 w-full p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4">Meet</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Lux Defenders</h2>
          <p className="text-lg text-gray-300 max-w-xl">
            What makes a great Lux Defenders team member? Beyond the basics – smart,
            hardworking, collaborative – our strengths are in our diversity, our creativity,
            and our commitment to security excellence. We build better – together.
          </p>
          <p className="text-white mt-6 font-semibold">#CyberTeam</p>
        </div>

        <div className="md:w-1/2 w-full overflow-hidden py-10 space-y-6">
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              className="flex space-x-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20 + row * 5, 
                ease: "linear",
              }}
            >
              {[...images, ...images].map((src, index) => (
                <div
                  key={`${row}-${index}`}
                  className="min-w-[200px] md:min-w-[250px] h-[200px] md:h-[300px] relative"
                >
                  <Image
                    src={src}
                    alt={`Team ${index}`}
                    fill
                    className="object-fit rounded-xl"
                  />
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        
      </section>
<section className="bg-[#001a1c] text-white py-16 px-6 md:px-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
    
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg md:w-1/2 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Our Vision</h2>
      <p className="text-white text-lg">
        <span className="font-bold text-yellow-400">“Building a cyber-safe world</span> where individuals and businesses
        operate without fear of digital threats.” We believe in empowering our
        clients with peace of mind through resilient digital defense.
      </p>
    </div>

    <div className="md:w-1/2 w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">Our Journey</h2>
      <p className="text-lg text-gray-300 mb-4">
        Founded in June 2025, <span className="font-semibold text-white">Lux Defenders</span> is a dynamic cybersecurity firm
        dedicated to protecting businesses and individuals from evolving digital threats. Our
        mission is to deliver cutting-edge services with a focus on innovation, trust, and
        excellence.
      </p>
      <p className="text-lg text-gray-300">
        From penetration testing to threat intelligence, our team leverages the latest
        technologies to safeguard your digital assets. Join us in building a secure future.
      </p>
      <p className="text-cyan-400 mt-6 font-semibold">CyberSecurity LuxDefenders</p>
    </div>

  </div>
</section>
<section className="bg-[#002226] text-white p-6 md:px-10">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">Meet Our Team</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        { name: "Joseph Mutunga", role: "CEO & Founder", image: "/logo.png",bio: "Visionary leader with a passion for digital defense and innovation." },
        { name: "Jane Wanjiku", role: "Cybersecurity Analyst", image: "/team2.jpg", bio: "Expert in threat detection and incident response, ensuring robust security." },
        { name: "Brian Otieno", role: "Penetration Tester", image: "/team3.jpg", bio: "Specializes in identifying vulnerabilities and strengthening defenses." },
        { name: "Linda Mwikali", role: "Network Security Engineer", image: "/team4.jpg", bio: "Ensures secure network architecture and data protection." },
        { name: "Kevin Kamau", role: "Cloud Security Specialist", image: "/team5.jpg", bio: "Expert in securing cloud environments and data integrity." },
        { name: "Mercy Achieng", role: "Threat Intelligence Lead", image: "/team6.jpg", bio: "Analyzes cyber threats to provide actionable intelligence." },
      ].map((member, index) => (
      <div
  key={index}
  className="flex flex-col items-center text-center bg-[#00333a] rounded-xl p-4 hover:shadow-xl transition relative"
>
  <div className="w-50 h-50 relative mb-4 group overflow-hidden rounded-xl border-4 border-cyan-400">
    {/* Image */}
    <Image
      src={member.image}
      alt={member.name}
      fill
      className="object-fit transition-transform duration-500 group-hover:scale-110"
    />

 
    <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4 rounded-2xl">
      <p className="text-sm text-left">
        {member.bio}
      </p>
      <div className="mt-2 text-right font-signature text-cyan-400">
        — {member.name}
      </div>
    </div>
  </div>

  <h3 className="text-xl font-semibold">{member.name}</h3>
  <p className="text-sm text-gray-400 mt-1">{member.role}</p>
</div>

      ))}
    </div>
  </div>
</section>

</div>
  
  );
}