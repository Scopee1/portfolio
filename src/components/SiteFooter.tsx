import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>
          Hecho con Next.js ·{" "}
          <a className="text-link" href={profile.repositoryUrl} target="_blank" rel="noopener noreferrer">
            Ver el código
          </a>
        </p>
      </div>
    </footer>
  );
}
