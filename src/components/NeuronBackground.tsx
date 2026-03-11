import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
}

export const NeuronBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;
    const connectionDistance = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 4 + 3,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scrollDelta = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;

      // Update and draw particles
      particles.forEach((p, i) => {
        // Only move if there's scroll activity
        if (scrollDelta > 0) {
          p.x += p.vx * (scrollDelta * 0.2);
          p.y += p.vy * (scrollDelta * 0.2);
        }
        
        p.pulse += 0.02;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentRadius = p.radius + Math.sin(p.pulse) * 2;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.15 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 3;
            ctx.lineCap = "round";
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw neuron body
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 165, 233, 0.4)";
        ctx.fill();
        
        // Draw neuron core
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 165, 233, 0.8)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ background: "transparent" }}
    />
  );
};
