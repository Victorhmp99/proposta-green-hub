"use client";

import { useState } from "react";
import Image from "next/image";
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
  return (
    <Section id="origem" tone="black" panel className="z-10 -mt-[85vh]">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Quem Somos</Eyebrow>
            <h2 className="text-3xl sm:text-5xl text-cream max-w-xl">
              A Green Hub não nasceu de uma oportunidade.{" "}
              <span className="text-gradient-gold font-semibold">
                Nasceu de uma indignação.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-cream/80 leading-relaxed">
            <p>
              Trabalhando nos grandes players do mercado de marketing digital, Victor Hugo e
              Victor Caixeta viram de perto o que acontecia depois que o contrato era assinado: o
              acompanhamento sumia, o relatório chegava cheio de números que não significavam
              nada e ninguém assumia responsabilidade quando o resultado não vinha. Foi aí que
              ficou claro: o mercado não precisava de mais uma agência. Precisava de um parceiro
              de verdade.
            </p>
            <p>
              Victor Hugo trouxe tecnologia, automação e crescimento comercial — mais de 100
              projetos implementados, mais de 100 empresas impactadas, trajetória construída com
              disciplina e obsessão por execução. Victor Caixeta trouxe performance e escala —
              mais de R$ 5,3 milhões gerenciados em anúncios pagos em grandes players como Blue
              Ocean e Alpha Assessoria.
            </p>
            <p className="text-cream/90">
              Porque pra nós, cada cliente não é um contrato.{" "}
              <span className="font-semibold text-mint">
                É mais um sócio que entrou — e que precisa de resultado.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Kicker>&ldquo;Não acreditamos em promessas. Acreditamos em resultados.&rdquo;</Kicker>
          </Reveal>
        </div>

        <SlideReveal direction="right" delay={0.1}>
          <Float distance={8} duration={5}>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)]">
              <Image
                src="/quem-somos/5037628289387793361.jpg"
                alt="Victor Hugo e Victor Caixeta, fundadores da Green Hub"
                width={1280}
                height={1067}
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4">
                <p className="text-sm font-semibold text-cream">
                  Victor Hugo &amp; Victor Caixeta
                </p>
                <p className="text-xs text-cream/70">Sócios-fundadores · Green Hub</p>
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
  const items = [
    "Anúncio certo para o paciente certo",
    "Conteúdo que posiciona e atrai organicamente",
    "Processo que converte lead em paciente agendado",
    "Dados que mostram o que está funcionando e o que precisa melhorar",
  ];
  return (
    <Section id="problema" dark transition="slideRight">
      <SlideReveal direction="right">
        <Eyebrow>O Problema Real</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Marketing que gera resultado vai muito além de anúncio.
        </h2>
        <p className="mt-6 max-w-2xl text-cream/80 leading-relaxed">
          Tráfego pago é parte da estratégia — e uma parte poderosa. Mas resultado de verdade vem
          de um sistema completo funcionando junto:
        </p>
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
          A Green Hub entrega tudo isso integrado.
          <br />
          <span className="font-semibold text-xl text-gradient-gold">
            Não uma peça isolada — um sistema completo.
          </span>
        </p>
        <Kicker>
          Quanto mais estruturado o sistema, menor o custo para atrair cada novo paciente.
        </Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 4. NOSSA DIFERENÇA ---------- */
export function Difference() {
  const questions = [
    "De onde vêm seus pacientes hoje?",
    "Por que eles saem sem fechar?",
    "O que está travando o crescimento?",
    "Qual procedimento tem maior ticket e menor custo de aquisição?",
  ];
  return (
    <Section id="diferenca" transition="slideLeft">
      <SlideReveal direction="left">
        <Eyebrow>Nossa Diferença</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Não somos agência de tráfego.
          <br />
          <span className="text-gradient-gold font-semibold">Somos um hub de soluções para clínicas.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-cream/80">
          Antes de qualquer campanha, fazemos um diagnóstico real:
        </p>
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
        <p>
          A partir disso, montamos uma estratégia personalizada — porque cada clínica é única e
          nenhuma solução pronta funciona para todo mundo.
        </p>
        <p>
          O tráfego pago é uma ferramenta.
          <br />
          <span className="font-semibold text-mint text-xl">
            A estratégia é o que faz funcionar.
          </span>
        </p>
        <Kicker>
          Nada é feito sem estratégia. Nada é entregue sem acompanhamento.
        </Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 5. MÉTODO FLORESTA ---------- */
const forestSteps = [
  {
    Icon: IconSemente,
    title: "Semente",
    text: "Criamos a oferta certa para o mercado da sua clínica. O que comunicar, para quem, em qual canal.",
    particle: "sand" as ParticleType,
  },
  {
    Icon: IconSolo,
    title: "Solo",
    text: "Geramos demanda qualificada — orgânica e paga. Não entregamos lead. Entregamos intenção de compra.",
    particle: "light" as ParticleType,
  },
  {
    Icon: IconCultivo,
    title: "Cultivo",
    text: "Treinamos seu comercial para fechar tratamentos de alto ticket. O segredo que a maioria das agências ignora.",
    particle: "water" as ParticleType,
  },
  {
    Icon: IconColheita,
    title: "Colheita",
    text: "Escala previsível. Agenda cheia. Lucro no bolso.",
    particle: "money" as ParticleType,
  },
  {
    Icon: IconFloresta,
    title: "Floresta",
    text: "LTV, indicação e o consultório que vira um negócio de verdade.",
    particle: "leaf" as ParticleType,
  },
];

function ForestCard({
  step,
  index,
}: {
  step: (typeof forestSteps)[number];
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
      <ParticleEffect active={hovered} type={step.particle} />
      <span className="absolute right-4 top-4 font-display text-3xl text-mint/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <Float distance={6} duration={3.5} delay={index * 0.2} className="mb-4 w-fit">
        <step.Icon className="h-14 w-14 drop-shadow-[0_0_12px_rgba(143,230,184,0.5)]" />
      </Float>
      <p className="font-display text-xl text-cream mb-2">{step.title}</p>
      <p className="text-sm text-cream/70 leading-relaxed">{step.text}</p>
    </motion.div>
  );
}

export function ForestMethod() {
  return (
    <Section id="metodo" dark transition="zoomOut">
      <Reveal>
        <Eyebrow>Método Floresta</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Negócios crescem com uma floresta bem cultivada.
        </h2>
        <p className="mt-3 text-sm text-cream/50">
          Passe o mouse sobre cada etapa e veja o método em ação.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {forestSteps.map((step, i) => (
          <ForestCard key={step.title} step={step} index={i} />
        ))}
      </RevealStagger>

      <Reveal delay={0.15}>
        <Kicker>
          O tráfego é apenas o Solo. Sem Semente, Cultivo e Colheita — não brota nada.
        </Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 6. TIME COMPLETO ---------- */
const team = [
  {
    icon: Megaphone,
    title: "Gestão de Tráfego",
    text: "Meta Ads e Google Ads — anúncios em vídeo, imagem e stories direcionados para quem já tem interesse no tratamento da sua clínica.",
    featured: true,
    visual: "trafego" as const,
  },
  {
    icon: MonitorSmartphone,
    title: "CRM Green Hub",
    text: "Sistema próprio da Green Hub para gestão completa dos leads e do funil de vendas — ROI e resultados em tempo real.",
    featured: true,
    visual: "crm" as const,
  },
  {
    icon: PenLine,
    title: "Copywriter",
    text: "Textos estratégicos para anúncios, landing pages e WhatsApp — cada palavra pensada para gerar ação.",
    visual: "copy" as const,
  },
  {
    icon: Clapperboard,
    title: "Designer + Editor de Vídeo",
    text: "Artes para feed, stories e carrossel + vídeos de autoridade, depoimento e Reels educativos.",
    visual: "video" as const,
  },
  {
    icon: LineChart,
    title: "Consultor Comercial",
    text: "Acompanhamento semanal do funil — do lead até o agendamento.",
    visual: "funnel" as const,
  },
  {
    icon: Smartphone,
    title: "CRC — Central de Relacionamento",
    text: "Profissional dedicado a atender, qualificar e agendar os leads direto na agenda da clínica.",
    visual: "chat" as const,
  },
  {
    icon: ClipboardList,
    title: "Script de Atendimento Green Hub",
    text: "Roteiro validado para WhatsApp e telefone — sua equipe atende com mais segurança e converte mais.",
    visual: "checklist" as const,
  },
];

type VisualType = "trafego" | "crm" | "copy" | "video" | "funnel" | "chat" | "checklist";

function TeamVisual({ type }: { type: VisualType }) {
  if (type === "trafego") {
    return (
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
          <Image
            src="/team-visuals/meta-ads.png"
            alt="Meta Ads"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2.5 shadow-lg">
          <Image
            src="/team-visuals/google-ads.png"
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
          src="/team-visuals/crm-screenshot.jpg"
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
  return (
    <Section id="time" transition="zoomIn">
      <Reveal>
        <Eyebrow>O Time Completo</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">
          Um time inteiro, especializado em clínicas.
        </h2>
        <p className="mt-4 max-w-xl text-cream/70 leading-relaxed">
          Tecnologia de ponta + gente especialista. Não é freelancer avulso — é uma estrutura
          completa rodando pela sua clínica todos os dias.
        </p>
      </Reveal>

      <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.map((member, index) => (
          <motion.div
            key={member.title}
            variants={staggerItem}
            whileHover={{ y: -4, borderColor: "rgba(200,168,75,0.5)" }}
            className={`rounded-2xl border p-6 ${
              member.featured
                ? "sm:col-span-2 lg:col-span-1 border-gold/25 bg-gradient-to-b from-gold/10 to-white/[0.02]"
                : "border-mint/15 bg-white/[0.03]"
            }`}
          >
            {member.visual && <TeamVisual type={member.visual} />}
            <Float distance={5} duration={3.2} delay={index * 0.15}>
              <member.icon className="h-6 w-6 text-gold mb-4" />
            </Float>
            <p className="font-display text-lg text-cream mb-2">{member.title}</p>
            <p className="text-sm text-cream/70 leading-relaxed">{member.text}</p>
          </motion.div>
        ))}
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
  return (
    <Section id="ancoragem-time" dark transition="suction">
      <Reveal>
        <Eyebrow>Quanto Custaria Montar Esse Time?</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Ter essa estrutura por conta própria custaria mais de{" "}
          <span className="text-gradient-gold font-semibold">R$ 23.000,00</span> por mês.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <CostTable
          rows={[
            { label: "Designer Gráfico", value: "R$ 4.500/mês" },
            { label: "Gestor de Tráfego", value: "R$ 5.500/mês" },
            { label: "Copywriter", value: "R$ 4.000/mês" },
            { label: "Consultor Comercial", value: "R$ 6.000/mês" },
            { label: "Editor de Vídeo", value: "R$ 3.200/mês" },
            { label: "CRM", value: "R$ 499/mês" },
            { label: "Script de Atendimento", value: "R$ 200/mês" },
          ]}
          total={{ label: "Total", value: "R$ 23.899/mês" }}
          highlight
        />
      </Reveal>

      <Reveal delay={0.2}>
        <Kicker>
          Com a Green Hub, você tem tudo isso — especializado em clínicas — por uma fração disso.
        </Kicker>
      </Reveal>
    </Section>
  );
}

export function AnchorSecretary() {
  return (
    <Section id="ancoragem-secretaria" transition="slideLeft">
      <Reveal>
        <Eyebrow>O Custo Real da Sua Secretária</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Quanto custa manter quem atende seus leads hoje?
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <CostTable
          rows={[
            { label: "Salário base", value: "R$ 2.200 – R$ 3.500/mês" },
            { label: "Encargos CLT (FGTS, INSS, férias, 13º)", value: "+68% sobre o salário" },
            { label: "Dias de atestado e falta", value: "Você paga — sem retorno" },
            { label: "Treinamento comercial para vendas", value: "Raramente acontece" },
            { label: "Disponibilidade fora do horário", value: "Zero" },
            { label: "Qualificar lead e fechar tratamento", value: "Quase nunca" },
          ]}
          total={{ label: "Custo real total", value: "R$ 3.700 – R$ 5.900/mês" }}
        />
      </Reveal>

      <Reveal delay={0.2} className="mt-10 max-w-2xl space-y-2 text-cream/85">
        <p>E com tudo isso:</p>
        <p className="font-semibold text-lg text-mint">
          Ela não foi treinada para vender implante.
        </p>
        <p className="font-semibold text-lg text-mint">
          Não entende de urgência comercial.
        </p>
        <p className="font-semibold text-lg text-mint">
          Não qualifica lead — ocupa agenda com quem não vai fechar.
        </p>
        <Kicker>O CRC da Green Hub foi criado para resolver exatamente isso.</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 9. CRC ---------- */
export function CRC() {
  const bullets = [
    "Treinado exclusivamente para atender leads de clínica",
    "Qualifica o paciente antes de ocupar sua agenda",
    "Agenda direto no sistema da clínica",
    "Scripts validados para WhatsApp e telefone",
    "Sem interrupção da sua operação",
  ];
  return (
    <Section id="crc" dark transition="slideRight">
      <SlideReveal direction="right">
        <Eyebrow>O CRC</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">
          O CRC é o profissional que cuida dos seus leads.
          <br />
          <span className="text-gradient-gold font-semibold">Para que você cuide dos seus pacientes.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-cream/80 leading-relaxed">
          Enquanto você foca nos procedimentos, o CRC garante que nenhum lead fique sem resposta,
          sem qualificação e sem agendamento.
        </p>
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
        <Kicker>
          Isso não é secretária. É o seu time comercial funcionando enquanto você atende.
        </Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 10. CASES ---------- */
export function Cases() {
  return (
    <Section id="resultados" transition="zoomOut">
      <Reveal>
        <Eyebrow>Resultados</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">
          Resultado real, em negócios reais.
        </h2>
        <p className="mt-4 max-w-xl text-cream/70 leading-relaxed">
          Dezenas de clientes já tomaram a decisão de ser Green. A única pergunta que falta
          responder é: o que está fazendo o seu negócio esperar?
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <CaseBubbles />
      </Reveal>
    </Section>
  );
}

/* ---------- 11 & 12. PLANOS + DESCONTO TCV (oculto até clique, valor por mês) ---------- */
function brl(n: number) {
  return `R$ ${n.toLocaleString("pt-BR")}`;
}

const plans = [
  {
    name: "START",
    Material: () => <Sprout className="h-9 w-9 text-mint" strokeWidth={1.5} />,
    accent: "text-mint",
    cardBg: "bg-black",
    cardBorder: "border-white/10",
    price: "R$ 1.500/mês",
    items: ["Tráfego", "Design", "Vídeo", "Copy", "Consultor Comercial"],
    monthly: { m3: 1200, m6: 1125, m12: 1050 },
  },
  {
    name: "PRATA",
    Material: () => <MetallicOrb size={48} tone="silver" />,
    accent: "text-silver-green",
    cardBg: "bg-gradient-to-b from-silver-green/20 via-[#0c2117] to-[#0c2117]",
    cardBorder: "border-silver-green/30",
    price: "R$ 2.000/mês",
    items: ["Tudo do Start", "+ CRM"],
    monthly: { m3: 1600, m6: 1500, m12: 1400 },
  },
  {
    name: "GOLD",
    Material: () => <GoldBar size={52} />,
    accent: "text-gold",
    cardBg: "bg-gradient-to-b from-gold/40 via-gold/10 to-[#0c2117]",
    cardBorder: "border-gold",
    price: "R$ 3.000/mês",
    items: ["Tudo do Prata", "+ CRC"],
    monthly: { m3: 2400, m6: 2250, m12: 2100 },
    featured: true,
  },
  {
    name: "ESMERALDA",
    Material: () => <EmeraldGem size={48} />,
    accent: "text-mint",
    cardBg: "bg-gradient-to-b from-[#1fae6b]/30 via-[#0c2117] to-[#0c2117]",
    cardBorder: "border-[#1fae6b]/40",
    price: "R$ 4.500/mês",
    items: ["Tudo do Gold", "+ Social Mídia", "+ Estratégia Orgânica"],
    monthly: { m3: 3600, m6: 3375, m12: 3150 },
  },
];

export function Plans() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <Section id="planos" tone="black" panel className="perspective-1200">
      <Reveal>
        <Eyebrow>Planos</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-2xl">
          Escolha o nível de crescimento certo para sua clínica.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={staggerItem}
            className={plan.featured ? "lg:-mt-4 lg:scale-[1.06]" : ""}
          >
            <Tilt3D
              className={`rounded-2xl border glass-3d p-6 flex flex-col h-full ${plan.cardBorder} ${plan.cardBg} ${
                plan.featured ? "shadow-[0_0_50px_-10px_rgba(232,196,104,0.55)]" : ""
              }`}
            >
              {plan.featured && (
                <span
                  style={{ borderRadius: 9999 }}
                  className="absolute -top-3 right-4 bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-forest"
                >
                  Mais vendido
                </span>
              )}
              <Float distance={6} duration={3.6} className="w-fit mb-4">
                <plan.Material />
              </Float>
              <p className="font-display text-2xl text-cream mb-1">{plan.name}</p>
              <p className={`font-display text-lg mb-5 ${plan.featured ? "text-gradient-gold" : plan.accent}`}>
                {plan.price}
              </p>
              <ul className="space-y-2 text-sm text-cream/75 flex-1">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-mint" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[11px] uppercase tracking-wide text-cream/40 mb-2">
                  Fidelidade — equivalente por mês
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
                        <span className="text-cream">{brl(plan.monthly.m3)}/mês</span>
                      </div>
                      <div className="flex justify-between text-cream/70">
                        <span>6 meses</span>
                        <span className="text-cream">{brl(plan.monthly.m6)}/mês</span>
                      </div>
                      <div className="flex justify-between font-semibold">
                        <span className="text-cream/70">12 meses</span>
                        <span className="text-gradient-gold">{brl(plan.monthly.m12)}/mês</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="closed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex select-none items-center gap-1 text-sm text-cream/30 blur-[5px]"
                    >
                      <span>3m R$ ••••/mês</span>
                      <span>· 12m R$ ••••/mês</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tilt3D>
          </motion.div>
        ))}
      </RevealStagger>

      <Reveal delay={0.15} className="mt-10 flex flex-col items-center gap-4 text-center">
        <button
          type="button"
          onClick={() => setUnlocked((v) => !v)}
          style={{ borderRadius: 9999 }}
          className="group inline-flex items-center gap-2 appearance-none border border-gold/50 bg-gold/10 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/20"
        >
          {unlocked ? <Unlock className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          {unlocked ? "Ocultar condições especiais" : "Desbloquear condições especiais (3/6/12 meses)"}
        </button>
        <Kicker>
          Todos os planos seguem o mesmo método. A diferença é a estrutura que acompanha você.
        </Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 13. ONBOARDING ---------- */
const onboarding = [
  { day: "Dia 1", text: "Reunião Welcome + Diagnóstico" },
  { day: "Dia 2", text: "Planejamento estratégico + Direcionamento de copy" },
  { day: "Dias 3–7", text: "Produção de criativos" },
  { day: "Dia 8", text: "Kick-off das campanhas" },
  { day: "Dias 9–10", text: "Ativação da estrutura completa" },
];

export function Onboarding() {
  return (
    <Section id="onboarding" tone="black" transition="zoomIn">
      <Reveal>
        <Eyebrow>Onboarding</Eyebrow>
        <h2 className="text-3xl sm:text-5xl text-cream max-w-3xl">
          Do contrato assinado ao primeiro paciente agendado em 10 dias.
        </h2>
      </Reveal>

      <RevealStagger className="mt-14 relative">
        <div className="absolute left-[14px] sm:left-1/2 top-2 bottom-2 w-px bg-mint/20 sm:-translate-x-1/2" />
        <div className="space-y-8">
          {onboarding.map((step, i) => (
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
        <p>Otimização contínua a partir do Dia 9.</p>
        <p className="font-semibold text-mint">
          Nenhuma campanha sobe sem estratégia aprovada.
        </p>
        <p className="font-semibold text-mint">
          Nenhum resultado é reportado sem dado real.
        </p>
        <Kicker>Processo acompanhado de perto, do primeiro dia em diante.</Kicker>
      </Reveal>
    </Section>
  );
}

/* ---------- 14. FECHAMENTO ---------- */
export function Closing() {
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
            Eai, <span className="font-semibold">Deu Green?</span>
          </h2>
          <p className="mt-8 text-xl sm:text-2xl text-forest/90 font-display">
            A agenda cheia não é sorte.
            <br />
            <span className="font-semibold">É sistema.</span>
          </p>
        </Reveal>
      </section>
    </SlideUpPanel>
  );
}

/* ---------- 15. GREEN CLUB ---------- */
const rewards = [
  { label: "Indicou 5 — nenhum fechou", value: "Desconto garantido na mensalidade" },
  { label: "1 fechou", value: "50% de desconto" },
  { label: "2 fecharam", value: "Mensalidade 100% gratuita" },
  { label: "3 ou mais fecharam", value: "Serviço adicional ou premiação exclusiva" },
];

export function GreenClub() {
  return (
    <Section id="green-club" tone="vivid-gold" transition="zoomIn" className="relative">
      <Confetti />
      <SlideReveal direction="left">
        <div className="flex items-center gap-3 mb-4">
          <Float distance={8} duration={2.4}>
            <PartyPopper className="h-8 w-8 text-forest" />
          </Float>
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-forest/70">
            Green Club
          </p>
        </div>
        <h2 className="text-3xl sm:text-5xl text-forest max-w-3xl">
          Programa de Indicação Green Hub
        </h2>
        <p className="mt-6 max-w-2xl text-forest/85 leading-relaxed">
          Agora que você é nosso parceiro, você entra automaticamente no Green Club. Indica 5
          contatos — doutores, donos de clínica ou qualquer empresário que sofre com os mesmos
          problemas que você tinha: agenda imprevisível, dependência total de indicação, falta de
          demanda constante, faturamento sem previsibilidade.
        </p>
        <p className="mt-4 max-w-2xl text-forest font-semibold">
          Se conhece alguém assim — essa indicação vale dinheiro real no seu bolso.
        </p>
      </SlideReveal>

      <RevealStagger className="mt-10 grid sm:grid-cols-2 gap-4">
        {rewards.map((r, i) => (
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
          Quem indica, cresce junto.
        </p>
      </Reveal>
    </Section>
  );
}
