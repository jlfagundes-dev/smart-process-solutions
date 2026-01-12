import { Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display text-lg font-bold text-primary-foreground">C</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold">Cetti Agentics</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Automação e IA para aumentar sua produtividade. Soluções em integração, 
              automação e agentes inteligentes.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">
              Simplificamos a tecnologia pra você crescer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nossas Soluções
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contato@cettiagentics.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  contato@cettiagentics.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5511999999999" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  +55 11 99999-9999
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/cettiagentics" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Cetti Agentics. Todos os direitos reservados.</p>
          <p>Feito com ❤️ por José Luiz</p>
        </div>
      </div>
    </footer>
  );
};
