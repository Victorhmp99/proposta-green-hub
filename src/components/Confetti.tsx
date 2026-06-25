"use client";

import { motion } from "framer-motion";

const COLORS = ["#1b3a2a", "#ffffff", "#0d3f27", "#fff6da", "#2e5c40"];

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

/* Confete único, disparado uma vez quando a seção entra na tela. */
export function Confetti({ count = 24 }: { count?: number }) {
  const pieces = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((i) => {
        const left = `${randomBetween(5, 95)}%`;
        const delay = randomBetween(0, 0.4);
        const duration = randomBetween(1.6, 2.6);
        const drift = randomBetween(-60, 60);
        const rotateEnd = randomBetween(180, 540);
        const color = COLORS[i % COLORS.length];
        const isRect = i % 2 === 0;

        return (
          <motion.span
            key={i}
            initial={{ y: -20, x: 0, opacity: 0, rotate: 0 }}
            whileInView={{
              y: 420,
              x: drift,
              opacity: [0, 1, 1, 0],
              rotate: rotateEnd,
            }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeIn" }}
            className="absolute top-0"
            style={{
              left,
              width: isRect ? 7 : 9,
              height: isRect ? 12 : 9,
              borderRadius: isRect ? 2 : "50%",
              background: color,
            }}
          />
        );
      })}
    </div>
  );
}
