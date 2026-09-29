type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
};

export function SectionHeading({ id, index, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-heading__index" aria-hidden="true">
        {index}
      </span>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
    </div>
  );
}
