type SectionHeadingProps = {
  id: string;
  title: string;
};

export function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2 id={id} className="section-heading">
      {title}
    </h2>
  );
}
