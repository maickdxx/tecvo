import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/work-1.jpg";
import diffImg1 from "@/assets/work-4.jpg";
import diffImg2 from "@/assets/work-5.jpg";
import whyImg from "@/assets/work-2.jpg";
import {
  Wrench, Thermometer, Wind, Sparkles, Fuel, ShieldCheck,
  Clock, ChevronRight, Settings, MapPin, Award, Phone,
  Users, DollarSign, Heart, CalendarCheck, FileText, Zap,
  CheckCircle2
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561993676477?text=Olá! Gostaria de solicitar um orçamento.";

const serviceTags = [
  { icon: Wrench, label: "Instalação" },
  { icon: Thermometer, label: "Manutenção" },
  { icon: Wind, label: "Limpeza" },
  { icon: Sparkles, label: "Higienização" },
  { icon: Fuel, label: "Recarga de Gás" },
  { icon: ShieldCheck, label: "PMOC" },
];

const solutions = [
  {
    icon: Wrench,
    title: "Instalação",
    desc: "Instalação profissional de splits, multi-splits e sistemas centrais, com dimensionamento técnico e garantia de qualidade.",
  },
  {
    icon: Settings,
    title: "Manutenção",
    desc: "Manutenção preventiva e corretiva para máximo desempenho e vida útil prolongada do seu equipamento.",
  },
  {
    icon: Fuel,
    title: "Recarga de Gás",
    desc: "Recarga de gás refrigerante com detecção de vazamentos e testes completos de pressão.",
  },
  {
    icon: Wind,
    title: "Limpeza",
    desc: "Limpeza completa das unidades interna e externa, devolvendo eficiência e ar puro ao seu ambiente.",
  },
  {
    icon: Sparkles,
    title: "Higienização",
    desc: "Higienização profunda com produtos bactericidas, eliminando fungos, ácaros e bactérias.",
  },
  {
    icon: ShieldCheck,
    title: "PMOC",
    desc: "Plano de Manutenção, Operação e Controle conforme normas vigentes. Obrigatório para ambientes comerciais e condomínios.",
  },
];

const diferenciais = [
  { icon: Users, title: "Atendimento Consultivo", desc: "Analisamos o ambiente e indicamos a melhor solução para cada caso." },
  { icon: Clock, title: "Agilidade e Compromisso", desc: "Rapidez no atendimento e cumprimento rigoroso dos prazos." },
  { icon: Award, title: "Equipe Especializada", desc: "Profissionais capacitados, treinados e com experiência comprovada." },
  { icon: ShieldCheck, title: "Qualidade e Garantia", desc: "Materiais de primeira linha e garantia em todos os serviços." },
  { icon: FileText, title: "Conformidade com Normas", desc: "Seguimos todas as normas técnicas, incluindo PMOC e segurança." },
  { icon: DollarSign, title: "Transparência Total", desc: "Orçamentos claros e detalhados, sem surpresas no valor final." },
  { icon: Heart, title: "Foco em Saúde e Ar Limpo", desc: "Priorizamos a qualidade do ar e o bem-estar dos ocupantes." },
  { icon: CalendarCheck, title: "Atendimento Diversificado", desc: "Residências, empresas, escritórios, lojas e condomínios." },
];

const whyItems = [
  "Equipe técnica qualificada e com responsável técnico registrado",
  "Atendimento personalizado para cada tipo de ambiente",
  "Serviços completos: da instalação ao PMOC",
  "Compromisso com prazos e qualidade",
  "Orçamento transparente e sem surpresas",
];

const areas = [
  "Todo o Distrito Federal", "Brasília", "Park Sul", "Guará", "Asa Sul",
  "Asa Norte", "Águas Claras", "Noroeste", "Taguatinga",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060F1F]">
      <Header />
      <WhatsAppFloat />

      {/* ===== HERO ===== */}
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
          {/* Service Tags inside hero */}
          <div className="flex flex-wrap gap-3 mt-12">
            {serviceTags.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/80">
                <Icon size={16} className="text-[#4FC3F7]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUÇÕES / SERVIÇOS (white bg) ===== */}
      <section id="servicos" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">NOSSOS SERVIÇOS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#091A34]">
              Soluções Completas em{" "}
              <span className="text-[#4FC3F7]">Climatização</span>
            </h2>
            <p className="text-[#091A34]/60 mt-4 max-w-2xl mx-auto">
              Do diagnóstico à execução, oferecemos serviços técnicos com qualidade, agilidade e garantia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#091A34] flex items-center justify-center mb-6">
                  <s.icon size={24} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-lg font-bold text-[#091A34] mb-3">{s.title}</h3>
                <p className="text-[#091A34]/60 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4FC3F7] text-white font-semibold text-sm hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
                >
                  <WhatsAppIcon size={16} />
                  Pedir Orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DIFERENCIAIS (dark bg) ===== */}
      <section className="bg-[#091A34] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">POR QUE SOMOS DIFERENTES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Nossos Diferenciais</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Não vendemos apenas serviço — entregamos soluções completas em climatização.
            </p>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden">
              <img src={diffImg1} alt="Técnico Climathol realizando manutenção" className="w-full h-72 object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={diffImg2} alt="Limpeza profissional de ar condicionado" className="w-full h-72 object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>

          {/* Cards 4x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {diferenciais.map((d) => (
              <div key={d.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center mb-4">
                  <d.icon size={22} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POR QUE A CLIMATHOL (light bg) ===== */}
      <section className="bg-[#F0F4F8] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">POR QUE A CLIMATHOL</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#091A34] leading-tight mb-6">
                Mais que manutenção, entregamos{" "}
                <span className="text-[#4FC3F7]">conforto, segurança e desempenho</span>{" "}
                para o seu ambiente.
              </h2>
              <p className="text-[#091A34]/60 mb-8 leading-relaxed">
                Escolher a Climathol é optar por tranquilidade. Nossa equipe garante que cada serviço seja executado com excelência, do primeiro contato à entrega final.
              </p>
              <ul className="space-y-4 mb-10">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-[#25D366] flex-shrink-0" />
                    <span className="text-[#091A34] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
              >
                <WhatsAppIcon />
                Solicitar Orçamento Agora
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={whyImg} alt="Técnico Climathol trabalhando" className="w-full h-auto object-cover" loading="lazy" width={800} height={900} />
              </div>
              {/* Stats badges */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg px-5 py-3 text-center">
                <span className="text-2xl font-bold text-[#091A34] block">1000+</span>
                <span className="text-sm text-[#091A34]/60">Clientes atendidos</span>
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3 text-center">
                <span className="text-2xl font-bold text-[#091A34] block">+10</span>
                <span className="text-sm text-[#091A34]/60">anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ÁREAS ATENDIDAS (white bg) ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">ÁREAS ATENDIDAS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#091A34] mb-4">
            Cobertura em <span className="text-[#4FC3F7]">Todo o DF</span>
          </h2>
          <p className="text-[#091A34]/60 max-w-xl mx-auto mb-12">
            Atendemos com rapidez e eficiência em todas as regiões do Distrito Federal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 text-[#091A34] font-medium text-sm">
                <MapPin size={16} className="text-[#4FC3F7]" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTORIDADE TÉCNICA (light bg) ===== */}
      <section className="bg-[#F0F4F8] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#091A34] flex items-center justify-center mx-auto mb-6">
            <Award size={36} className="text-[#4FC3F7]" />
          </div>
          <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">AUTORIDADE TÉCNICA</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#091A34] mb-8">
            Responsabilidade e Conformidade Técnica
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#091A34]/10 flex items-center justify-center">
                <ShieldCheck size={24} className="text-[#091A34]" />
              </div>
              <div className="text-left">
                <span className="text-sm text-[#091A34]/60">Responsável Técnico</span>
                <p className="font-bold text-[#091A34]">Cristóvão Borges</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <CheckCircle2 size={24} className="text-[#25D366]" />
              </div>
              <div className="text-left">
                <span className="text-sm text-[#091A34]/60">Registro Profissional</span>
                <p className="font-bold text-[#091A34]">CFT Ativo</p>
              </div>
            </div>
          </div>
          <p className="text-[#091A34]/60 max-w-2xl mx-auto leading-relaxed">
            Nossa empresa opera com responsável técnico registrado, garantindo segurança, conformidade com normas e credibilidade para empresas e condomínios.
          </p>
        </div>
      </section>

      {/* ===== CTA FINAL (dark blue) ===== */}
      <section className="bg-gradient-to-b from-[#091A34] to-[#0D2447] py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/80 mb-8">
            <Zap size={16} />
            Atendimento Rápido e Eficiente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Precisa de Ar-Condicionado?<br />
            <span className="text-[#4FC3F7]">Fale Conosco Agora!</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
            Solicite seu orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp e agendamos o melhor horário para você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
            >
              <WhatsAppIcon size={24} />
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+5561993676477"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all duration-200"
            >
              <Phone size={24} />
              (61) 99367-6477
            </a>
          </div>
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
