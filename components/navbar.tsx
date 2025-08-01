'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiX } from 'react-icons/bi';
import Image from 'next/image';
import { TiThMenu } from 'react-icons/ti';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About Us' },
  { href: '/Service', label: 'Our Services' },
  { href: '/Projects', label: 'Our Projects' },
  { href: '/Tools', label: 'Tools' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  useEffect(() => {
    const savedSection = localStorage.getItem('activeSection');
    const currentPath = window.location.pathname;
    const matchingItem = navItems.find(
      (item) => item.href === currentPath || item.href === `/${savedSection}`
    );

    if (matchingItem) {
      setActiveSection(matchingItem.href.replace('/', '') || 'Home');
    } else {
      setActiveSection('Home');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('/', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1a2e] text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:gap-8 gap-4 md:items-center absolute md:static bg-[#1a1a2e] top-10 right-0 w-2/4 h-screen md:h-auto px-6 py-4 md:p-0 transition-all duration-300 z-40`}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('/', '') || 'Home';
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(sectionId);
                  setMenuOpen(false);
                }}
                className={`relative transition-colors duration-300 ${
                  isActive ? 'text-[#00c9a7]' : 'text-white hover:text-[#00c9a7]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="block h-[2px] bg-[#00c9a7] w-full transition-all duration-300 mt-1" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden h-full cursor-pointer text-3xl text-white" onClick={toggleMenu}>
          {menuOpen ? <BiX /> : <TiThMenu />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;