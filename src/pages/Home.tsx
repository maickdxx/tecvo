import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import heroImg from "@/assets/work-1.jpg";
import diffImg1 from "@/assets/work-4.jpg";
import diffImg2 from "@/assets/work-5.jpg";
import whyImg from "@/assets/work-2.jpg";
import { motion } from "framer-motion";
import {
  Wrench, Thermometer, Wind, Sparkles, Fuel, ShieldCheck,
  Clock, Settings, MapPin, Award, Phone,
  Users, DollarSign, Heart, CalendarCheck, FileText, Zap,
  CheckCircle2, ArrowRight
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
  { icon: Wrench, title: "Instalação", desc: "Instalação profissional de splits, multi-splits e sistemas centrais com dimensionamento técnico." },
  { icon: Settings, title: "Manutenção", desc: "Preventiva e corretiva para máximo desempenho e vida útil prolongada do equipamento." },
  { icon: Fuel, title: "Recarga de Gás", desc: "Recarga com detecção de vazamentos e testes completos de pressão." },
  { icon: Wind, title: "Limpeza", desc: "Limpeza completa das unidades interna e externa, devolvendo eficiência." },
  { icon: Sparkles, title: "Higienização", desc: "Higienização profunda com produtos bactericidas contra fungos e bactérias." },
  { icon: ShieldCheck, title: "PMOC", desc: "Plano de Manutenção conforme normas vigentes. Obrigatório para ambientes comerciais." },
];

const diferenciais = [
  { icon: Users, title: "Atendimento Consultivo", desc: "Analisamos e indicamos a melhor solução." },
  { icon: Clock, title: "Agilidade", desc: "Rapidez e cumprimento rigoroso dos prazos." },
  { icon: Award, title: "Equipe Especializada", desc: "Profissionais capacitados e experientes." },
  { icon: ShieldCheck, title: "Qualidade e Garantia", desc: "Materiais de primeira e garantia total." },
  { icon: FileText, title: "Conformidade", desc: "Todas as normas técnicas e PMOC." },
  { icon: DollarSign, title: "Transparência", desc: "Orçamentos claros, sem surpresas." },
  { icon: Heart, title: "Saúde e Ar Limpo", desc: "Priorizamos qualidade do ar e bem-estar." },
  { icon: CalendarCheck, title: "Atendimento Amplo", desc: "Residências, empresas e condomínios." },
];

