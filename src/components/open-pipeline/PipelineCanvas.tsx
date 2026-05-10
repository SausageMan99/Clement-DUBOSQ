"use client";

import { useEffect, useRef } from "react";

type PipelineCanvasProps = {
  activeStep: number;
};

type ThreeModule = typeof import("three");

export function PipelineCanvas({ activeStep }: PipelineCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const apiRef = useRef<{ setActive: (index: number) => void } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    if (reduce || mobile) return;

    let alive = true;
    let frame = 0;
    let cleanup: (() => void) | undefined;

    async function init() {
      const THREE: ThreeModule = await import("three");
      if (!alive || !canvasRef.current) return;
      const box = canvasRef.current.parentElement;
      if (!box) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 9);
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

      const positions: [number, number, number][] = [
        [-4, -1.25, 0],
        [-2.4, 0.9, 0.35],
        [-0.8, -0.3, -0.25],
        [0.85, 1.05, 0.25],
        [2.35, -0.55, -0.1],
        [4, 0.8, 0.35],
      ];
      const nodeGeometry = new THREE.SphereGeometry(0.13, 24, 24);
      const nodes: import("three").Mesh[] = [];
      const lines: import("three").Line[] = [];
      const idleMaterial = new THREE.MeshBasicMaterial({ color: 0xfbf7ee, transparent: true, opacity: 0.72 });
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xd7c7a3, transparent: true, opacity: 0.36 });

      positions.forEach((position, index) => {
        const node = new THREE.Mesh(nodeGeometry, idleMaterial.clone());
        node.position.set(position[0], position[1], position[2]);
        node.userData.base = position;
        scene.add(node);
        nodes.push(node);

        if (index > 0) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(...positions[index - 1]),
            new THREE.Vector3(...position),
          ]);
          const line = new THREE.Line(geometry, lineMaterial.clone());
          scene.add(line);
          lines.push(line);
        }
      });

      const dustGeometry = new THREE.BufferGeometry();
      const dustPositions = [];
      for (let index = 0; index < 110; index += 1) {
        dustPositions.push((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 4.8, (Math.random() - 0.5) * 3);
      }
      dustGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dustPositions, 3));
      const dustMaterial = new THREE.PointsMaterial({ size: 0.012, color: 0xfbf7ee, transparent: true, opacity: 0.32 });
      const dust = new THREE.Points(dustGeometry, dustMaterial);
      scene.add(dust);

      function resize() {
        if (!box) return;
        const rect = box.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / Math.max(1, rect.height);
        camera.updateProjectionMatrix();
      }

      function setActive(index: number) {
        nodes.forEach((node, nodeIndex) => {
          const material = node.material as import("three").MeshBasicMaterial;
          material.color.set(nodeIndex <= index ? 0xb33b2e : 0xfbf7ee);
          material.opacity = nodeIndex <= index ? 1 : 0.62;
          node.scale.setScalar(nodeIndex === index ? 2.2 : nodeIndex < index ? 1.45 : 1);
        });
        lines.forEach((line, lineIndex) => {
          const material = line.material as import("three").LineBasicMaterial;
          material.color.set(lineIndex < index ? 0xb33b2e : 0xd7c7a3);
          material.opacity = lineIndex < index ? 0.95 : 0.35;
        });
      }

      apiRef.current = { setActive };
      setActive(0);
      resize();
      window.addEventListener("resize", resize);

      let tick = 0;
      function render() {
        tick += 0.006;
        dust.rotation.z += 0.0008;
        nodes.forEach((node, index) => {
          const base = node.userData.base as [number, number, number];
          node.position.y = base[1] + Math.sin(tick * 2 + index) * 0.04;
        });
        scene.rotation.y = Math.sin(tick) * 0.08;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      }
      render();

      cleanup = () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(frame);
        nodeGeometry.dispose();
        idleMaterial.dispose();
        lineMaterial.dispose();
        dustGeometry.dispose();
        dustMaterial.dispose();
        nodes.forEach((node) => (node.material as import("three").Material).dispose());
        lines.forEach((line) => {
          line.geometry.dispose();
          (line.material as import("three").Material).dispose();
        });
        renderer.dispose();
        apiRef.current = null;
      };
    }

    init();
    return () => {
      alive = false;
      cleanup?.();
    };
  }, []);

  useEffect(() => {
    apiRef.current?.setActive(activeStep);
  }, [activeStep]);

  return <canvas ref={canvasRef} id="pipeline3d" aria-hidden="true" />;
}
