'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Create Particle DNA Helix
    const particleCount = 8000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color('#3b82f6');
    const colorPurple = new THREE.Color('#9333ea');
    const colorCyan = new THREE.Color('#06b6d4');

    const strand1Points = [];
    const strand2Points = [];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Y goes from -40 to 40 (length of DNA)
      const y = (Math.random() - 0.5) * 80;
      const type = Math.random();
      let radius, angle;

      if (type < 0.35) {
        // Strand 1
        radius = 4 + (Math.random() - 0.5) * 1.0;
        angle = y * 0.3 + (Math.random() - 0.5) * 0.2;
        if (Math.random() > 0.95) strand1Points.push(new THREE.Vector3(Math.cos(angle)*radius, y, Math.sin(angle)*radius));
      } else if (type < 0.70) {
        // Strand 2
        radius = 4 + (Math.random() - 0.5) * 1.0;
        angle = y * 0.3 + Math.PI + (Math.random() - 0.5) * 0.2;
        if (Math.random() > 0.95) strand2Points.push(new THREE.Vector3(Math.cos(angle)*radius, y, Math.sin(angle)*radius));
      } else {
        // Core/Scattered glowing dust inside and around
        radius = Math.random() * 6;
        angle = Math.random() * Math.PI * 2;
      }

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = y;
      positions[i3 + 2] = Math.sin(angle) * radius;

      // Mix colors based on Y position to create a gradient look
      const heightRatio = (y + 40) / 80;
      const mixedColor = new THREE.Color();
      
      mixedColor.copy(colorBlue).lerp(colorPurple, heightRatio);

      // Random bright cyan highlights
      if (Math.random() > 0.95) {
        mixedColor.lerp(colorCyan, 0.8);
      }
      
      // Core glowing points are brighter
      if (type >= 0.70) mixedColor.lerp(new THREE.Color('#ffffff'), 0.4);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.15, 
      vertexColors: true, 
      blending: THREE.AdditiveBlending, 
      transparent: true, 
      opacity: 0.9, 
      sizeAttenuation: true
    });

    // Make points circular instead of square
    material.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <clipping_planes_fragment>',
        `#include <clipping_planes_fragment>
         if (length(gl_PointCoord - vec2(0.5)) > 0.5) discard;
        `
      );
    };

    const helix = new THREE.Points(geometry, material);
    dnaGroup.add(helix);

    // Add Molecular Bonds
    const linePositions = [];
    const lineColors = [];
    for(let i=0; i<Math.min(strand1Points.length, strand2Points.length); i++) {
      if (Math.abs(strand1Points[i].y - strand2Points[i].y) < 2) {
        linePositions.push(
          strand1Points[i].x, strand1Points[i].y, strand1Points[i].z,
          strand2Points[i].x, strand2Points[i].y, strand2Points[i].z
        );
        
        const heightRatio = (strand1Points[i].y + 40) / 80;
        const c1 = new THREE.Color().copy(colorBlue).lerp(colorPurple, heightRatio);
        
        lineColors.push(c1.r, c1.g, c1.b, c1.r, c1.g, c1.b);
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
    const dnaBonds = new THREE.LineSegments(lineGeometry, lineMaterial);
    dnaGroup.add(dnaBonds);

    // Tilt the DNA so it runs diagonally from Top-Right to Bottom-Left
    // Top-Right is +X, +Y. Bottom-Left is -X, -Y. 
    // Rotating around Z by negative 45 degrees accomplishes this.
    dnaGroup.rotation.z = -Math.PI / 4;

    // Optional: add some ambient floating dust
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(1000 * 3);
    for(let i=0; i<1000*3; i++) { dustPositions[i] = (Math.random() - 0.5) * 80; }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({ color: 0x4a5568, size: 0.08, transparent: true, opacity: 0.3 });
    const dust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dust);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener('mousemove', onMouseMove);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    const updateTheme = () => {
      const isLight = document.body.classList.contains('light-mode');
      material.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
      lineMaterial.blending = isLight ? THREE.NormalBlending : THREE.AdditiveBlending;
    };
    window.addEventListener('theme-changed', updateTheme);

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Dynamic rotation
      dnaGroup.rotation.y = elapsedTime * 0.1;
      
      // Gentle floating
      dnaGroup.position.y = Math.sin(elapsedTime * 0.5) * 1.5;
      
      // Parallax effect with mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      dust.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('theme-changed', updateTheme);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      id="webgl-container" 
      ref={mountRef} 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        zIndex: 0, 
        pointerEvents: "none" 
      }} 
    />
  );
}
