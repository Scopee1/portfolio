"use client";

import { MoonIcon, SunIcon } from "./Icons";

const THEME_STORAGE_KEY = "theme";

function currentTheme(): "light" | "dark" {
  const explicitTheme = document.documentElement.dataset.theme;
  if (explicitTheme === "light" || explicitTheme === "dark") return explicitTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleTheme() {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {}
}

export function ThemeToggle() {
  return (
    <button type="button" className="icon-button theme-toggle" onClick={toggleTheme}>
      <span className="visually-hidden">Alternar modo claro y oscuro</span>
      <span className="theme-toggle__moon">
        <MoonIcon />
      </span>
      <span className="theme-toggle__sun">
        <SunIcon />
      </span>
    </button>
  );
}
