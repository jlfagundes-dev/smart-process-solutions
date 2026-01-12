import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Redução de tarefas manuais e repetitivas",
  "Conexão entre sistemas e plataformas",
  "Aumento de produtividade operacional",
  "Soluções personalizadas para cada negócio",
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Sobre Nós
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Quem é a{" "}
              <span className="text-gradient">Cetti Agentics</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A Cetti Agentics é especializada em automação inteligente e integração de sistemas utilizando inteligência artificial. 
              Nosso foco é ajudar pequenas e médias empresas a reduzir tarefas manuais, acelerar processos e transformar a operação 
              do dia a dia com tecnologia prática, eficiente e acessível.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Com mais de 20 anos de experiência em desenvolvimento e integrações, criamos soluções sob medida que 
              geram resultados reais para o seu negócio.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-primary/30 animate-pulse-glow animation-delay-200" />
              <div className="absolute inset-16 rounded-full border border-primary/40 animate-pulse-glow animation-delay-400" />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-8 text-center glow-effect">
                  <div className="font-display text-5xl font-bold text-gradient mb-2">20+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">Automação</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-4 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">Inteligência Artificial</span>
              </motion.div>
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-8 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">Atendimento Digital</span>
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 right-4 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">ChatBots</span>
              </motion.div>
              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-12 glass-card px-4 py-2"
              >
                <span className="text-sm font-medium">Agentes Inteligentes</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
