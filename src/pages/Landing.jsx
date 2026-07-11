import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [isReady, setIsReady] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Configuration
  const PARTICLE_SIZE = 1.0;
  const SAMPLE_GAP = 2; // Sample every N pixels for performance
  const SCATTER_RADIUS = 120; // Mouse influence radius
  const SCATTER_FORCE = 8; // How strongly particles push away
  const RETURN_SPEED = 0.06; // How fast particles return (0-1)
  const FRICTION = 0.92; // Velocity damping

  const initParticles = useCallback((canvas) => {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      // Create offscreen canvas to render SVG
      const offscreen = document.createElement("canvas");
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const offCtx = offscreen.getContext("2d");

      // Draw SVG centered on offscreen canvas
      const scale = Math.min(
        (canvas.width * 0.7) / img.naturalWidth,
        (canvas.height * 0.7) / img.naturalHeight
      );
      const drawW = img.naturalWidth * scale;
      const drawH = img.naturalHeight * scale;
      const offsetX = (canvas.width - drawW) / 2;
      const offsetY = (canvas.height - drawH) / 2;

      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);

      // Sample pixels
      const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const particles = [];

      for (let y = 0; y < canvas.height; y += SAMPLE_GAP) {
        for (let x = 0; x < canvas.width; x += SAMPLE_GAP) {
          const i = (y * canvas.width + x) * 4;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          const a = pixels[i + 3];

          // Only create particles for visible (non-transparent) pixels
          if (a > 30) {
            particles.push({
              x: x,
              y: y,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              color: `rgba(${r},${g},${b},${a / 255})`,
              size: PARTICLE_SIZE + Math.random() * 0.5,
            });
          }
        }
      }

      particlesRef.current = particles;
      setIsReady(true);

      // Start animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const mouse = mouseRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Calculate distance from mouse
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < SCATTER_RADIUS && dist > 0) {
            // Push particles away from mouse
            const force = (SCATTER_RADIUS - dist) / SCATTER_RADIUS;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * SCATTER_FORCE;
            p.vy += Math.sin(angle) * force * SCATTER_FORCE;
          }

          // Spring back to original position
          p.vx += (p.originX - p.x) * RETURN_SPEED;
          p.vy += (p.originY - p.y) * RETURN_SPEED;

          // Apply friction
          p.vx *= FRICTION;
          p.vy *= FRICTION;

          // Update position
          p.x += p.vx;
          p.y += p.vy;

          // Draw particle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();
    };
    img.src = "/images/landing-graphic.svg";
  }, [SAMPLE_GAP, SCATTER_RADIUS, SCATTER_FORCE, RETURN_SPEED, FRICTION, PARTICLE_SIZE]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-initialize particles on resize
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      initParticles(canvas);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
  };

  const handleClick = () => {
    // Explode all particles outward from center
    const canvas = canvasRef.current;
    if (!canvas) return;

    setClicked(true);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    particlesRef.current.forEach((p) => {
      const dx = p.x - centerX;
      const dy = p.y - centerY;
      const angle = Math.atan2(dy, dx);
      const force = 15 + Math.random() * 20;
      p.vx = Math.cos(angle) * force;
      p.vy = Math.sin(angle) * force;
      // Override origin to push far away
      p.originX = p.x + Math.cos(angle) * 3000;
      p.originY = p.y + Math.sin(angle) * 3000;
    });

    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  return (
    <div
      className="h-screen bg-black relative overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* Subtle instruction text */}
      <AnimatePresence>
        {isReady && !clicked && (
          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-white text-[11px] md:text-xs tracking-[0.3em] uppercase font-medium">
              Click to Enter
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fade out overlay on click */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="absolute inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
