"use client";
import { useEffect, useRef } from "react";

export default function ParticleSphere() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const cv  = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");

    // ── Fibonacci-lattice sphere particles ──
    const N   = 1200;
    const pts = [];
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y  = 1 - (i / (N - 1)) * 2;
      const r  = Math.sqrt(Math.max(0, 1 - y * y));
      const th = PHI * i;
      pts.push({
        ox: Math.cos(th) * r,
        oy: y,
        oz: Math.sin(th) * r,
        bright: Math.random() > 0.87,
        phase:  Math.random() * Math.PI * 2,
      });
    }

    // ── Coloured accent orbs ──
    const rawOrbs = [
      { ox:  0.55, oy:  0.62, oz:  0.56, col: "#477EEB", r: 7 },
      { ox: -0.70, oy:  0.00, oz:  0.71, col: "#F59E0B", r: 6 },
      { ox:  0.80, oy: -0.38, oz: -0.46, col: "#25D1F4", r: 6 },
      { ox: -0.40, oy:  0.55, oz: -0.73, col: "#A855F7", r: 5 },
    ];
    const orbs = rawOrbs.map((o) => {
      const l = Math.sqrt(o.ox * o.ox + o.oy * o.oy + o.oz * o.oz);
      return { ...o, ox: o.ox / l, oy: o.oy / l, oz: o.oz / l };
    });

    // ── Rotation state ──
    let ry = 0, rx = 0.28;
    let vy = 0.003, vx = 0;
    let dragging = false, lx = 0, ly = 0;
    let tick = 0;

    function rot(ox, oy, oz, rxx, ryy) {
      const x1 =  ox * Math.cos(ryy) + oz * Math.sin(ryy);
      const z1 = -ox * Math.sin(ryy) + oz * Math.cos(ryy);
      const y2 =  oy * Math.cos(rxx) - z1 * Math.sin(rxx);
      const z2 =  oy * Math.sin(rxx) + z1 * Math.cos(rxx);
      return [x1, y2, z2];
    }

    // ── Interaction ──
    const onMouseDown = (e) => { dragging = true; lx = e.clientX; ly = e.clientY; };
    const onMouseUp   = ()  => { dragging = false; };
    const onMouseMove = (e) => {
      if (!dragging) return;
      vy += (e.clientX - lx) * 0.003;
      vx += (e.clientY - ly) * 0.003;
      lx = e.clientX; ly = e.clientY;
    };
    const onTouchStart = (e) => { dragging = true; lx = e.touches[0].clientX; ly = e.touches[0].clientY; e.preventDefault(); };
    const onTouchEnd   = ()  => { dragging = false; };
    const onTouchMove  = (e) => {
      if (!dragging) return;
      vy += (e.touches[0].clientX - lx) * 0.003;
      vx += (e.touches[0].clientY - ly) * 0.003;
      lx = e.touches[0].clientX; ly = e.touches[0].clientY;
    };

    cv.addEventListener("mousedown",  onMouseDown);
    cv.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("mouseup",   onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchend",  onTouchEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    function resize() { cv.width = cv.offsetWidth; cv.height = cv.offsetHeight; }

    function draw() {
      const W = cv.width, H = cv.height;
      if (!W || !H) { animRef.current = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      tick++;

      const cx = W / 2, cy = H / 2;
      const R  = Math.min(W, H) * 0.385;

      if (dragging) { vy *= 0.86; vx *= 0.86; }
      else          { vy += (0.003 - vy) * 0.045; vx *= 0.96; }
      ry += vy;
      rx += vx;
      rx = Math.max(-0.95, Math.min(0.95, rx));

      // Sphere outline
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(129,140,248,0.07)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Equatorial ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, R, R * Math.abs(Math.cos(rx)), 0, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(129,140,248,0.04)";
      ctx.lineWidth = 0.7;
      ctx.stroke();

      // Transform & sort particles
      const tpts = pts
        .map((p) => { const [x, y, z] = rot(p.ox, p.oy, p.oz, rx, ry); return { sx: cx + x * R, sy: cy - y * R, z, bright: p.bright, phase: p.phase }; })
        .sort((a, b) => a.z - b.z);

      tpts.forEach((p) => {
        const t     = (p.z + 1) / 2;
        const pulse = p.bright ? 0.85 + 0.15 * Math.sin(tick * 0.04 + p.phase) : 1;
        const alpha = p.bright ? (0.20 + t * 0.72) * pulse : 0.05 + t * 0.40;
        const sz    = p.bright ? 0.5 + t * 1.3 : 0.3 + t * 0.85;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(205,215,255,${alpha})`;
        ctx.fill();
      });

      const torbs = orbs.map((o) => { const [x, y, z] = rot(o.ox, o.oy, o.oz, rx, ry); return { ...o, tx: cx + x * R, ty: cy - y * R, tz: z }; });

      // Orb connection lines
      torbs.forEach((a, i) => {
        torbs.slice(i + 1).forEach((b) => {
          if (Math.min(a.tz, b.tz) < -0.1) return;
          ctx.beginPath(); ctx.moveTo(a.tx, a.ty); ctx.lineTo(b.tx, b.ty);
          ctx.strokeStyle = `rgba(129,140,248,${0.05 + Math.min(a.tz, b.tz) * 0.1})`;
          ctx.lineWidth = 0.6; ctx.stroke();
        });
      });

      // Draw orbs back-to-front
      [...torbs].sort((a, b) => a.tz - b.tz).forEach((o) => {
        if (o.tz < -0.45) return;
        const t    = (o.tz + 1) / 2;
        const orbR = o.r * (0.55 + t * 0.65);
        const grd  = ctx.createRadialGradient(o.tx, o.ty, 0, o.tx, o.ty, orbR * 3.8);
        grd.addColorStop(0, o.col + "40"); grd.addColorStop(1, o.col + "00");
        ctx.beginPath(); ctx.arc(o.tx, o.ty, orbR * 3.8, 0, Math.PI * 2);
        ctx.fillStyle = grd; ctx.fill();
        ctx.globalAlpha = 0.28 + t * 0.72;
        ctx.beginPath(); ctx.arc(o.tx, o.ty, orbR, 0, Math.PI * 2);
        ctx.fillStyle = o.col; ctx.fill();
        ctx.beginPath(); ctx.arc(o.tx - orbR * 0.26, o.ty - orbR * 0.26, orbR * 0.28, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.38)"; ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Corner brackets
      const br = 22, m = 18;
      ctx.strokeStyle = "rgba(129,140,248,0.26)";
      ctx.lineWidth = 1; ctx.lineCap = "square";
      ctx.beginPath();
      ctx.moveTo(m, m + br); ctx.lineTo(m, m); ctx.lineTo(m + br, m);
      ctx.moveTo(W - m - br, m); ctx.lineTo(W - m, m); ctx.lineTo(W - m, m + br);
      ctx.moveTo(W - m, H - m - br); ctx.lineTo(W - m, H - m); ctx.lineTo(W - m - br, H - m);
      ctx.moveTo(m + br, H - m); ctx.lineTo(m, H - m); ctx.lineTo(m, H - m - br);
      ctx.stroke();

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup",   onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchend",  onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      cv.removeEventListener("mousedown",  onMouseDown);
      cv.removeEventListener("touchstart", onTouchStart);
    };
  }, []);

  return (
    <div className="canvas-frame" id="sphere-wrap">
      <span className="c-corner c-tl">1200 nodes</span>
      <span className="c-corner c-tr">drag to rotate</span>
      <canvas ref={canvasRef} />
      <div className="c-label">Particle Field &middot; Intelligence Nexus</div>
    </div>
  );
}
