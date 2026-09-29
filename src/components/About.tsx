import { biography, skillGroups } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre-mi" className="section reveal" aria-labelledby="sobre-mi-title">
      <div className="container split">
        <SectionHeading id="sobre-mi-title" index="01" title="Sobre mí" />
        <div className="split__body">
          <div className="prose">
            {biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.title} className="skills__group">
                <h3 className="skills__title">{group.title}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="tag">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
