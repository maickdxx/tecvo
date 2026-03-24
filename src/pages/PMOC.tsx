import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Building2, Stethoscope, GraduationCap, Store, AlertTriangle, ClipboardCheck, Search, Wrench, HeadphonesIcon, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556193021232?text=Olá! Gostaria de informações sobre PMOC.";

export default function PMOC() {
  return (
    <div className="min-h-screen bg-[#091A34]">
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="pt-16 sm:pt-20 bg-gradient-to-b from-[#0A1628] to-[#091A34] min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#4FC3F7]/[0.04] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-[#4FC3F7]/10 border border-[#4FC3F7]/20 rounded-full px-4 py-1.5 text-xs text-[#4FC3F7] font-semibold mb-6">
              <ShieldCheck size={14} />
              CONFORMIDADE TÉCNICA E LEGAL
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 max-w-3xl tracking-tight">
              PMOC para Empresas,{" "}
              <span className="text-gradient">Clínicas e Ambientes Corporativos</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base text-white/50 max-w-xl mb-8 leading-relaxed">
              Regularize seu ambiente climatizado com um plano profissional. Conformidade, manutenção preventiva e segurança para sua operação.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm glow-green hover:brightness-110 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={16} />
                Falar com Especialista
              </motion.a>
              <a
                href="tel:+556193021232"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-semibold text-sm hover:bg-white/[0.08] transition-all duration-200"
              >
                (61) 99417-5078
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* O que é PMOC */}
      <section className="bg-[#091A34] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">Entenda o PMOC</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                O que é o <span className="text-gradient">PMOC</span>?
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 sm:p-8 space-y-3 text-white/50 text-sm sm:text-[15px] leading-relaxed">
              <p>O <strong className="text-white">PMOC (Plano de Manutenção, Operação e Controle)</strong> é um documento técnico obrigatório pela <strong className="text-white">Lei Federal nº 13.589/2018</strong> e <strong className="text-white">Portaria 3.523/98</strong>.</p>
              <p>Ele estabelece procedimentos de manutenção preventiva dos sistemas de climatização, garantindo a qualidade do ar interno.</p>
              <p>É obrigatório para ambientes de uso público e coletivo com ar condicionado — empresas, clínicas, escolas, comércios e condomínios.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Por que precisa */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.2em] mb-3">Importância</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Por que sua empresa <span className="text-gradient">precisa</span>?
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: AlertTriangle, title: "Evitar multas", desc: "Ausência do PMOC gera penalidades da Vigilância Sanitária." },
              { icon: ShieldCheck, title: "Proteger a saúde", desc: "Ar de má qualidade causa problemas respiratórios." },
              { icon: FileCheck, title: "Cumprir a lei", desc: "Lei 13.589/2018 exige PMOC para ambientes coletivos." },
              { icon: Wrench, title: "Prolongar vida útil", desc: "Manutenção regular previne quebras e aumenta eficiência." },
              { icon: Building2, title: "Ambiente profissional", desc: "Demonstre responsabilidade com colaboradores." },
              { icon: ClipboardCheck, title: "Documentação", desc: "Registros organizados para auditorias e vistorias." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass rounded-xl p-5 sm:p-6 hover:border-[#4FC3F7]/20 transition-all duration-300 h-full">
                  <item.icon size={20} className="text-[#4FC3F7] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Quem precisa */}
      <section className="bg-[#091A34] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Quem precisa de <span className="text-gradient">PMOC</span>?
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {[
              { icon: Building2, label: "Empresas" },
              { icon: Stethoscope, label: "Clínicas" },
              { icon: Store, label: "Comércios" },
              { icon: GraduationCap, label: "Escolas" },
              { icon: Building2, label: "Escritórios" },
              { icon: Building2, label: "Condomínios" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="glass rounded-xl p-4 text-center hover:border-[#4FC3F7]/20 transition-all duration-300">
                  <item.icon size={22} className="text-[#4FC3F7] mx-auto mb-2" />
                  <span className="text-white text-xs font-semibold">{item.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Como <span className="text-gradient">funciona</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="space-y-3">
            {[
              { step: "01", title: "Análise do Ambiente", desc: "Avaliamos o espaço e o sistema de climatização." },
              { step: "02", title: "Levantamento", desc: "Identificamos modelos, capacidades e condições." },
              { step: "03", title: "Elaboração do PMOC", desc: "Criamos o plano técnico com cronogramas." },
              { step: "04", title: "Orientação Técnica", desc: "Explicamos rotinas e organizamos documentação." },
              { step: "05", title: "Acompanhamento", desc: "Manutenções preventivas e atualização de registros." },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-4 glass rounded-xl p-5 hover:border-[#4FC3F7]/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#4FC3F7]/10 flex items-center justify-center">
                    <span className="text-[#4FC3F7] font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#091A34] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Nossos <span className="text-gradient">Diferenciais</span>
              </h2>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Building2, title: "Foco Empresarial", desc: "Ambientes corporativos." },
              { icon: HeadphonesIcon, title: "Suporte", desc: "Acompanhamento contínuo." },
              { icon: Search, title: "Documentação", desc: "Organizada para auditorias." },
              { icon: Clock, title: "Agilidade", desc: "Resposta rápida no DF." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center glass rounded-xl p-5 h-full">
                  <item.icon size={20} className="text-[#4FC3F7] mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#091A34] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4FC3F7]/[0.02] to-transparent" />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight">
              Regularize seu PMOC com <span className="text-gradient">apoio técnico</span>
            </h2>
            <p className="text-white/40 text-sm sm:text-base mb-8">
              Solicite uma análise e adeque seu ambiente às exigências legais.
            </p>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base glow-green hover:brightness-110 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <WhatsAppIcon />
              Falar com Especialista
            </motion.a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
