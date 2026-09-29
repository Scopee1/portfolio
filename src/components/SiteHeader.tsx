"use client";

import { useEffect, useState } from "react";
import { navigationLinks, profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label={`${profile.fullName}, volver al inicio`}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__name">{profile.fullName}</span>
        </a>

        <nav className="site-nav" aria-label="Principal">
          <ul id="menu-principal" className="site-nav__list" data-open={isMenuOpen}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-button"
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
