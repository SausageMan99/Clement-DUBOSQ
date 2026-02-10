"use client";

interface MarqueeProps {
  items: string[];
  separator?: string;
  className?: string;
  reverse?: boolean;
}

export function Marquee({
  items,
  separator = "—",
  className = "",
  reverse = false,
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="animate-marquee inline-flex"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        <span className="inline-block pr-4">{content}</span>
        <span className="inline-block pr-4">{content}</span>
      </div>
    </div>
  );
}
