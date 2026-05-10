"use client";

import { useState } from "react";
import { sectors } from "@/data/open-pipeline";

export function FitMap() {
  const [activeKey, setActiveKey] = useState(sectors[0].key);
  const active = sectors.find((sector) => sector.key === activeKey) ?? sectors[0];

  return (
    <div className="fit-lab">
      <div className="map" aria-label="Carte des secteurs compatibles">
        <span className="axis x" />
        <span className="axis y" />
        <span className="axis-label top">Culture tech</span>
        <span className="axis-label bottom">Terrain commercial</span>
        <span className="axis-label left">Produit complexe</span>
        <span className="axis-label right">Relation premium</span>
        {sectors.map((sector) => (
          <button
            className={`sector ${sector.key === activeKey ? "active" : ""}`}
            key={sector.key}
            type="button"
            aria-pressed={sector.key === activeKey}
            style={{ left: `${sector.x}%`, top: `${sector.y}%` }}
            onClick={() => setActiveKey(sector.key)}
          >
            {sector.label}
          </button>
        ))}
      </div>
      <article className="fit-card" aria-live="polite">
        <h3>{active.title}</h3>
        <p>{active.text}</p>
        <div className="fit-meta">{active.meta}</div>
      </article>
    </div>
  );
}
