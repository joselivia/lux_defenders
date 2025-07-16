"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import Image from "next/image";
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-10 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">CyberSecure</h2>
            <p className="text-gray-400 max-w-xs">
              Empowering your digital world with secure, modern cybersecurity
              solutions.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul className="text-gray-400 flex flex-col space-y-2">
            <a
              href="mailto:outreach@luxdefenders.live "
            >
              <li className="flex items-center gap-2">
                <HiOutlineMail />
                outreach@luxdefenders.live
              </li>
            </a>
            <li className="flex items-center gap-2">
              <MdOutlinePhoneForwarded />
              +254 700 000 000
            </li>
            <li className="flex items-center gap-2">
              <ImLocation2 />
              Nairobi, Kenya
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition">
              <FaXTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-600 transition"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <FaTelegram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CyberSecure. All rights reserved.
      </div>
    </motion.footer>
  );
}
