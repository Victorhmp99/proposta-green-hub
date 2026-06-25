"use client";

import { AnimatePresence, motion } from "framer-motion";

export type ParticleType = "sand" | "light" | "water" | "money" | "leaf";

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

/* ---------- Solo — feixe de luz que se abre sobre o card ---------- */
function LightEffect() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.9, 0], scale: [0.3, 1.6, 2] }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,246,218,0.9) 0%, rgba(232,196,104,0.45) 40%, transparent 75%)",
        }}
      />
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0.3 }}
          animate={{ opacity: [0, 0.6, 0], scaleY: [0.3, 1.3, 0.6] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, delay: i * 0.05, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{
            width: 2,
            height: 60,
            background: "linear-gradient(180deg, rgba(255,246,218,0.7), transparent)",
            rotate: `${i * 60}deg`,
            transform: `translate(-50%, -100%) rotate(${i * 60}deg)`,
          }}
        />
      ))}
    </>
  );
}

/* ---------- Semente — areia caindo e se espalhando ---------- */
function SandGrain({ delay }: { delay: number }) {
  const left = `${randomBetween(15, 85)}%`;
  const size = randomBetween(2, 4);
  return (
    <motion.span
      initial={{ opacity: 0, y: -8, x: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-8, 60, 78], x: [0, randomBetween(-6, 6)] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 0.3, ease: "easeIn" }}
      className="absolute rounded-full"
      style={{
        left,
        top: 0,
        width: size,
        height: size,
        background: "linear-gradient(160deg, #e3c08a, #a9783f)",
      }}
    />
  );
}

/* ---------- Cultivo — rega em arco com respingo ---------- */
function WaterDrop({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -6, scale: 1 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-6, 50, 64], scale: [1, 1, 0.6] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, delay, repeat: Infinity, repeatDelay: 0.5, ease: "easeIn" }}
      className="absolute"
      style={{ left, top: "10%" }}
    >
      <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
        <path
          d="M4.5 0c2 3 4.5 5.6 4.5 8.2A4.5 4.5 0 1 1 0 8.2C0 5.6 2.5 3 4.5 0Z"
          fill="#6fc7ff"
          stroke="#cdeeff"
          strokeWidth="0.5"
        />
      </svg>
    </motion.span>
  );
}

function Splash({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: [0, 0.7, 0], scale: [0.2, 1.4, 1.8] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: delay + 0.85, repeat: Infinity, repeatDelay: 1, ease: "easeOut" }}
      className="absolute rounded-full border-2"
      style={{ left, bottom: "16%", width: 14, height: 5, borderColor: "rgba(111,199,255,0.7)" }}
    />
  );
}

/* ---------- Colheita — moedas e cédulas caindo ---------- */
function Coin({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10, rotate: 0 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-10, 55, 72], rotate: [0, 200] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 0.4, ease: "easeIn" }}
      className="absolute"
      style={{ left, top: 0 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" fill="#e8c468" stroke="#fff6da" strokeWidth="1" />
        <circle cx="8" cy="8" r="4.8" fill="none" stroke="#8a6e2c" strokeWidth="0.8" />
        <text x="8" y="10.8" fontSize="6" textAnchor="middle" fill="#6e4f17" fontWeight="bold">
          $
        </text>
      </svg>
    </motion.span>
  );
}

function Bill({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10, rotate: -8 }}
      animate={{ opacity: [0, 1, 1, 0], y: [-10, 55, 72], rotate: [-8, 14] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6, delay, repeat: Infinity, repeatDelay: 0.4, ease: "easeIn" }}
      className="absolute"
      style={{ left, top: 0 }}
    >
      <svg width="20" height="13" viewBox="0 0 20 13" fill="none">
        <rect x="0.5" y="0.5" width="19" height="12" rx="1.5" fill="#5fae6b" stroke="#cdeed7" strokeWidth="0.6" />
        <circle cx="10" cy="6.5" r="3" fill="none" stroke="#eaf7ec" strokeWidth="0.6" />
        <text x="10" y="8.3" fontSize="4" textAnchor="middle" fill="#eaf7ec" fontWeight="bold">
          R$
        </text>
      </svg>
    </motion.span>
  );
}

/* ---------- Floresta — folhas reais caindo e girando ---------- */
function FallingLeaf({ delay, left, scale }: { delay: number; left: string; scale: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10, x: 0, rotate: -10 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [-10, 40, 78],
        x: [0, 14, -10, 6],
        rotate: [-10, 35, -20, 25],
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.2, delay, repeat: Infinity, repeatDelay: 0.3, ease: "easeInOut" }}
      className="absolute"
      style={{ left, top: 0, scale }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M2 16C1 9 4 2 16 2c1 9-4 15-14 14Z"
          fill="url(#leafGradPE)"
          stroke="#2e5c40"
          strokeWidth="0.5"
        />
        <path d="M3 15C7 10 11 6 15 3" stroke="#1b3a2a" strokeWidth="0.6" strokeLinecap="round" />
        <defs>
          <linearGradient id="leafGradPE" x1="0" y1="0" x2="18" y2="18">
            <stop offset="0%" stopColor="#b8f0cf" />
            <stop offset="55%" stopColor="#8fe6b8" />
            <stop offset="100%" stopColor="#3a7a52" />
          </linearGradient>
        </defs>
      </svg>
    </motion.span>
  );
}

export function ParticleEffect({ active, type }: { active: boolean; type: ParticleType }) {
  if (!active) return null;

  if (type === "light") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <AnimatePresence>
          <LightEffect key="light" />
        </AnimatePresence>
      </div>
    );
  }

  const positions = Array.from({ length: type === "leaf" ? 4 : 6 }, (_, i) => ({
    left: `${randomBetween(10, 88)}%`,
    delay: i * 0.18,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible">
      <AnimatePresence>
        {type === "sand" &&
          positions.map((p, i) => <SandGrain key={i} delay={p.delay} />)}
        {type === "water" &&
          positions.map((p, i) => (
            <span key={i}>
              <WaterDrop delay={p.delay} left={p.left} />
              <Splash delay={p.delay} left={p.left} />
            </span>
          ))}
        {type === "money" &&
          positions.map((p, i) =>
            i % 2 === 0 ? (
              <Coin key={i} delay={p.delay} left={p.left} />
            ) : (
              <Bill key={i} delay={p.delay} left={p.left} />
            )
          )}
        {type === "leaf" &&
          positions.map((p, i) => (
            <FallingLeaf key={i} delay={p.delay} left={p.left} scale={randomBetween(0.8, 1.3)} />
          ))}
      </AnimatePresence>
    </div>
  );
}
