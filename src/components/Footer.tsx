import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#040B18] text-white/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-5 tracking-tight">Climathol</h3>
            <p className="text-sm leading-relaxed">
              Especialistas em climatização no Distrito Federal. Instalação, manutenção, PMOC e soluções completas em ar condicionado.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">Navegação</h4>
            <ul className="space-y-3.5 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
              <li><Link to="/pmoc" className="hover:text-white transition-colors">PMOC</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5">Contato</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#4FC3F7]" />
                <a href="tel:+5561993676477" className="hover:text-white transition-colors">(61) 99367-6477</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#4FC3F7]" />
                <span>contato@climathol.com.br</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#4FC3F7] mt-0.5" />
                <span>Brasília - DF e região</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center text-xs text-white/30">
          © {new Date().getFullYear()} Climathol - Ar Condicionado. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
