"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/basePath";
import { Reveal, SlideReveal, SlideUpPanel, RevealStagger, staggerItem } from "./Reveal";
import { Section, Eyebrow, Kicker } from "./Section";
import { Tilt3D } from "./Tilt3D";
import { Float } from "./Float";
import { ParticleEffect, type ParticleType } from "./ParticleEffect";
import {
  IconSemente,
  IconSolo,
  IconCultivo,
  IconColheita,
  IconFloresta,
} from "./ForestIcons";
import { MetallicOrb, GoldBar, EmeraldGem } from "./MaterialOrb";
import { Confetti } from "./Confetti";
import { CaseBubbles } from "./CaseBubbles";
import { useContent } from "@/content/ContentContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Megaphone,
  PenLine,
  Clapperboard,
  LineChart,
  Smartphone,
  MonitorSmartphone,
  ClipboardList,
  CheckCircle2,
  Lock,
  Unlock,
  PartyPopper,
  Trophy,
} from "lucide-react";

/* ---------- 2. ORIGEM ---------- */
export function Origin() {
  const { content } = useContent();
  const c = content.origin;
  return (
    <Section id="origem" tone="black" panel className="z-10 -mt-[85vh]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>{content.origin.eyebrow}</Eyebrow>
            <h2 className="text-3xl sm:text-5xl text-cream max-w-xl">
              {c.headingPlain}{" "}
              <span className="text-gradient-gold font-semibold">{c.headingGold}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-cream/80 leading-relaxed">
            <p>{c.paragraph1}</p>
            <p>{c.paragraph2}</p>
            <p className="text-cream/90">
              {c.paragraph3Plain}{" "}
              <span className="font-semibold text-mint">{c.paragraph3Bold}</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Kicker>{c.kicker}</Kicker>
          </Reveal>
        </div>

        <SlideReveal direction="right" delay={0.1}>
          <Float distance={8} duration={5}>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)]">
              <Image
                src={asset("/quem-somos/5037628289387793361.jpg")}
                alt="Victor Hugo e Victor Caixeta, fundadores da Green Hub"
                width={1280}
                height={1067}
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-sm font-semibold text-cream">{c.photoCaptionName}</p>
                <p className="text-xs text-cream/70">{c.photoCaptionRole}</p>
              </div>
            </div>
          </Float>
        </SlideReveal>
      </div>
    </Section>
  );
}

