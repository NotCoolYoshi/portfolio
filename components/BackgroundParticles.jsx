"use client";
import { useEffect, useRef } from "react";

export default function BackgroundParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let animId;
    const mouse = { x: -9999, y: -9999 };

    const N = 140;
    let particles = [];

    function spawn() {
      particles = Array.from({ length: N }, () => ({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        r: Math.random() * 1.2 + 0.4,
        base: Math.random() * 0.12 + 0.04,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function resize() {
      cv.width  = window.innerWidth;
      cv.height = window.innerHeight;
      spawn();
    }

    let tick = 0;
    function draw() {
      tick++;
      ctx.clearRect(0, 0, cv.width, cv.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = cv.width;
        if (p.x > cv.width) p.x = 0;
        if (p.y < 0) p.y = cv.height;
        if (p.y > cv.height) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const GLOW = 130;
        const pulse = 0.85 + 0.15 * Math.sin(tick * 0.03 + p.phase);

        let alpha = p.base * pulse;
        let radius = p.r;

        if (dist < GLOW) {
          const t = 1 - dist / GLOW;
          alpha  = Math.min(p.base + t * 0.72, 0.85);
          radius = p.r + t * 2.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129,140,248,${alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    }

    const onMove  = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onTouch = (e) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; };
    const onLeave = ()  => { mouse.x = -9999; mouse.y = -9999; };

    window.addEventListener("resize",    resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend",  onLeave);
    window.addEventListener("mouseleave",onLeave);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",    resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend",  onLeave);
      window.removeEventListener("mouseleave",onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}
