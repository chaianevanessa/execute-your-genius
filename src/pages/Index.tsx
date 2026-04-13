import { motion } from "framer-motion";
import vanessaImg from "@/assets/vanessa-hero.png";
import CTAButton from "@/components/CTAButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-16 md:py-24 ${className}`}>
    <div className="max-w-3xl mx-auto">{children}</div>
  </section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* HERO */}
      <Section className="pt-20 md:pt-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-gradient-gold mb-6"
        >
          PARE DE ESTUDAR E COMECE A VIVER DO QUE VOCÊ SABE
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto"
        >
          <strong className="text-foreground">Você já tem conhecimento demais para estar ganhando tão pouco.</strong>
          <br />
          O problema não é o que você sabe. É <em>como</em> você usa o que sabe.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-deep"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
            Descubra SEU padrão de trava em 3 dias
          </h2>
          <p className="text-foreground/70 mb-8">
            E receba um protocolo personalizado para nunca mais travar na hora de executar
          </p>
          <CTAButton>🗺️ QUERO MEU MAPA L.E.D DE PERSONALIDADE AGORA — 12x R$ 30,32</CTAButton>
          <p className="text-muted-foreground text-sm mt-4 italic">Menos que um curso que você não aplicou</p>
        </motion.div>
      </Section>

      {/* DOR */}
      <Section className="bg-card">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl md:text-4xl font-bold text-center mb-10">
            ISSO SOA FAMILIAR?
          </motion.h2>
          <div className="space-y-4 text-lg">
            {[
              "Você já fez cursos, formações, imersões...",
              "Sabe que nasceu para ajudar pessoas",
              "Tem algo importante para compartilhar",
              "Mas na hora de SE POSICIONAR, COBRAR ou VENDER...",
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} custom={i + 1} className="flex items-start gap-3">
                <span className="text-primary">✅</span>
                <span className="text-foreground/80">{text}</span>
              </motion.p>
            ))}
          </div>
          <motion.div variants={fadeUp} custom={5} className="mt-10 text-center bg-secondary rounded-xl p-8">
            <h3 className="font-display text-3xl md:text-4xl font-black text-accent mb-3">...você TRAVA.</h3>
            <p className="text-foreground/70">E volta a estudar mais um pouco, como se fosse falta de conhecimento.</p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 text-center">
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
            A VERDADE QUE NINGUÉM TE CONTA:
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-xl font-bold text-foreground mb-2">
            Não é falta de preparo. É falta de conhecer o seu perfil comportamental com base no Big Five, a teoria de personalidade mais recente.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-foreground/60">
            Seu maior inimigo não está lá fora. Está no seu padrão de pensar e agir.
          </motion.p>
        </motion.div>
      </Section>

      {/* SOLUÇÃO */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl md:text-4xl font-bold text-center mb-10">
            O MAPA QUE VAI <span className="text-gradient-gold">DESTRAVAR SUA EXECUÇÃO</span>
          </motion.h2>

          <motion.div variants={fadeUp} custom={1} className="bg-card border border-primary/20 rounded-2xl p-8 md:p-10 mb-12">
            <h3 className="font-display text-2xl font-bold text-primary mb-2">Mapa L.E.D de Personalidade</h3>
            <p className="text-foreground/60 italic mb-8">
              "Descubra seu padrão. Destrave sua execução. Viva do que você ama."
            </p>
            <div className="space-y-4">
              {[
                ["Descubra", "por que você trava exatamente nas mesmas situações"],
                ["Entenda", "como seu perfil pode ser seu maior aliado (não inimigo)"],
                ["Receba", "um protocolo anti-trava feito só para você"],
                ["Aplique", 'e pare de se esconder atrás de "mais um curso"'],
              ].map(([bold, rest], i) => (
                <p key={i} className="flex items-start gap-3 text-lg">
                  <span className="text-primary">✨</span>
                  <span>
                    <strong className="text-foreground">{bold}</strong>{" "}
                    <span className="text-foreground/70">{rest}</span>
                  </span>
                </p>
              ))}
            </div>
          </motion.div>

          <motion.h3 variants={fadeUp} custom={2} className="font-display text-xl md:text-2xl font-bold text-center mb-8">
            COMO FUNCIONA <span className="text-primary">(SIMPLES ASSIM)</span>:
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Você clica no botão e faz o teste",
              "Eu analiso seu perfil pessoalmente",
              "Você recebe um áudio explicando SEU padrão + protocolo anti-trava",
              "Aplica e para de travar (ou devolvo seu dinheiro)",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 3}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
              >
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {i + 1}
                </span>
                <p className="text-foreground/80">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* TRANSFORMAÇÃO */}
      <Section className="bg-card">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            DO "EU SEI MUITO" PARA <span className="text-gradient-gold">"EU VIVO DO QUE SEI"</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div variants={fadeUp} custom={1} className="bg-secondary rounded-xl p-6 border border-accent/20">
              <h4 className="font-display text-lg font-bold text-accent mb-4">ANTES DO MAPA:</h4>
              {["Estuda, mas não executa", "Sabe, mas não se posiciona", "Quer ajudar, mas não cobra", 'Se sente "quase pronta" (sempre)'].map(
                (t, i) => (
                  <p key={i} className="text-foreground/60 mb-2">• {t}</p>
                )
              )}
            </motion.div>
            <motion.div variants={fadeUp} custom={2} className="bg-secondary rounded-xl p-6 border border-primary/20">
              <h4 className="font-display text-lg font-bold text-primary mb-4">DEPOIS DO MAPA:</h4>
              {["Entende seu padrão de trava", "Usa seu perfil a seu favor", "Executa com consistência", "Vive do que ama (de verdade)"].map(
                (t, i) => (
                  <p key={i} className="text-foreground/80 mb-2">• {t}</p>
                )
              )}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} custom={3} className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-xl p-8 border border-primary/20">
              <h3 className="font-display text-xl font-bold text-primary mb-6">Para quem é o Mapa L.E.D de Personalidade</h3>
              <p className="text-foreground font-bold mb-3">Para mulheres que:</p>
              {[
                "já estudaram muito desenvolvimento humano",
                "sentem que nasceram para ajudar pessoas",
                "querem viver do que sabem",
                "sentem que têm algo importante para compartilhar",
                "mas ainda se sentem travadas",
              ].map((t, i) => (
                <p key={i} className="text-foreground/80 mb-2">• {t}</p>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-8 border border-accent/20">
              <h3 className="font-display text-xl font-bold text-accent mb-6">Para quem NÃO é</h3>
              <p className="text-foreground font-bold mb-3">Não é para quem:</p>
              {[
                "está procurando fórmula mágica",
                "não está disposta a agir",
                "quer apenas mais conteúdo",
              ].map((t, i) => (
                <p key={i} className="text-foreground/60 mb-2">• {t}</p>
              ))}
              <p className="text-foreground/80 mt-4 italic text-sm">
                O Mapa L.E.D de Personalidade é para quem está pronta para dar um passo real na própria vida profissional.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* VANESSA */}
      <Section>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <motion.img
            variants={fadeUp}
            custom={0}
            src={vanessaImg}
            alt="Vanessa Zuhl"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-primary/30"
            width={800}
            height={1024}
          />
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-2xl md:text-3xl font-bold mb-6">
            VANESSA ZUHL: <span className="text-gradient-gold">EU JÁ ESTIVE ONDE VOCÊ ESTÁ</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="text-left space-y-4 text-foreground/70 text-lg max-w-2xl mx-auto">
            <p><strong className="text-foreground">Eu acumulei conhecimento como você.</strong></p>
            <p>Fiz cursos, formações, estudei negócios digitais, marketing, desenvolvimento humano...</p>
            <p><strong className="text-foreground">E travava exatamente nas mesmas horas.</strong></p>
            <p>Até entender que não era falta de conteúdo. Era falta de <em className="text-primary">mapa</em>.</p>
            <p>Quando descobri meu padrão, reorganizei tudo:</p>
            <ul className="space-y-1 pl-4">
              <li>• Parei de começar projetos e abandonar</li>
              <li>• Passei a priorizar o que importa</li>
              <li>• E hoje vivo do que amo, sem trava</li>
            </ul>
            <p className="text-primary font-display italic text-xl mt-6">— Vanessa Zuhl</p>
          </motion.div>
        </motion.div>
      </Section>

      {/* OFERTA */}
      <Section className="bg-card">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp} custom={0} className="bg-secondary border border-primary/20 rounded-2xl p-8 md:p-12 shadow-deep">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">O QUE VOCÊ RECEBE:</h2>
            <div className="space-y-4 text-lg mb-10">
              {[
                ["🗺️", "Seu Mapa de Personalidade", "(análise personalizada)"],
                ["🎧", "Áudio Explicativo", "(eu gravo só para você)"],
                ["🛡️", "Protocolo Anti-Trava", "(passos personalizados)"],
                ["💬", "7 dias de suporte", "(tire dúvidas direto comigo)"],
              ].map(([emoji, bold, desc], i) => (
                <p key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{emoji}</span>
                  <span>
                    <strong className="text-foreground">{bold}</strong>{" "}
                    <span className="text-foreground/50">{desc}</span>
                  </span>
                </p>
              ))}
            </div>

            <div className="text-center mb-10">
              <h3 className="font-display text-xl font-bold text-primary mb-4">INVESTIMENTO:</h3>
              <p className="text-foreground mb-1">
                <span className="text-lg">12x de</span>{" "}
                <span className="text-gradient-gold text-3xl md:text-4xl font-bold">R$ 30,<span className="text-4xl md:text-5xl">32</span></span>
              </p>
              <p className="text-foreground/50 mb-4">ou R$ 297,00 à vista</p>
              <p className="text-foreground/60 italic">Menos que um jantar fora. Mais que sua próxima trava.</p>
            </div>

            <div className="bg-muted rounded-xl p-6 mb-10 text-center border border-primary/10">
              <h3 className="font-display text-xl font-bold text-primary mb-3">GARANTIA TOTAL DE 7 DIAS</h3>
              <p className="text-foreground/70 mb-1">Se não fizer sentido, se não conectar, se não ajudar...</p>
              <p className="text-foreground font-bold text-lg">Devolvo 100% do seu dinheiro.</p>
              <p className="text-foreground/50 italic text-sm mt-1">Sem perguntas, sem burocracia.</p>
            </div>

            <div className="text-center">
              <CTAButton>🗺️ QUERO MEU MAPA L.E.D DE PERSONALIDADE AGORA — 12x R$ 30,32</CTAButton>
              <p className="text-foreground font-bold mt-6">Você já estudou demais para continuar travada.</p>
              <p className="text-foreground/60">Chegou a hora de usar o que você sabe.</p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">PERGUNTAS FREQUENTES</h2>
        <div className="space-y-4">
          {[
            ["Quanto tempo leva?", "Até 3 dias úteis após você fazer o teste."],
            ["Preciso ter negócio?", "Não. Só vontade de viver do que você sabe."],
            ["É realmente personalizado?", "Sim. Eu analiso e gravo um áudio só para você."],
            ["E se não gostar?", "Devolvo 100% do seu dinheiro em 7 dias."],
          ].map(([q, a], i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <p className="font-bold text-foreground mb-1">{q}</p>
              <p className="text-foreground/60">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-card text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-4">
          VOCÊ MERECE <span className="text-gradient-gold">VIVER DO QUE AMA</span>
        </h2>
        <p className="text-foreground/60 mb-8">Sem mais travas. Sem mais "quase".</p>
        <CTAButton>🗺️ CLIQUE AQUI PARA DESTRAVAR SUA EXECUÇÃO</CTAButton>
        <p className="text-muted-foreground text-sm mt-4 italic">
          12x R$ 30,72 • Garantia de 7 dias • Suporte personalizado
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        Vanessa Zuhl © 2026 • Todos os direitos reservados
      </footer>
    </div>
  );
};

export default Index;
