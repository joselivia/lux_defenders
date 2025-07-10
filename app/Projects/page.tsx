
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PartnersAndTestimonials from "@/components/PartnersAndTestimonial";

const projects = [
  {
    title: "Banking Sector Penetration Test",
    description:
      "Simulated advanced cyber attacks on a regional bank's infrastructure to uncover vulnerabilities and strengthen defenses.",
    image: "/bank.jpg",
  },
  {
    title: "Cloud Security Hardening",
    description:
      "Conducted a full audit and reconfiguration of AWS cloud policies for a fintech startup.",
    image: "/cloud.jpg",
  },
  {
    title: "Incident Response for Retail Breach",
    description:
      "Responded to a live ransomware incident, containing and recovering affected retail infrastructure within 24 hours.",
    image: "/response.jpg",
  },
  {
    title: "GDPR Compliance Audit",
    description:
      "Performed a full GDPR readiness assessment and helped implement compliance strategies for a healthcare client.",
    image: "/gdpr.jpg",
  },
  {
    title: "Security Awareness Training",
    description:
      "Trained 500+ employees across 3 organizations in phishing detection, secure password use, and device hygiene.",
    image: "/training.jpg",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Integrated SIEM and threat intel feeds to monitor, detect and react to active threats in real-time.",
    image: "/threat.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
    <section className="bg-[#001a1c] text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
  
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4">
            Our Cybersecurity Projects
          </h1>
          <p className="text-gray-300 text-lg">
            A glimpse into how Lux Defenders secures businesses, one project at a time.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#00333a] rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-52 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <PartnersAndTestimonials />
    </div>
  );
}