/* ---------- 3. PROBLEMA ---------- */
export function Problem() {
  const { content } = useContent();
  const c = content.problem;
  const items = c.items;
  return (
    <Section id="problema" dark transition="slideRight">
      <SlideReveal direction="right">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">{c.heading}</h2>
        <p className="mt-6 max-w-2xl text-cream/80 leading-relaxed">{c.intro}</p>
      </SlideReveal>

      <RevealStagger className="mt-10 grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <motion.div
            key={item}
            variants={staggerItem}
            className="flex items-start gap-3 rounded-xl border border-mint/15 bg-white/[0.03] p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-mint" />
            <span className="text-cream/85">{item}</span>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.1}>
        <p className="mt-12 max-w-2xl text-cream/90">
          {c.closingPlain}
          <br />
          <span className="font-semibold text-xl text-gradient-gold">{c.closingGold}</span>
        </p>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. NOSSA DIFERENÇA ---------- */
export function Difference() {
  const { content } = useContent();
  const c = content.difference;
  const questions = c.questions;
  return (
    <Section id="diferenca" transition="slideLeft">
      <SlideReveal direction="left">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          {c.headingPlain}
          <br />
          <span className="text-gradient-gold font-semibold">{c.headingGold}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-cream/80">{c.intro}</p>
      </SlideReveal>

      <RevealStagger className="mt-8 space-y-3 max-w-xl">
        {questions.map((q) => (
          <motion.p
            key={q}
            variants={staggerItem}
            className="border-l-2 border-gold/60 pl-4 text-cream/85 font-semibold text-lg"
          >
            {q}
          </motion.p>
        ))}
      </RevealStagger>

      <Reveal delay={0.1} className="mt-12 max-w-2xl space-y-4 text-cream/85">
        <p>{c.paragraph1}</p>
        <p>
          {c.paragraph2Plain}
          <br />
          <span className="font-semibold text-mint text-xl">{c.paragraph2Bold}</span>
        </p>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 5. MÉTODO FLORESTA ---------- */
const forestMeta = [
  { Icon: IconSemente, particle: "sand" as ParticleType },
  { Icon: IconSolo, particle: "light" as ParticleType },
  { Icon: IconCultivo, particle: "water" as ParticleType },
  { Icon: IconColheita, particle: "money" as ParticleType },
  { Icon: IconFloresta, particle: "leaf" as ParticleType },
];

function ForestCard({
  meta,
  title,
  text,
  index,
}: {
  meta: (typeof forestMeta)[number];
  title: string;
  text: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-2xl border border-mint/15 metallic-surface p-6 transition-colors hover:border-gold/50"
    >
      <ParticleEffect active={hovered} type={meta.particle} />
      <span className="absolute right-4 top-4 font-display text-3xl text-mint/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Float distance={6} duration={3.5} delay={index * 0.2} className="mb-4 w-fit">
        <meta.Icon className="h-14 w-14 drop-shadow-[0_0_12px_rgba(143,230,184,0.5)]" />
      </Float>
      <p className="font-display text-xl text-cream mb-2">{title}</p>
      <p className="text-sm text-cream/70 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export function ForestMethod() {
  const { content } = useContent();
  const c = content.forest;
  return (
    <Section id="metodo" dark transition="zoomOut">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">{c.heading}</h2>
        <p className="mt-3 text-sm text-cream/50">{c.hint}</p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {c.steps.map((step, i) => (
          <ForestCard key={step.title} meta={forestMeta[i]} title={step.title} text={step.text} index={i} />
        ))}
      </RevealStagger>

      <Reveal delay={0.15}>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 6. TIME COMPLETO ---------- */
const teamMeta = [
  { icon: Megaphone, featured: true, visual: "trafego" as const },
  { icon: MonitorSmartphone, featured: true, visual: "crm" as const },
  { icon: PenLine, visual: "copy" as const },
  { icon: Clapperboard, visual: "video" as const },
  { icon: LineChart, visual: "funnel" as const },
  { icon: Smartphone, visual: "chat" as const },
  { icon: ClipboardList, visual: "checklist" as const },
];

type VisualType = "trafego" | "crm" | "copy" | "video" | "funnel" | "chat" | "checklist";

function TeamVisual({ type }: { type: VisualType }) {
  if (type === "trafego") {
    return (
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
          <Image
            src={asset("/team-visuals/meta-ads.png")}
            alt="Meta Ads"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
          <Image
            src={asset("/team-visuals/google-ads.png")}
            alt="Google Ads"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="ml-1 text-xs uppercase tracking-wide text-mint/70">
          2 plataformas integradas
        </span>
      </div>
    );
  }
  if (type === "crm") {
    return (
      <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-mint/70" />
        </div>
        <Image
          src={asset("/team-visuals/crm-screenshot.jpg")}
          alt="CRM Green Hub"
          width={640}
          height={360}
          className="h-40 w-full object-cover object-top"
        />
      </div>
    );
  }

  if (type === "copy") {
    return (
      <div className="mb-5 space-y-1.5 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="h-2 w-[88%] rounded-full bg-cream/25" />
        <div className="h-2 w-[65%] rounded-full bg-cream/25" />
        <div className="flex items-center gap-1">
          <div className="h-2 w-[40%] rounded-full bg-gradient-to-r from-gold to-mint" />
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="h-3 w-[2px] bg-gold"
          />
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className="relative mb-5 flex h-16 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/90"
        >
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-forest" />
        </motion.div>
        <div className="absolute bottom-2 left-3 right-3 h-1 overflow-hidden rounded-full bg-white/15">
          <motion.div
            animate={{ width: ["10%", "85%", "10%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-mint"
          />
        </div>
      </div>
    );
  }

  if (type === "funnel") {
    return (
      <div className="mb-5 flex h-16 items-end gap-2 rounded-xl border border-white/10 bg-black/20 p-3">
        {[0.4, 0.65, 0.85, 1].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-gold/40 to-gold"
          />
        ))}
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="mb-5 space-y-1.5 rounded-xl border border-white/10 bg-black/20 p-3">
        <div className="w-[70%] rounded-lg rounded-tl-none bg-white/10 px-2.5 py-1.5 text-[10px] text-cream/60">
          Olá! Vi que você se interessou pelo tratamento.
        </div>
        <div className="ml-auto w-[65%] rounded-lg rounded-tr-none bg-mint/25 px-2.5 py-1.5 text-right text-[10px] text-cream/80">
          Posso agendar uma avaliação?
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5 space-y-2 rounded-xl border border-white/10 bg-black/20 p-3">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-mint" />
          <div className={`h-1.5 rounded-full bg-cream/20 ${i === 1 ? "w-[55%]" : "w-[75%]"}`} />
        </div>
      ))}
    </div>
  );
}

export function Team() {
  const { content } = useContent();
  const c = content.team;
  return (
    <Section id="time" transition="zoomIn">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">{c.heading}</h2>
        <p className="mt-4 max-w-xl text-cream/70 leading-relaxed">{c.intro}</p>
      </Reveal>

      <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {c.services.map((svc, index) => {
          const meta = teamMeta[index];
          return (
            <motion.div
              key={svc.title}
              variants={staggerItem}
              whileHover={{ y: -4, borderColor: "rgba(200,168,75,0.5)" }}
              className={`rounded-2xl border p-6 ${
                meta.featured
                  ? "sm:col-span-2 lg:col-span-1 border-gold/25 bg-gradient-to-b from-gold/10 to-white/[0.02]"
                  : "border-mint/15 bg-white/[0.03]"
              }`}
            >
              {meta.visual && <TeamVisual type={meta.visual} />}
              <Float distance={5} duration={3.2} delay={index * 0.15}>
                <meta.icon className="h-6 w-6 text-gold mb-4" />
              </Float>
              <p className="font-display text-lg text-cream mb-2">{svc.title}</p>
              <p className="text-sm text-cream/70 leading-relaxed">{svc.text}</p>
            </motion.div>
          );
        })}
      </RevealStagger>
    </Section>
  );
}

/* ---------- 7 & 8. ANCORAGEM ---------- */
function CostTable({
  rows,
  total,
  highlight,
}: {
  rows: { label: string; value: string }[];
  total: { label: string; value: string };
  highlight?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-mint/15">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex items-center justify-between px-6 py-4 text-sm sm:text-base ${
            i % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"
          }`}
        >
          <span className="text-cream/75">{row.label}</span>
          <span className="font-display text-cream">{row.value}</span>
        </div>
      ))}
      <div
        className={`flex items-center justify-between px-6 py-5 ${
          highlight ? "bg-gold/15" : "bg-mint/10"
        }`}
      >
        <span className="font-display text-lg text-cream">{total.label}</span>
        <span className="font-display text-xl text-gradient-gold">{total.value}</span>
      </div>
    </div>
  );
}

export function AnchorTeam() {
  const { content } = useContent();
  const c = content.anchorTeam;
  return (
    <Section id="ancoragem-time" dark transition="suction">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          {c.headingPlain}{" "}
          <span className="text-gradient-gold font-semibold">{c.headingGold}</span> {c.headingEnd}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <CostTable rows={c.rows} total={c.total} highlight />
      </Reveal>

      <Reveal delay={0.2}>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

export function AnchorSecretary() {
  const { content } = useContent();
  const c = content.anchorSecretary;
  return (
    <Section id="ancoragem-secretaria" transition="slideLeft">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">{c.heading}</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <CostTable rows={c.rows} total={c.total} />
      </Reveal>

      <Reveal delay={0.2} className="mt-10 max-w-2xl space-y-2 text-cream/85">
        <p>E com tudo isso:</p>
        <p className="font-semibold text-lg text-mint">{c.line1}</p>
        <p className="font-semibold text-lg text-mint">{c.line2}</p>
        <p className="font-semibold text-lg text-mint">{c.line3}</p>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 9. CRC ---------- */
export function CRC() {
  const { content } = useContent();
  const c = content.crc;
  const bullets = c.bullets;
  return (
    <Section id="crc" dark transition="slideRight">
      <SlideReveal direction="right">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">
          {c.headingPlain}
          <br />
          <span className="text-gradient-gold font-semibold">{c.headingGold}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-cream/80 leading-relaxed">{c.intro}</p>
      </SlideReveal>

      <RevealStagger className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
        {bullets.map((b) => (
          <motion.div
            key={b}
            variants={staggerItem}
            className="flex items-start gap-3 rounded-xl border border-mint/15 bg-white/[0.03] p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <span className="text-cream/85 text-sm">{b}</span>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.1}>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 10. CASES ---------- */
export function Cases() {
  const { content } = useContent();
  const c = content.results;
  return (
    <Section id="resultados" transition="zoomOut">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">{c.heading}</h2>
        <p className="mt-4 max-w-xl text-cream/70 leading-relaxed">{c.intro}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <CaseBubbles />
      </Reveal>
    </Section>
  );
}

/* ---------- 11 & 12. PLANOS + DESCONTO TCV (oculto até clique, valor por mês) ---------- */
function brl(n: string | number) {
  return `R$ ${Number(n).toLocaleString("pt-BR")}`;
}

const planMeta = [
  {
    Material: () => <Sprout className="h-9 w-9 text-mint" strokeWidth={1.5} />,
    accent: "text-mint",
    cardBg: "bg-black",
    cardBorder: "border-white/10",
  },
  {
    Material: () => <MetallicOrb size={48} tone="silver" />,
    accent: "text-silver-green",
    cardBg: "bg-gradient-to-b from-silver-green/20 via-[#0c2117] to-[#0c2117]",
    cardBorder: "border-silver-green/30",
  },
  {
    Material: () => <GoldBar size={52} />,
    accent: "text-gold",
    cardBg: "bg-gradient-to-b from-gold/40 via-gold/10 to-[#0c2117]",
    cardBorder: "border-gold",
    featured: true,
  },
  {
    Material: () => <EmeraldGem size={48} />,
    accent: "text-mint",
    cardBg: "bg-gradient-to-b from-[#1fae6b]/30 via-[#0c2117] to-[#0c2117]",
    cardBorder: "border-[#1fae6b]/40",
  },
];

export function Plans() {
  const { content } = useContent();
  const c = content.plans;
  const [unlocked, setUnlocked] = useState(false);

  return (
    <Section id="planos" tone="black" panel className="perspective-1200">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">{c.heading}</h2>
      </Reveal>

      <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
        {c.items.map((plan, i) => {
          const meta = planMeta[i];
          return (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={meta.featured ? "lg:-mt-4 lg:scale-[1.06]" : ""}
            >
              <Tilt3D
                className={`rounded-2xl border glass-3d p-6 flex flex-col h-full ${meta.cardBorder} ${meta.cardBg} ${
                  meta.featured ? "shadow-[0_0_50px_-10px_rgba(232,196,104,0.55)]" : ""
                }`}
              >
                {meta.featured && (
                  <span
                    style={{ borderRadius: 9999 }}
                    className="absolute -top-3 right-4 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest"
                  >
                    Mais vendido
                  </span>
                )}
                <Float distance={6} duration={3.6} className="w-fit mb-4">
                  <meta.Material />
                </Float>
                <p className="font-display text-2xl text-cream mb-1">{plan.name}</p>
                {plan.description && (
                  <p className="text-xs italic text-cream/55 mb-3 leading-snug">{plan.description}</p>
                )}
                <p className={`font-display text-lg mb-5 ${meta.featured ? "text-gradient-gold" : meta.accent}`}>
                  {plan.price}
                </p>
                <ul className="space-y-2 text-sm text-cream/75 flex-1">
                  {plan.features.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] uppercase tracking-wide text-cream/40 mb-2">
                    {c.fidelityLabel}
                  </p>
                  <AnimatePresence mode="wait">
                    {unlocked ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-1.5 text-sm overflow-hidden"
                      >
                        <div className="flex justify-between text-cream/70">
                          <span>3 meses</span>
                          <span className="text-cream">{brl(plan.monthly3)}/mês</span>
                        </div>
                        <div className="flex justify-between text-cream/70">
                          <span>6 meses</span>
                          <span className="text-cream">{brl(plan.monthly6)}/mês</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span className="text-cream/70">12 meses</span>
                          <span className="text-gradient-gold">{brl(plan.monthly12)}/mês</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex select-none items-center gap-1 text-sm text-cream/35"
                      >
                        <span>3m R$ ••••/mês</span>
                        <span>· 12m R$ ••••/mês</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Tilt3D>
            </motion.div>
          );
        })}
      </RevealStagger>

      <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4 text-center">
        <button
          type="button"
          onClick={() => setUnlocked((v) => !v)}
          style={{ borderRadius: 9999 }}
          className="group inline-flex items-center gap-2 appearance-none border border-gold/50 bg-gold/10 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/20"
        >
          {unlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          {unlocked ? c.lockLabel : c.unlockLabel}
        </button>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 12b. ESTRUTURA GREEN ---------- */
export function EstruturaGreen() {
  const { content } = useContent();
  const c = content.estruturaGreen;
  const [revealed, setRevealed] = useState(false);

  return (
    <Section id="estrutura-green" tone="forest" panel>
      {/* header — sempre visível */}
      <Reveal className="flex flex-col items-center text-center gap-5 py-4">
        {/* nome em destaque */}
        <span className="font-display text-5xl sm:text-7xl text-gradient-gold leading-none tracking-tight">
          Estrutura Green
        </span>
        <h2 className="text-xl sm:text-2xl text-cream/80 max-w-xl leading-snug font-normal">
          Para clínicas que querem mudar de patamar —{" "}
          <span className="text-cream font-semibold">não só de canal de aquisição.</span>
        </h2>
        <p className="text-cream/45 text-sm max-w-sm">
          Reestruturação completa da operação em até 90 dias.
        </p>
        <button
          type="button"
          onClick={() => setRevealed((v) => !v)}
          className="mt-2 px-8 py-4 rounded-full bg-gold text-forest font-bold text-sm tracking-wide hover:bg-gold/90 transition shadow-[0_0_40px_-8px_rgba(232,196,104,0.6)]"
        >
          {revealed ? "Ocultar" : "Quero Mudar de Nível de Verdade"}
        </button>
      </Reveal>

      {/* conteúdo revelado */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {/* antes / depois */}
            <div className="mt-12 grid sm:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-white/10">
              <div className="bg-black/40 px-6 py-6 border-b sm:border-b-0 sm:border-r border-white/10">
                <p className="text-[11px] uppercase tracking-widest text-cream/35 mb-5">Como a clínica chega</p>
                <ul className="space-y-4">
                  {c.beforeAfter.map((row, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-cream/55">
                      <span className="mt-0.5 text-red-400/70 shrink-0 text-base leading-none">✕</span>
                      {row.before}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-forest/60 px-6 py-6">
                <p className="text-[11px] uppercase tracking-widest text-mint/60 mb-5">Como ela sai</p>
                <ul className="space-y-4">
                  {c.beforeAfter.map((row, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-cream/85">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-mint" />
                      {row.after}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* cards de plano com módulos e entregáveis dentro */}
            <div className="mt-14 grid sm:grid-cols-2 gap-5">
              {c.plans.map((plan) => (
                <div
                  key={plan.label}
                  className={`rounded-2xl border flex flex-col ${
                    plan.featured
                      ? "border-gold/50 bg-gold/5 shadow-[0_0_60px_-15px_rgba(232,196,104,0.4)]"
                      : "border-white/10 bg-black/30"
                  }`}
                >
                  {/* topo do card */}
                  <div className="px-7 pt-7 pb-5 border-b border-white/10">
                    {plan.featured && (
                      <span
                        style={{ borderRadius: 9999 }}
                        className="inline-block mb-3 w-fit bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest"
                      >
                        Recomendado
                      </span>
                    )}
                    <p className={`font-display text-2xl mb-1 ${plan.featured ? "text-gradient-gold" : "text-cream"}`}>
                      {plan.label}
                    </p>
                    <p className="text-xs text-cream/45 mb-3">{plan.duration} · {plan.hours}</p>
                    <p className="text-sm text-cream/60 leading-relaxed">{plan.description}</p>
                    <p className={`mt-5 font-display text-4xl ${plan.featured ? "text-gradient-gold" : "text-cream"}`}>
                      {plan.price}
                    </p>
                  </div>

                  {/* módulos e entregáveis */}
                  <div className="px-7 py-6 flex flex-col gap-5 flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-cream/30">
                      {c.totalHours} · 5 módulos incluídos
                    </p>
                    {c.modules.map((mod) => (
                      <div key={mod.number}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold text-mint/50 w-5 shrink-0">{mod.number}</span>
                          <p className="text-sm font-semibold text-cream">{mod.title}</p>
                          <span className="ml-auto text-xs text-cream/30 shrink-0">{mod.hours}h</span>
                        </div>
                        <ul className="ml-8 space-y-1.5 mb-2">
                          {mod.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-cream/55">
                              <span className="text-mint/50 mt-0.5 shrink-0">–</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="ml-8 text-[11px] text-mint/50 font-medium">{mod.deliverables}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* botão ocultar inferior */}
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setRevealed(false)}
                className="text-xs text-cream/30 hover:text-cream/60 transition underline underline-offset-4"
              >
                Ocultar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/* ---------- 13. ONBOARDING ---------- */
export function Onboarding() {
  const { content } = useContent();
  const c = content.onboarding;
  return (
    <Section id="onboarding" tone="black" transition="zoomIn">
      <Reveal>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">{c.heading}</h2>
      </Reveal>

      <RevealStagger className="mt-14 relative">
        <div className="absolute left-[14px] sm:left-1/2 top-2 bottom-2 w-px bg-mint/20 sm:-translate-x-1/2" />
        <div className="space-y-8">
          {c.steps.map((step, i) => (
            <motion.div
              key={step.day}
              variants={staggerItem}
              className={`relative flex items-start gap-4 sm:w-1/2 ${
                i % 2 === 1 ? "sm:ml-auto sm:flex-row-reverse sm:text-right" : ""
              }`}
            >
              <span className="relative z-10 mt-1 h-7 w-7 flex-shrink-0 rounded-full bg-gold flex items-center justify-center text-forest text-xs font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-display text-lg text-mint">{step.day}</p>
                <p className="text-cream/75 text-sm">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </RevealStagger>

      <Reveal delay={0.2} className="mt-14 max-w-2xl space-y-2 text-cream/85">
        <p>{c.line1}</p>
        <p className="font-semibold text-mint">{c.line2}</p>
        <p className="font-semibold text-mint">{c.line3}</p>
        <Kicker>{c.kicker}</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 14. FECHAMENTO ---------- */
export function Closing() {
  const { content } = useContent();
  const c = content.closing;
  return (
    <SlideUpPanel>
      <section
        id="fechamento"
        className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-[#0d3f27] via-mint to-gold px-6 text-center shadow-[0_-30px_60px_-25px_rgba(0,0,0,0.55)]"
      >
        <motion.div aria-hidden className="absolute inset-0 bg-noise opacity-20" />
        <motion.div
          aria-hidden
          className="absolute top-1/2 left-1/2 h-[50vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Reveal className="relative z-10">
          <h2 className="text-5xl sm:text-7xl text-forest drop-shadow-sm">
            {c.titlePlain}
            <span className="font-semibold">{c.titleGold}</span>
          </h2>
          <p className="mt-8 text-xl sm:text-2xl text-forest/90 font-display">
            {c.line1}
            <br />
            <span className="font-semibold">{c.line2}</span>
          </p>
        </Reveal>
      </section>
    </SlideUpPanel>
  );
}

/* ---------- 15. GREEN CLUB ---------- */
export function GreenClub() {
  const { content } = useContent();
  const c = content.greenClub;
  return (
    <Section id="green-club" tone="vivid-gold" transition="zoomIn" className="relative">
      <Confetti />
      <SlideReveal direction="left">
        <div className="flex items-center gap-3 mb-4">
          <Float distance={8} duration={2.4}>
            <PartyPopper className="h-8 w-8 text-forest" />
          </Float>
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-forest/70">
            {c.eyebrow}
          </p>
        </div>
        <h2 className="text-3xl sm:text-5xl text-forest max-w-3xl">{c.heading}</h2>
        <p className="mt-6 max-w-2xl text-forest/85 leading-relaxed">{c.paragraph1}</p>
        <p className="mt-4 max-w-2xl text-forest font-semibold">{c.paragraph2}</p>
      </SlideReveal>

      <RevealStagger className="mt-10 grid sm:grid-cols-2 gap-4">
        {c.rewards.map((r, i) => (
          <motion.div
            key={r.label}
            variants={staggerItem}
            whileHover={{ scale: 1.03, y: -3 }}
            className="flex items-start gap-3 rounded-xl border border-forest/25 bg-white/20 p-5 backdrop-blur-sm shadow-[0_8px_20px_-8px_rgba(27,58,42,0.35)]"
          >
            <Trophy className={`mt-0.5 h-5 w-5 flex-shrink-0 text-forest ${i === 3 ? "opacity-100" : "opacity-60"}`} />
            <div>
              <p className="text-forest/80 text-sm">{r.label}</p>
              <p className="font-display font-semibold text-forest">{r.value}</p>
            </div>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.15}>
        <p className="font-body font-semibold text-lg sm:text-xl mt-6 leading-relaxed text-forest">
          {c.kicker}
        </p>
      </Reveal>
    </Section>
  );
}
