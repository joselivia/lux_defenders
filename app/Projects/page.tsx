"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PartnersAndTestimonials from "@/components/PartnersAndTestimonial";
const products = [
  {
    name: "LuxOS (Operating System)",
    description:
      "A secure, lightweight, and privacy-focused operating system designed for enterprise and individual cybersecurity needs.",
    icon: "/icons/os-icon.svg",
    link: "",
  },
  {
    name: "Secure Background Remover",
    description:
      "Remove image backgrounds securely on-device, ensuring sensitive data never leaves your control.",
    icon: "/icons/bg-remover-icon.svg",
    link: "",
  },
  {
    name: "Threat Intelligence Platform",
    description:
      "Real-time threat feeds and actionable insights to proactively defend against emerging cyber threats.",
    icon: "/icons/threat-intelligence-icon.svg",
    link: "",
  },
  {
    name: "Secure Communication Suite",
    description:
      "End-to-end encrypted communication tools for secure team collaboration and data exchange.",
    icon: "/icons/comm-suite-icon.svg",
    link: "",
  },
];
const projects = [
  {
    title: "Banking Sector Penetration Test",
    description:
      "Simulated advanced cyber attacks on a regional bank's infrastructure to uncover vulnerabilities and strengthen defenses.",
    image: "/images/penetration.png",
  },
  {
    title: "Cloud Security Hardening",
    description:
      "Conducted a full audit and reconfiguration of AWS cloud policies for a fintech startup.",
    image: "/images/cloud.jpg",
  },
  {
    title: "Incident Response for Retail Breach",
    description:
      "Responded to a live ransomware incident, containing and recovering affected retail infrastructure within 24 hours.",
    image: "/images/Incident-Response.jpg",
  },
  {
    title: "GDPR Compliance Audit",
    description:
      "Performed a full GDPR readiness assessment and helped implement compliance strategies for a healthcare client.",
    image: "/images/GDPR.png",
  },
  {
    title: "Security Awareness Training",
    description:
      "Trained 500+ employees across 3 organizations in phishing detection, secure password use, and device hygiene.",
    image: "/images/security-Awareness.png",
  },
  {
    title: "Threat Intelligence Integration",
    description:
      "Integrated SIEM and threat intel feeds to monitor, detect and react to active threats in real-time.",
    image: "/images/Cyber-Threat-Intelligence.png",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative">
          <section className="container max-w-full p-6 bg-black bg-opacity-90 text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-blue-900 dark:text-white">
          Our Innovative Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="block p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300
                         bg-[#001a1c] text-gray-800 dark:text-gray-200
                         transform hover:-translate-y-2"
            >
              {product.icon && (
                <img
                  src={product.icon}
                  alt={`${product.name} Icon`}
                  className="w-16 h-16 mx-auto mb-4"
                />
              )}
              <h3 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-400">
                {product.name}
              </h3>
              <p className="text-lg text-white text-bold">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </section>
      <section className="bg-[#001a1c] text-white py-16 px-6 md:px-10">
        <div className="max-w-full">
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
              A glimpse into how Lux Defenders secures businesses, one project
              at a time.
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    className="object-fit rounded-t-xl"
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
