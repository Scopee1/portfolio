import { profile, projects } from "@/content/profile";
import { ArrowDownIcon } from "./Icons";
import { LineBadge } from "./LineBadge";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="station-sign">
        <div className="container station-sign__inner">
          <h1 id="hero-title" className="station-sign__title">
            {profile.fullName}
          </h1>
          <p className="station-sign__role">{profile.role}</p>
          <div className="connections">
            <p className="connections__label">Combinación con</p>
            <ul className="connections__list">
              {projects.map((project) => (
                <li key={project.slug}>
                  <a className="connection" href={`#proyecto-${project.slug}`}>
                    <LineBadge line={project.line} />
                    <span>{project.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container hero__body">
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#proyectos">
            Ver proyectos
            <ArrowDownIcon />
          </a>
          <a className="button button--secondary" href="#contacto">
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
}
