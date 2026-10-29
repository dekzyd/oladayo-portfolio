"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="navbar__logo">
          OLADAYO
        </a>

        <div className="navbar__links">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>

        <div className="navbar__status">
          <span className="navbar__dot"></span>
          AVAILABLE
        </div>

        <button
          className="navbar__menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          MENU
        </button>
      </nav>

      {/* MOBILE NAVBAR */}
      <div
        className={`mobile-menu${isOpen ? " is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu__top">
          <span>MENU</span>

          <button
            className="mobile-menu__close"
            type="button"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
          >
            CLOSE
          </button>
        </div>

        <nav className="mobile-menu__links">
          <a href="#work" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            WORK
          </a>
          <a href="#about" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            ABOUT
          </a>
          <a href="#contact" onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
            CONTACT
          </a>
        </nav>

        <div className="mobile-menu__footer">
          <span>ABUJA, NIGERIA</span>
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
      </div>
    </>
  );
}
