import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import heroImg from "@/assets/work-1.jpg";
import diffImg1 from "@/assets/work-4.jpg";
import diffImg2 from "@/assets/work-5.jpg";
import whyImg from "@/assets/work-2.jpg";
import {
  Wrench, Thermometer, Wind, Sparkles, Fuel, ShieldCheck,
  Clock, Settings, MapPin, Award, Phone,
  Users, DollarSign, Heart, CalendarCheck, FileText, Zap,
  CheckCircle2
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556193021232?text=Olá! Gostaria de solicitar um orçamento.";

const serviceTags = [
  { icon: Wrench, label: "Instalação" },
  { icon: Thermometer, label: "Manutenção" },
  { icon: Wind, label: "Limpeza" },
  { icon: Sparkles, label: "Higienização" },
  { icon: Fuel, label: "Recarga de Gás" },
  { icon: ShieldCheck, label: "PMOC" },
];

const solutions = [
  { icon: Wrench, title: "Instalação", desc: "Instalação profissional de splits, multi-splits e sistemas centrais, com dimensionamento técnico e garantia." },
  { icon: Settings, title: "Manutenção", desc: "Manutenção preventiva e corretiva para máximo desempenho e vida útil prolongada do equipamento." },
  { icon: Fuel, title: "Recarga de Gás", desc: "Recarga de gás refrigerante com detecção de vazamentos e testes completos de pressão." },
  { icon: Wind, title: "Limpeza", desc: "Limpeza completa das unidades interna e externa, devolvendo eficiência e ar puro." },
  { icon: Sparkles, title: "Higienização", desc: "Higienização profunda com produtos bactericidas, eliminando fungos, ácaros e bactérias." },
  { icon: ShieldCheck, title: "PMOC", desc: "Plano de Manutenção, Operação e Controle conforme normas vigentes para ambientes comerciais." },
];

const diferenciais = [
  { icon: Users, title: "Atendimento Consultivo", desc: "Analisamos o ambiente e indicamos a melhor solução." },
  { icon: Clock, title: "Agilidade", desc: "Rapidez no atendimento e cumprimento dos prazos." },
  { icon: Award, title: "Equipe Especializada", desc: "Profissionais capacitados e com experiência." },
  { icon: ShieldCheck, title: "Qualidade e Garantia", desc: "Materiais de primeira linha e garantia total." },
  { icon: FileText, title: "Conformidade", desc: "Seguimos todas as normas técnicas e de segurança." },
  { icon: DollarSign, title: "Transparência", desc: "Orçamentos claros e detalhados, sem surpresas." },
  { icon: Heart, title: "Saúde e Ar Limpo", desc: "Priorizamos a qualidade do ar e bem-estar." },
  { icon: CalendarCheck, title: "Atendimento Amplo", desc: "Residências, empresas, escritórios e condomínios." },
];

const whyItems = [
  "Equipe técnica qualificada com responsável técnico registrado",
  "Atendimento personalizado para cada ambiente",
  "Serviços completos: da instalação ao PMOC",
  "Compromisso com prazos e qualidade",
  "Orçamento transparente e sem surpresas",
];

const areas = [
  "Distrito Federal", "Brasília", "Park Sul", "Guará", "Asa Sul",
  "Asa Norte", "Águas Claras", "Noroeste", "Taguatinga",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060F1F]">
      <Header />
      <WhatsAppFloat />

      {/* HERO */}
      <section className="relative pt-20 min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060F1F] via-[#060F1F]/90 to-[#060F1F]/40" />
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
          <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
            <Wind size={14} className="text-[#4FC3F7]" />
            Especialistas em Climatização no DF
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-5 sm:mb-7 tracking-tight">
            Climathol<br />
            <span className="text-[#4FC3F7]">Ar Condicionado</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8 sm:mb-10 leading-relaxed">
            Conforto térmico, eficiência e qualidade do ar para sua casa ou empresa.
            Instalação, manutenção e PMOC com equipe técnica em Brasília e todo o DF.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
            >
              <WhatsAppIcon size={18} />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white/[0.07] border border-white/15 text-white font-semibold text-sm sm:text-base hover:bg-white/[0.12] transition-all duration-200"
            >
              Ver Serviços
            </a>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {serviceTags.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-white/70">
                <Icon size={13} className="text-[#4FC3F7]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">NOSSOS SERVIÇOS</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091A34] tracking-tight">
              Soluções Completas em <span className="text-[#4FC3F7]">Climatização</span>
            </h2>
            <p className="text-[#091A34]/50 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Do diagnóstico à execução, oferecemos serviços técnicos com qualidade, agilidade e garantia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#091A34] flex items-center justify-center mb-5">
                  <s.icon size={22} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-lg font-bold text-[#091A34] mb-2">{s.title}</h3>
                <p className="text-[#091A34]/50 text-sm leading-relaxed mb-5">{s.desc}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4FC3F7] text-white font-semibold text-xs sm:text-sm hover:brightness-110 transition-all duration-200"
                >
                  <WhatsAppIcon size={14} />
                  Pedir Orçamento
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-[#091A34] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">POR QUE SOMOS DIFERENTES</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Nossos Diferenciais</h2>
            <p className="text-white/50 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base">
              Não vendemos apenas serviço — entregamos soluções completas em climatização.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="rounded-2xl overflow-hidden">
              <img src={diffImg1} alt="Técnico Climathol realizando manutenção" className="w-full h-48 sm:h-64 lg:h-72 object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={diffImg2} alt="Limpeza profissional de ar condicionado" className="w-full h-48 sm:h-64 lg:h-72 object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {diferenciais.map((d) => (
              <div key={d.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-[#4FC3F7]/30 transition-all duration-300">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#4FC3F7]/10 flex items-center justify-center mb-3 sm:mb-4">
                  <d.icon size={18} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">{d.title}</h3>
                <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE A CLIMATHOL */}
      <section className="bg-[#F0F4F8] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">POR QUE A CLIMATHOL</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091A34] leading-tight mb-5 sm:mb-6 tracking-tight">
                Mais que manutenção, entregamos{" "}
                <span className="text-[#4FC3F7]">conforto e segurança</span>{" "}
                para o seu ambiente.
              </h2>
              <p className="text-[#091A34]/50 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Escolher a Climathol é optar por tranquilidade. Nossa equipe garante que cada serviço seja executado com excelência.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-[#091A34] font-medium text-sm sm:text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/25 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
              >
                <WhatsAppIcon size={18} />
                Solicitar Orçamento
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={whyImg} alt="Técnico Climathol trabalhando" className="w-full h-auto object-cover" loading="lazy" width={800} height={900} />
              </div>
              <div className="hidden sm:block absolute top-6 right-6 bg-white rounded-xl shadow-lg px-5 py-3 text-center">
                <span className="text-2xl font-extrabold text-[#091A34] block">1000+</span>
                <span className="text-xs text-[#091A34]/50">Clientes atendidos</span>
              </div>
              <div className="hidden sm:block absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3 text-center">
                <span className="text-2xl font-extrabold text-[#091A34] block">+10</span>
                <span className="text-xs text-[#091A34]/50">anos de experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS ATENDIDAS */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">ÁREAS ATENDIDAS</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091A34] mb-4 tracking-tight">
            Cobertura em <span className="text-[#4FC3F7]">Todo o DF</span>
          </h2>
          <p className="text-[#091A34]/50 max-w-lg mx-auto mb-10 text-sm sm:text-base">
            Atendemos com rapidez e eficiência em todas as regiões do Distrito Federal.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-2 border border-gray-200 rounded-full px-4 sm:px-5 py-2.5 text-[#091A34] font-medium text-xs sm:text-sm hover:border-[#4FC3F7]/40 transition-colors">
                <MapPin size={14} className="text-[#4FC3F7]" />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDADE TÉCNICA */}
      <section className="bg-[#F0F4F8] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#091A34] flex items-center justify-center mx-auto mb-6">
            <Award size={30} className="text-[#4FC3F7]" />
          </div>
          <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">AUTORIDADE TÉCNICA</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#091A34] mb-8 tracking-tight">
            Responsabilidade e Conformidade Técnica
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#091A34]/10 flex items-center justify-center">
                <ShieldCheck size={22} className="text-[#091A34]" />
              </div>
              <div className="text-left">
                <span className="text-xs text-[#091A34]/50">Responsável Técnico</span>
                <p className="font-bold text-[#091A34]">Cristóvão Borges</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <CheckCircle2 size={22} className="text-[#25D366]" />
              </div>
              <div className="text-left">
                <span className="text-xs text-[#091A34]/50">Registro Profissional</span>
                <p className="font-bold text-[#091A34]">CFT Ativo</p>
              </div>
            </div>
          </div>
          <p className="text-[#091A34]/50 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            Nossa empresa opera com responsável técnico registrado, garantindo segurança e conformidade com normas.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-gradient-to-b from-[#091A34] to-[#0D2447] py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm text-white/80 mb-6 sm:mb-8">
            <Zap size={14} className="text-[#4FC3F7]" />
            Atendimento Rápido e Eficiente
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-5 sm:mb-6 leading-tight tracking-tight">
            Precisa de Ar-Condicionado?<br />
            <span className="text-[#4FC3F7]">Fale Conosco Agora!</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 sm:mb-10 max-w-lg mx-auto">
            Solicite seu orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-xl shadow-[#25D366]/25 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
            >
              <WhatsAppIcon size={22} />
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+556193021232"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.07] border border-white/15 text-white font-bold text-base hover:bg-white/[0.12] transition-all duration-200"
            >
              <Phone size={20} />
              (61) 93021-232
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
