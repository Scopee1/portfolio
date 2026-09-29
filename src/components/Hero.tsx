import { profile, projects } from "@/content/profile";

const featuredProject = projects[0];

export function Hero() {
  return (
    <section id="inicio" className="hero section" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title" className="hero__title">
            {profile.fullName}
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#proyectos">
              Ver proyectos
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--ghost" href="#contacto">
              Contactarme
            </a>
          </div>
        </div>

        <aside className="hero__card" aria-label="Resumen">
          <svg className="avatar" role="img" aria-label={`Monograma de ${profile.fullName}`} viewBox="0 0 120 120">
            <rect width="120" height="120" rx="28" className="avatar__background" />
            <text x="60" y="78" textAnchor="middle" className="avatar__initials">
              {profile.initials}
            </text>
          </svg>
          <dl className="facts">
            <div className="facts__row">
              <dt>Hoy</dt>
              <dd>
                Desarrollando{" "}
                <a href={featuredProject.links[0].href} target="_blank" rel="noopener noreferrer">
                  {featuredProject.title}
                </a>
              </dd>
            </div>
            <div className="facts__row">
              <dt>Formación</dt>
              <dd>{profile.studies}</dd>
            </div>
            <div className="facts__row">
              <dt>Stack</dt>
              <dd>TypeScript · Next.js · NestJS</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
