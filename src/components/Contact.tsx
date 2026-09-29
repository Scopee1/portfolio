import { profile } from "@/content/profile";
import { ContactForm } from "./ContactForm";
import { ArrowUpRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const contactChannels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, isExternal: false },
  { label: "GitHub", value: `@${profile.githubHandle}`, href: profile.githubUrl, isExternal: true },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedinUrl, isExternal: true },
].filter((channel) => channel.href);

export function Contact() {
  return (
    <section id="contacto" className="section section--terminal" aria-labelledby="contacto-title">
      <div className="container split">
        <SectionHeading id="contacto-title" title="Contacto" />
        <div className="split__body contact">
          <div>
            <p className="contact__lead">
              ¿Tenés un proyecto, una búsqueda o una pregunta? Escribime y te respondo a la brevedad.
            </p>
            <ul className="channels">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    className="channel"
                    href={channel.href}
                    {...(channel.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className="channel__label">{channel.label}</span>
                    <span className="channel__value">{channel.value}</span>
                    <span className="channel__arrow">
                      <ArrowUpRightIcon />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm recipientEmail={profile.email} />
        </div>
      </div>
    </section>
  );
}
