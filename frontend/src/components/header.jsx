"use client";
import { useState } from "react";

export const Logo = () => (
  <a href="/" className="text-blue-600 block leading-none hover:underline">
    <img alt="logo-big-new.svg" src="/logo.svg" className="h-6 w-auto" />
  </a>
);

export const MobileMenuButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="relative cursor-pointer flex items-center justify-center h-6 w-6 p-1"
  >
    <div className="absolute bg-gray-900 h-0.5 w-4 rounded-lg transform -translate-y-1"></div>
    <div className="absolute bg-gray-900 h-0.5 w-4 rounded-lg"></div>
    <div className="absolute bg-gray-900 h-0.5 w-4 rounded-lg transform translate-y-1"></div>
  </button>
);

export const Navbar = ({ onMenuOpen }) => (
  <div className="relative flex items-center bg-white h-18 px-6 md:px-8 py-4">
    <Logo />
    <div className="ml-auto">
      <MobileMenuButton onClick={onMenuOpen} />
    </div>
  </div>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.info(menuOpen, "menuOpen");

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="fixed w-full z-50 top-0">
        <Navbar onMenuOpen={() => setMenuOpen(true)} />
      </div>
      <div className="h-18"></div>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="ml-auto text-2xl font-bold cursor-pointer hover:text-gray-600"
          >
            ×
          </button>
          <nav className="flex flex-col gap-6 mt-12 text-lg font-medium">
            <a
              href="#about"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              About us
            </a>
            <a
              href="#tech"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Technology & innovation
            </a>
            <a
              href="#governance"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Governance & global operations
            </a>
            <a href="#csr" onClick={handleLinkClick} className="cursor-pointer hover:text-blue-600">
              Social responsibility & community
            </a>
            <a
              href="#media"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Media room
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Contact us
            </a>
            <a
              href="#careers"
              onClick={handleLinkClick}
              className="cursor-pointer hover:text-blue-600"
            >
              Careers ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;