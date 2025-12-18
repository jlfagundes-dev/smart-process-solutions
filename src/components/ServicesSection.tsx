import { motion } from "framer-motion";
import { Bot, Zap, Link, Brain } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas, melhore fluxos internos e reduza custos operacionais.",
  },
  {
    icon: Link,
    title: "Integrações Avançadas",
    description: "Conecte CRMs, ERPs, WhatsApp API, Google Workspace e muito mais.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    description: "IA que entende, conversa, executa ações e integra sistemas automaticamente.",
  },
  {
    icon: Brain,
    title: "Consultoria em IA",
    description: "Estratégias práticas para empresas que querem escalar com inteligência artificial.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Nossas Soluções
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            O que{" "}
            <span className="text-gradient">Fazemos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Unimos automação, integração e inteligência artificial para criar soluções que realmente resolvem problemas.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass-card hover-lift p-8"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display mb-3 text-xl font-semibold">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
