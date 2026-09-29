import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const signageFont = Archivo({
  variable: "--font-signage",
  subsets: ["latin"],
  axes: ["wdth"],
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
    { media: "(prefers-color-scheme: light)", color: "#141517" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Runs before first paint so a stored theme never flashes the wrong colors.
const restoreThemeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={signageFont.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: restoreThemeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
