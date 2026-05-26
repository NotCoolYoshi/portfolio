"use client";
import { useEffect } from "react";

export default function ClientInit() {
  useEffect(() => {
    const els = document.querySelectorAll(".fi");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    // Hero elements fade in immediately
    document.querySelectorAll("#hero .fi").forEach((el) => {
      setTimeout(() => el.classList.add("v"), 100);
    });
    return () => obs.disconnect();
  }, []);
  return null;
}
