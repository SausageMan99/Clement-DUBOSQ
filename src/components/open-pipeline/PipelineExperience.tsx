"use client";

import { useMemo, useState } from "react";
import { pipelineSteps } from "@/data/open-pipeline";
import { PipelineCanvas } from "./PipelineCanvas";

export function PipelineExperience() {
  const [active, setActive] = useState(0);
  const current = pipelineSteps[active] ?? pipelineSteps[0];
  const progress = useMemo(() => `${((active + 1) / pipelineSteps.length) * 100}%`, [active]);

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActive(Math.min(pipelineSteps.length - 1, index + 1));
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActive(Math.max(0, index - 1));
    }
  }

  return (
    <div className="pipeline-stage">
      <div className="control-room">
        <div>
          <p>
            Le cœur du site n’est pas une animation décorative. C’est un mini sales operating system : chaque étape réduit
            l’incertitude avant la suivante.
          </p>
          <p className="smallprint">Target → Signal → Contact → Qualify → Follow-up → Pipeline</p>
        </div>
        <div className="micro">Three.js discret dans la carte / GSAP pour la narration / fallback lisible sans canvas</div>
      </div>

      <div className="canvas-box">
        <PipelineCanvas activeStep={active} />
        <div className="canvas-fallback">Carte pipeline : 6 nœuds reliés, actif synchronisé avec l’étape sélectionnée.</div>
        <article className="field-card" data-index={current.index} aria-live="polite">
          <h3 id="pipe-title">{current.title}</h3>
          <p id="pipe-text">{current.text}</p>
        </article>
        <div className="pipeline-ui">
          <div className="steps" role="tablist" aria-label="Pipeline de prospection">
            {pipelineSteps.map((step, index) => (
              <button
                className="step"
                key={step.title}
                role="tab"
                type="button"
                aria-selected={active === index}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {step.title}
              </button>
            ))}
          </div>
          <div className="pipe-progress" aria-hidden="true">
            <span style={{ width: progress }} />
          </div>
        </div>
      </div>
    </div>
  );
}
