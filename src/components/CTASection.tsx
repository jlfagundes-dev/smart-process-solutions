import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card mx-auto max-w-4xl p-10 md:p-16 text-center glow-effect"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Pronto para{" "}
            <span className="text-gradient">Transformar</span>
            <br />
            sua Empresa?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Descubra como automação e inteligência artificial podem reduzir custos, 
            aumentar produtividade e acelerar seus resultados.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              <MessageCircle className="h-5 w-5" />
              Fale com um Especialista
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Ver Soluções
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Menos Esforço. Mais Resultado.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