const whyItems = [
  "Equipe técnica com responsável técnico registrado",
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
    <div className="min-h-screen bg-[#091A34]">
      <Header />
      <WhatsAppFloat />

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-16 sm:pt-20 min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#091A34]/90 via-[#091A34]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091A34]/80 via-transparent to-transparent" />
        </div>
        {/* Decorative glow */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4FC3F7]/[0.05] rounded-full blur-[120px]" />

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-36">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs sm:text-sm text-white/70 mb-8">
              <Wind size={14} className="text-[#4FC3F7]" />
              Especialistas em Climatização no DF
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.05] mb-6 tracking-tight">
              Climathol<br />
              <span className="text-gradient">Ar Condicionado</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-base sm:text-lg text-white/50 max-w-lg mb-10 leading-relaxed">
              Conforto térmico, eficiência e qualidade do ar para sua casa ou empresa.
              Instalação, manutenção e PMOC com equipe técnica em Brasília e todo o DF.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base glow-green hover:brightness-110 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={18} />
                Solicitar Orçamento
              </motion.a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold text-sm sm:text-base hover:bg-white/[0.08] transition-all duration-200"
              >
                Ver Serviços
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="flex flex-wrap gap-2">
              {serviceTags.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-3.5 py-2 text-xs text-white/50">
                  <Icon size={12} className="text-[#4FC3F7]" />
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ SERVIÇOS ══════════ */}
      <section id="servicos" className="relative bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14 sm:mb-18">
              <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">NOSSOS SERVIÇOS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091A34] tracking-tight">
                Soluções Completas em <span className="text-[#4FC3F7]">Climatização</span>
              </h2>
              <p className="text-[#091A34]/40 mt-4 max-w-lg mx-auto text-sm sm:text-base">
                Do diagnóstico à execução, serviços técnicos com qualidade e garantia.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((s) => (
              <StaggerItem key={s.title}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-[#4FC3F7]/[0.05] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#091A34] flex items-center justify-center mb-5 group-hover:bg-[#4FC3F7] transition-colors duration-300">
                    <s.icon size={22} className="text-[#4FC3F7] group-hover:text-[#091A34] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#091A34] mb-2">{s.title}</h3>
                  <p className="text-[#091A34]/40 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#4FC3F7] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:brightness-110 transition-all w-fit"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Pedir Orçamento
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ DIFERENCIAIS ══════════ */}
      <section className="bg-[#091A34] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14 sm:mb-18">
              <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">POR QUE SOMOS DIFERENTES</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Nossos Diferenciais</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden relative group">
                <img src={diffImg1} alt="Técnico Climathol" className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091A34]/70 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="rounded-2xl overflow-hidden relative group">
                <img src={diffImg2} alt="Limpeza profissional" className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091A34]/70 to-transparent" />
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {diferenciais.map((d) => (
              <StaggerItem key={d.title}>
                <div className="glass rounded-xl p-5 sm:p-6 hover:border-[#4FC3F7]/20 transition-all duration-300 h-full">
                  <d.icon size={20} className="text-[#4FC3F7] mb-3" />
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-white/35 text-xs leading-relaxed">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ POR QUE ══════════ */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeIn>
                <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">POR QUE A CLIMATHOL</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                  Mais que manutenção, entregamos{" "}
                  <span className="text-gradient">conforto, segurança e desempenho</span>{" "}
                  para o seu ambiente.
                </h2>
                <p className="text-white/40 mb-8 text-sm sm:text-base leading-relaxed">
                  Escolher a Climathol é optar por tranquilidade. Cada serviço é executado com excelência.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-3 mb-10">
                {whyItems.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#25D366] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <FadeIn delay={0.3}>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base glow-green hover:brightness-110 transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <WhatsAppIcon size={18} />
                  Solicitar Orçamento
                </motion.a>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img src={whyImg} alt="Técnico Climathol" className="w-full h-auto object-cover" loading="lazy" />
                </div>
                <div className="flex absolute top-3 right-3 sm:top-6 sm:right-6 rounded-xl px-3 py-2 sm:px-5 sm:py-3 items-center gap-2 sm:gap-3 bg-[#091A34]/90 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#4FC3F7]/20 flex items-center justify-center">
                    <Users size={18} className="text-[#4FC3F7]" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-white block">1000+</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Clientes</span>
                  </div>
                </div>
                <div className="flex absolute bottom-3 left-3 sm:bottom-6 sm:left-6 rounded-xl px-3 py-2 sm:px-5 sm:py-3 items-center gap-2 sm:gap-3 bg-[#091A34]/90 backdrop-blur-md border border-white/10 shadow-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                    <Award size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-white block">+10</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider">Anos</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ ÁREAS ══════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">ÁREAS ATENDIDAS</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091A34] mb-4 tracking-tight">
              Cobertura em <span className="text-[#4FC3F7]">Todo o DF</span>
            </h2>
            <p className="text-[#091A34]/40 max-w-md mx-auto mb-10 text-sm sm:text-base">
              Atendemos com rapidez e eficiência em todas as regiões.
            </p>
          </FadeIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-2.5">
            {areas.map((area) => (
              <StaggerItem key={area}>
                <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2.5 text-[#091A34] font-medium text-xs sm:text-sm hover:border-[#4FC3F7] hover:text-[#4FC3F7] transition-colors cursor-default">
                  <MapPin size={13} className="text-[#4FC3F7]" />
                  {area}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ AUTORIDADE ══════════ */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-2xl bg-[#4FC3F7]/10 flex items-center justify-center mx-auto mb-6">
              <Award size={28} className="text-[#4FC3F7]" />
            </div>
            <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">AUTORIDADE TÉCNICA</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 tracking-tight">
              Responsabilidade Técnica
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-5 sm:gap-8 mb-6 max-w-sm sm:max-w-none mx-auto">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#4FC3F7]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-[#4FC3F7]" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block">Responsável Técnico</span>
                  <p className="font-bold text-white text-sm">Cristóvão Borges</p>
                </div>
              </div>
              <div className="h-px w-full bg-white/10 sm:h-10 sm:w-px" />
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 uppercase tracking-wider block">Registro</span>
                  <p className="font-bold text-white text-sm">CFT Ativo</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
              Operamos com responsável técnico registrado, garantindo segurança e conformidade com normas para empresas e condomínios.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative bg-[#091A34] py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4FC3F7]/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4FC3F7]/[0.04] rounded-full blur-[150px]" />
        
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-white/60 mb-8">
              <Zap size={13} className="text-[#4FC3F7]" />
              Atendimento Rápido
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
              Precisa de Ar-Condicionado?<br />
              <span className="text-gradient">Fale Conosco Agora!</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-10 max-w-md mx-auto">
              Solicite seu orçamento sem compromisso. Respondemos rapidamente pelo WhatsApp.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base glow-green hover:brightness-110 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={20} />
                Chamar no WhatsApp
              </motion.a>
              <a
                href="tel:+556193021232"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl glass text-white font-bold text-base hover:bg-white/[0.08] transition-all duration-200"
              >
                <Phone size={18} />
                (61) 99417-5078
              </a>
            </div>
          </FadeIn>
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
