"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NetworkField() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.innerWidth < 768) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (width === 0 || height === 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    mount.appendChild(renderer.domElement);

    const NODE_COUNT = 46;
    const positions = new Float32Array(NODE_COUNT * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities.push({
        x: (Math.random() - 0.5) * 0.006,
        y: (Math.random() - 0.5) * 0.006,
        z: (Math.random() - 0.5) * 0.004,
      });
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pointsMat = new THREE.PointsMaterial({ color: 0xc9a24b, size: 0.06, transparent: true, opacity: 0.75 });
    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    const maxLinks = NODE_COUNT * 4;
    const linePositions = new Float32Array(maxLinks * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x4e7a6b, transparent: true, opacity: 0.18 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    let rafId = 0;
    const animate = () => {
      const pos = pointsGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < NODE_COUNT; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;
        if (Math.abs(pos[i * 3]) > 8) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 4) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 3) velocities[i].z *= -1;
      }
      pointsGeo.attributes.position.needsUpdate = true;

      let linkIndex = 0;
      const linePos = lineGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < NODE_COUNT && linkIndex < maxLinks; i++) {
        for (let j = i + 1; j < NODE_COUNT && linkIndex < maxLinks; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 2.6) {
            linePos[linkIndex * 6] = pos[i * 3];
            linePos[linkIndex * 6 + 1] = pos[i * 3 + 1];
            linePos[linkIndex * 6 + 2] = pos[i * 3 + 2];
            linePos[linkIndex * 6 + 3] = pos[j * 3];
            linePos[linkIndex * 6 + 4] = pos[j * 3 + 1];
            linePos[linkIndex * 6 + 5] = pos[j * 3 + 2];
            linkIndex++;
          }
        }
      }
      lineGeo.setDrawRange(0, linkIndex * 2);
      lineGeo.attributes.position.needsUpdate = true;

      points.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      pointsGeo.dispose();
      pointsMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 hidden md:block" style={{ pointerEvents: "none" }} aria-hidden="true" />
  );
}
