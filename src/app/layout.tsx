import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const displayFont = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
  description: profile.tagline,
  authors: [{ name: profile.fullName, url: profile.githubUrl }],
  openGraph: {
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#151412" },
  ],
};

// Runs before first paint so a stored theme never flashes the wrong colors.
const restoreThemeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bodyFont.variable} ${monoFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreThemeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
