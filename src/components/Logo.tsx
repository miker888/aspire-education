import { Star } from "./Icon";

export function Logo({ tone = "navy", href = "#top" }: { tone?: "navy" | "white"; href?: string }) {
  return (
    <a href={href} className={`logo logo--${tone}`} aria-label="Aspire Education home">
      <span className="logo__row">
        <span className="logo__script">Aspire</span>
        <Star size={18} className="logo__star" />
      </span>
      <span className="logo__word">Education</span>
    </a>
  );
}
