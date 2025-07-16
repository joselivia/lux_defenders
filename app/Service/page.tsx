"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaBug, FaNetworkWired, FaCloud, FaUsers, FaSearch } from "react-icons/fa";

const services = [
  {
    title: "Penetration Testing",
    description:
      "We simulate real-world attacks to uncover vulnerabilities before hackers do, ensuring your systems are resilient.",
    icon: <FaBug size={30} />,
  },
  {
    title: "Threat Intelligence",
    description:
      "Stay ahead of attackers with continuous monitoring and real-time threat alerts tailored to your environment.",
    icon: <FaSearch size={30} />,
  },
  {
    title: "Network Security",
    description:
      "We secure your internal and external networks, firewalls, and infrastructure against unauthorized access.",
    icon: <FaNetworkWired size={30} />,
  },
{
  title: "Red/Blue Team Engagement",
  description:
    "Simulate real-world cyberattacks and defenses with Red/Blue Team exercises to identify vulnerabilities, strengthen security controls, and enhance incident response capabilities.",
  icon:<FaShieldAlt size={30} />
},
  {
    title: "Security Awareness Training",
    description:
      "Empower your employees to recognize and respond to cyber threats with expert-led awareness programs.",
    icon: <FaUsers size={30} />,
  },
  {
    title: "Compliance & Risk Consulting",
    description:
      "We help you meet standards like GDPR, ISO 27001, and more through audits, strategy, and policy development.",
    icon: <FaShieldAlt size={30} />,
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#001a1c] text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-cyan-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Cybersecurity Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#00333a] rounded-xl p-6 shadow-lg hover:shadow-cyan-500/40 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center justify-center mb-4 text-cyan-400">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
