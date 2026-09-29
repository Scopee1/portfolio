import { projects } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

function formatIndex(position: number) {
  return String(position + 1).padStart(2, "0");
}

export function Projects() {
  return (
    <section id="proyectos" className="section reveal" aria-labelledby="proyectos-title">
      <div className="container split">
        <SectionHeading id="proyectos-title" index="02" title="Proyectos" />
        <ol className="project-list split__body">
          {projects.map((project, position) => (
            <li key={project.title} className="project" data-featured={position === 0}>
              <article aria-labelledby={`proyecto-${position}`}>
                <div className="project__meta">
                  <span className="project__number" aria-hidden="true">
                    {formatIndex(position)}
                  </span>
                  <span className="project__kind">{project.kind}</span>
                </div>
                <h3 id={`proyecto-${position}`} className="project__title">
                  {project.title}
                </h3>
                <p className="project__description">{project.description}</p>
                <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
                  {project.technologies.map((technology) => (
                    <li key={technology} className="tag tag--quiet">
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="project__links">
                  {project.links.map((link) => (
                    <a key={link.href} className="text-link" href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <span className="visually-hidden"> de {project.title} (abre en una pestaña nueva)</span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
