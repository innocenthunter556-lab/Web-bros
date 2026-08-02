"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.innerWidth < 768) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (width === 0 || height === 0) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xf2ede4, 0.35);
    scene.add(ambient);
    const keyLight = new THREE.PointLight(0xc9a24b, 4.5, 22);
    keyLight.position.set(4, 3.5, 5);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x4e7a6b, 2.5, 22);
    rimLight.position.set(-4, -2.5, 3);
    scene.add(rimLight);

    const geo = new THREE.IcosahedronGeometry(1.55, 0);

    const solidMat = new THREE.MeshStandardMaterial({
      color: 0xc9a24b,
      metalness: 0.55,
      roughness: 0.28,
      transparent: true,
      opacity: 0,
    });
    const solidMesh = new THREE.Mesh(geo, solidMat);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xf2ede4,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const wireMesh = new THREE.Mesh(geo, wireMat);
    wireMesh.scale.setScalar(1.015);

    const group = new THREE.Group();
    group.add(solidMesh, wireMesh);
    group.position.set(1.1, 0, 0);
    scene.add(group);

    let rect = mount.getBoundingClientRect();
    const updateRect = () => {
      rect = mount.getBoundingClientRect();
    };

    const mouse = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", updateRect, { passive: true });

    const clock = new THREE.Clock();
    let rafId = 0;
    const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

    const animate = () => {
      const t = clock.getElapsedTime();
      const solidify = easeOutCubic(Math.min(t / 2.2, 1));

      solidMat.opacity = solidify * 0.9;
      wireMat.opacity = 0.85 - solidify * 0.55;

      solidMesh.rotation.y = t * 0.14;
      solidMesh.rotation.x = t * 0.07;
      wireMesh.rotation.copy(solidMesh.rotation);

      targetRot.x += (mouse.y * 0.18 - targetRot.x) * 0.045;
      targetRot.y += (mouse.x * 0.28 - targetRot.y) * 0.045;
      group.rotation.x = targetRot.x;
      group.rotation.z = targetRot.y * 0.3;

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
      updateRect();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", updateRect);
      geo.dispose();
      solidMat.dispose();
      wireMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 hidden md:block"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
