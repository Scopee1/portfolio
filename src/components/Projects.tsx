import { projects } from "@/content/profile";
import { ArrowUpRightIcon } from "./Icons";
import { LineBadge } from "./LineBadge";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="proyectos" className="section" aria-labelledby="proyectos-title">
      <div className="container split">
        <SectionHeading id="proyectos-title" title="Proyectos" />
        <ul className="project-list split__body">
          {projects.map((project) => (
            <li key={project.slug} id={`proyecto-${project.slug}`} className="project" data-line={project.line}>
              <article aria-labelledby={`proyecto-${project.slug}-title`}>
                <div className="project__header">
                  <LineBadge line={project.line} size="large" />
                  <div>
                    <h3 id={`proyecto-${project.slug}-title`} className="project__title">
                      {project.title}
                    </h3>
                    <p className="project__kind">{project.kind}</p>
                  </div>
                </div>
                <p className="project__description">{project.description}</p>
                <p className="project__stack">
                  <span className="visually-hidden">Tecnologías: </span>
                  {project.technologies.join(" · ")}
                </p>
                <div className="project__links">
                  {project.links.map((link) => (
                    <a key={link.href} className="project__link" href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <span className="visually-hidden"> de {project.title} (abre en una pestaña nueva)</span>
                      <ArrowUpRightIcon size={16} />
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
