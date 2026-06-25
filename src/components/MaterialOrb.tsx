"use client";

import { motion } from "framer-motion";

/* Materiais realistas em CSS puro — sem emoji, sem imagens rasterizadas.
   Cada orb representa um plano: Semente (Start), Prata, Ouro (Gold), Esmeralda. */

function ShineSweep({
  size,
  speed = 5,
  height,
  radius = "50%",
}: {
  size: number;
  speed?: number;
  height?: number;
  radius?: number | string;
}) {
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{ width: size, height: height ?? size, borderRadius: radius }}
    >
      <motion.div
        className="absolute top-0 h-full"
        style={{
          width: size * 0.5,
          background:
            "linear-gradient(75deg, transparent 0%, rgba(255,255,255,0.55) 45%, transparent 100%)",
          filter: "blur(2px)",
        }}
        animate={{ left: [-size, size * 1.5] }}
        transition={{ duration: speed, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
      />
    </motion.div>
  );
}

export function SeedOrb({ size = 64 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size * 1.3,
        borderRadius: "50% 50% 48% 48% / 62% 62% 38% 38%",
        background:
          "radial-gradient(circle at 32% 26%, #d9b27c 0%, #a9783f 38%, #6b4423 75%, #4a2e16 100%)",
        boxShadow:
          "inset -6px -8px 16px rgba(0,0,0,0.45), inset 5px 6px 12px rgba(255,229,180,0.35), 0 14px 30px -8px rgba(0,0,0,0.55)",
      }}
    >
      {/* veio central da semente */}
      <div
        className="absolute left-1/2 top-[10%] h-[80%] w-[2px] -translate-x-1/2 rounded-full"
        style={{ background: "linear-gradient(180deg, rgba(74,46,22,0.7), rgba(74,46,22,0.1))" }}
      />
      {/* textura speckle */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 20% 30%, rgba(0,0,0,0.5) 0 1px, transparent 2px 8px), repeating-radial-gradient(circle at 60% 70%, rgba(0,0,0,0.4) 0 1px, transparent 2px 7px)",
        }}
      />
    </div>
  );
}

export function MetallicOrb({
  size = 64,
  tone = "silver",
}: {
  size?: number;
  tone?: "silver" | "gold";
}) {
  const colors =
    tone === "gold"
      ? { hi: "#fff6da", mid: "#e8c468", low: "#8a6e2c", edge: "#4f3a14" }
      : { hi: "#ffffff", mid: "#cfe9dd", low: "#7e9d92", edge: "#3c4f48" };

  return (
    <div className="relative" style={{ width: size, height: size, borderRadius: "50%" }}>
      <div
        className="absolute inset-0"
        style={{
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 24%, ${colors.hi} 0%, ${colors.mid} 42%, ${colors.low} 75%, ${colors.edge} 100%)`,
          boxShadow: `inset -8px -10px 18px rgba(0,0,0,0.4), inset 6px 8px 14px rgba(255,255,255,0.4), 0 14px 32px -8px rgba(0,0,0,0.55)`,
        }}
      />
      <ShineSweep size={size} speed={tone === "gold" ? 4.5 : 5.5} />
    </div>
  );
}

/* Barra de ouro — bloco quadrado/retangular metálico, não esférico. */
export function GoldBar({ size = 64 }: { size?: number }) {
  const w = size;
  const h = size * 0.74;
  return (
    <div className="relative" style={{ width: w, height: h }}>
      <div
        className="absolute inset-0"
        style={{
          borderRadius: size * 0.08,
          background:
            "linear-gradient(155deg, #fff6da 0%, #f0d489 18%, #e8c468 42%, #b8902f 72%, #6e4f17 100%)",
          boxShadow:
            "inset 0 3px 4px rgba(255,255,255,0.55), inset 0 -6px 10px rgba(0,0,0,0.45), 0 14px 28px -8px rgba(0,0,0,0.6)",
        }}
      />
      {/* friso/baixo-relevo da barra */}
      <div
        className="absolute"
        style={{
          inset: size * 0.1,
          borderRadius: size * 0.05,
          border: "1.5px solid rgba(110,79,23,0.55)",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold"
        style={{ color: "#6e4f17", fontSize: size * 0.22, letterSpacing: 1, opacity: 0.75 }}
      >
        Au
      </div>
      <ShineSweep size={w} height={h} radius={size * 0.08} speed={4.5} />
    </div>
  );
}

export function EmeraldGem({ size = 64 }: { size?: number }) {
  const facet = "polygon(50% 0%, 88% 30%, 76% 100%, 24% 100%, 12% 30%)";
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0"
        style={{
          clipPath: facet,
          background:
            "conic-gradient(from 200deg at 50% 35%, #0d3f27 0deg, #1fae6b 70deg, #5fffb0 120deg, #0a3320 180deg, #1fae6b 260deg, #062318 360deg)",
          boxShadow: "0 16px 34px -8px rgba(8, 60, 38, 0.7)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: facet,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, transparent 28%, transparent 70%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        className="absolute"
        style={{
          clipPath: facet,
          inset: 0,
          border: "1px solid rgba(143,255,200,0.5)",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
