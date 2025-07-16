'use client'
import React from "react";
import Typewriter from "typewriter-effect";
const services = [
  "Network Penetration Testing",
  "Red/Blue Team Engagement",
  "Incident Response & Forensics",
  "Security Awareness Training",
  "Compliance & Risk Assessments",
];

const portfolio = [
  {
    title: "Healthcare Network Hardening",
    description: "Secured 50+ hospitals' infrastructure",
    id: 1,
  },
  {
    title: "E-commerce Breach Containment",
    description: "Resolved 72-hour data breach",
    id: 2,
  },
  {
    title: "Financial Data Encryption Audit",
    description: "Improved encryption by 95%",
    id: 3,
  },
];

const clients = [
  { name: "CyberShield Inc", logo: "/images/b2.png" },
  { name: "FinSecure", logo: "/images/b3.png" },
  { name: "MediSafe Systems", logo: "/images/b4.png" },
];

const Home = () => {
  return (
    <div className="relative text-white overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-1/2 object-cover z-[-10] pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/bg.mp4"
      />
      <div className="absolute inset-0 " />
      <section className="min-h-screen relative bg-blue-900 opacity-60 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Digital Fortification. Elite Execution.
        </h1>
        <h2 className="text-4xl font-bold mb-6 text-white">
          <Typewriter
            options={{
              strings: [
                "Penetration Testing (Ethical Hacking)",
                "Vulnerability Assessments",
                "Security Audits & Compliance",
                "Cloud Security Services",
                "Incident Response & Digital Forensics",
                "Managed Security Services (MSSP)",
                "Cybersecurity Awareness Training",
                "Data Privacy & Encryption Consulting",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p
          className="text-lg md:text-xl max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We protect, assess, and respond — ensuring your digital infrastructure
          stays resilient and compliant.
        </p>
      </section>
     <section className="bg-black bg-opacity-90 py-16 px-6 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-8" data-aos="fade-up">
          Our Core Cybersecurity Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="p-6 bg-gray-900 rounded-xl hover:scale-105 transition transform duration-300"
            >
              <h3 className="text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 bg-gray-950 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">
          Highlighted Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolio.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 bg-black bg-opacity-90 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-10" data-aos="fade-up">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="w-32 h-16 flex justify-center items-center bg-white rounded-md p-2 hover:scale-110 transition"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain h-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
