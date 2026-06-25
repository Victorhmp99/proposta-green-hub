"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { SeedOrb, MetallicOrb, GoldBar, EmeraldGem } from "./MaterialOrb";

const drifters = [
  {
    Material: () => <SeedOrb size={54} />,
    label: "Start",
    area: { top: "20%", left: "14%" },
    path: { x: [0, 30, -10, 0], y: [0, -40, 20, 0] },
    duration: 16,
    depth: 0.5,
  },
  {
    Material: () => <MetallicOrb size={58} tone="silver" />,
    label: "Prata",
    area: { top: "68%", left: "18%" },
    path: { x: [0, -25, 18, 0], y: [0, 30, -25, 0] },
    duration: 19,
    depth: 0.9,
  },
  {
    Material: () => <GoldBar size={62} />,
    label: "Gold",
    area: { top: "24%", left: "84%" },
    path: { x: [0, -32, 14, 0], y: [0, 28, -18, 0] },
    duration: 21,
    depth: 0.75,
  },
  {
    Material: () => <EmeraldGem size={60} />,
    label: "Esmeralda",
    area: { top: "70%", left: "82%" },
    path: { x: [0, 22, -28, 0], y: [0, -32, 16, 0] },
    duration: 18,
    depth: 1.1,
  },
];

function Drifter({
  Material,
  area,
  path,
  duration,
  depth,
  mx,
  my,
}: {
  Material: () => React.JSX.Element;
  area: { top: string; left: string };
  path: { x: number[]; y: number[] };
  duration: number;
  depth: number;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
}) {
  const px = useTransform(mx, (v) => v * 20 * depth);
  const py = useTransform(my, (v) => v * 20 * depth);

  return (
    <div className="absolute hidden sm:block" style={area}>
      <motion.div
        animate={{ x: path.x, y: path.y, rotate: [0, 6, -6, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div style={{ x: px, y: py }}>
          <Material />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative z-0 min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#060a08] px-6 text-center"
    >
      {/* animated gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-mint/20 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-gold/15 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <div className="absolute inset-0 bg-noise opacity-40" />

      {drifters.map((d, i) => (
        <Drifter key={i} {...d} mx={smx} my={smy} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-8 flex flex-col items-center"
      >
        <div
          aria-hidden
          className="absolute h-44 w-44 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(143,230,184,0.35) 0%, transparent 70%)",
          }}
        />
        <Image
          src="/brand/logo-icon-transparent.png"
          alt="Green Hub"
          width={110}
          height={162}
          className="relative drop-shadow-[0_0_40px_rgba(143,230,184,0.4)]"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 font-display text-5xl sm:text-7xl tracking-wide text-cream"
      >
        GREEN HUB
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative z-10 mt-4 font-body text-sm sm:text-base uppercase tracking-[0.3em] text-mint/80"
      >
        Hub de Soluções para Clínicas de Saúde
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="text-gradient-gold relative z-10 mt-10 max-w-2xl font-semibold text-2xl sm:text-4xl leading-snug"
      >
        &ldquo;Plantamos a estratégia.
        <br />
        Você colhe a agenda cheia.&rdquo;
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-mint/60"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Proposta Comercial</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-mint/60"
        />
      </motion.div>
    </section>
  );
}
