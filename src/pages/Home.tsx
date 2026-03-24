import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/hero-home.jpg";
import { Wrench, Thermometer, Wind, Sparkles, Fuel, ShieldCheck, Clock, Star, ChevronRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561993676477?text=Olá! Gostaria de solicitar um orçamento.";

const services = [
  { icon: Wrench, label: "Instalação" },
  { icon: Thermometer, label: "Manutenção" },
  { icon: Wind, label: "Limpeza" },
  { icon: Sparkles, label: "Higienização" },
  { icon: Fuel, label: "Recarga de Gás" },
  { icon: ShieldCheck, label: "PMOC" },
];

const solutions = [
  {
    title: "Instalação de Ar Condicionado",
    desc: "Instalação profissional de equipamentos split, multi-split, cassete e dutado para residências e empresas.",
  },
  {
    title: "Manutenção Preventiva",
    desc: "Manutenção programada para garantir eficiência, economia de energia e vida útil do seu equipamento.",
  },
  {
    title: "Higienização Completa",
    desc: "Limpeza profunda com produtos específicos, eliminando fungos, bactérias e mau cheiro.",
  },
  {
    title: "PMOC Empresarial",
    desc: "Plano de Manutenção, Operação e Controle conforme Lei 13.589/2018 para ambientes corporativos.",
  },
  {
    title: "Recarga de Gás",
    desc: "Recarga de gás refrigerante com detecção de vazamentos e teste de pressão no sistema.",
  },
  {
    title: "Projetos Corporativos",
    desc: "Soluções sob medida para empresas, clínicas, escritórios e grandes ambientes climatizados.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060F1F]">
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091A34]/95 via-[#091A34]/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/80 mb-8">
            <Wind size={16} />
            Especialistas em Climatização no DF
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Climathol<br />
            <span className="text-[#4FC3F7]">Ar Condicionado</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            Conforto térmico, eficiência e qualidade do ar para sua casa ou empresa.
            Instalação, manutenção e PMOC com equipe técnica especializada em Brasília e todo o Distrito Federal.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Service Tags */}
      <section className="bg-[#0A1628] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/80">
                <Icon size={16} className="text-[#4FC3F7]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="servicos" className="bg-[#091A34] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Nossos Serviços</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Soluções Completas em{" "}
              <span className="text-[#4FC3F7]">Climatização</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#4FC3F7]/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4FC3F7] text-white font-semibold text-sm hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
                >
                  <WhatsAppIcon size={16} />
                  Solicitar
                  <ChevronRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#060F1F] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Por que a Climathol</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Diferenciais que fazem a{" "}
              <span className="text-[#4FC3F7]">diferença</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Profissionais Qualificados", desc: "Equipe técnica treinada e certificada para todos os tipos de serviço." },
              { icon: Clock, title: "Agilidade no Atendimento", desc: "Resposta rápida e atendimento eficiente em todo o Distrito Federal." },
              { icon: Star, title: "Qualidade Garantida", desc: "Compromisso com excelência em cada serviço realizado." },
              { icon: Wrench, title: "Suporte Completo", desc: "Acompanhamento técnico do início ao fim, com garantia e suporte." },
            ].map((d) => (
              <div key={d.title} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center mx-auto mb-5">
                  <d.icon size={24} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{d.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#091A34] to-[#0D2447] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Precisa de um serviço em <span className="text-[#4FC3F7]">ar condicionado</span>?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Fale com nossa equipe pelo WhatsApp e receba um orçamento rápido e sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
          >
            <WhatsAppIcon size={24} />
            Falar com Especialista
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
