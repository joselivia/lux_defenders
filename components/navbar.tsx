'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import Image from 'next/image';
import { TiThMenu } from 'react-icons/ti';
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1a2e] text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
   <div className="w-32 sm:w-40 md:w-48">
  <Image
    src="/logo.png"
    alt="logo"
    width={0}
    height={0}

  />Lux Defenders
</div>

      <nav
  className={`${
    menuOpen ? 'flex' : 'hidden'
  } md:flex flex-col md:flex-row md:gap-8 gap-4 md:items-center absolute md:static bg-[#1a1a2e] top-10 right-0 w-2/4 h-screen md:h-auto px-6 py-4 md:p-0 transition-all duration-300 z-40`}
>

     {navItems.map((item) => {
  const sectionId = item.href.replace('#', '');
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
  {menuOpen ? <BiMenuAltRight />:<TiThMenu />  }
</div>

      </div>
    </header>
  );
};

export default Navbar;
