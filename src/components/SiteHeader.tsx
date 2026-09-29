"use client";

import { useEffect, useState } from "react";
import { navigationLinks, profile } from "@/content/profile";
import { CloseIcon, MenuIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = navigationLinks.map((link) => link.href.slice(1));
const ACTIVE_BAND_MARGIN = "-45% 0px -50% 0px";

function useActiveSection() {
  const [activeSectionId, setActiveSectionId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSectionId(visibleEntry.target.id);
      },
      { rootMargin: ACTIVE_BAND_MARGIN },
    );
    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return activeSectionId;
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSectionId = useActiveSection();

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
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__name">{profile.fullName}</span>
          <span className="visually-hidden">, volver al inicio</span>
        </a>

        <nav className="route" aria-label="Principal">
          <ol id="menu-principal" className="route__stations" data-open={isMenuOpen}>
            {navigationLinks.map((link) => {
              const isCurrent = link.href === `#${activeSectionId}`;
              return (
                <li key={link.href} className="route__station">
                  <a
                    className="route__link"
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isCurrent ? "location" : undefined}
                  >
                    <span className="route__dot" aria-hidden="true" />
                    <span className="route__label">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
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
            {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
