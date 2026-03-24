import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo-climathol.png";

export function Footer() {
  return (
    <footer className="bg-[#030810] text-white/50 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logoImg} alt="Climathol" className="h-10 w-auto mb-4 opacity-80" />
            <p className="text-sm leading-relaxed max-w-xs">
              Especialistas em climatização no DF. Instalação, manutenção, PMOC e soluções completas.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-4">Navegação</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/pmoc" className="hover:text-white transition-colors">PMOC</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-4">Serviços</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Instalação</li>
              <li>Manutenção</li>
              <li>Higienização</li>
              <li>PMOC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.15em] mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#4FC3F7]" />
                <a href="tel:+5561994175078" className="hover:text-white transition-colors">(61) 99417-5078</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-[#4FC3F7]" />
                <span>contato@climathol.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-[#4FC3F7] mt-0.5" />
                <span>Brasília - DF e região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <span>© {new Date().getFullYear()} Climathol - Ar Condicionado. Todos os direitos reservados.</span>
          <span>Brasília - Distrito Federal</span>
        </div>
      </div>
    </footer>
  );
}
