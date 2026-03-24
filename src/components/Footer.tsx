import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#060F1F] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Climathol</h3>
            <p className="text-sm leading-relaxed">
              Especialistas em climatização no Distrito Federal. Instalação, manutenção, PMOC e soluções completas em ar condicionado.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/pmoc" className="hover:text-white transition-colors">PMOC</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#4FC3F7]" />
                <a href="tel:+5561993676477" className="hover:text-white transition-colors">(61) 99367-6477</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#4FC3F7]" />
                <span>contato@climathol.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#4FC3F7] mt-0.5" />
                <span>Brasília - DF e região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Climathol - Ar Condicionado. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
