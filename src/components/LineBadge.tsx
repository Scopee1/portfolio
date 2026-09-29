import type { SubwayLine } from "@/content/profile";

type LineBadgeProps = {
  line: SubwayLine;
  size?: "small" | "large";
};

export function LineBadge({ line, size = "small" }: LineBadgeProps) {
  return (
    <span className={`line-badge line-badge--${size}`} data-line={line} aria-hidden="true">
      {line}
    </span>
  );
}
