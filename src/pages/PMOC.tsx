import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ShieldCheck, FileCheck, Building2, Stethoscope, GraduationCap, Store, AlertTriangle, ClipboardCheck, Search, Wrench, HeadphonesIcon, Clock, ChevronRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5561993676477?text=Olá! Gostaria de informações sobre PMOC.";

export default function PMOC() {
  return (
    <div className="min-h-screen bg-[#060F1F]">
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="pt-20 bg-gradient-to-b from-[#091A34] to-[#0D2447] min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="inline-flex items-center gap-2 bg-[#4FC3F7]/15 border border-[#4FC3F7]/30 rounded-full px-4 py-2 text-sm text-[#4FC3F7] font-semibold mb-8">
            <ShieldCheck size={16} />
            CONFORMIDADE TÉCNICA E LEGAL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl">
            PMOC para Empresas,{" "}
            <span className="text-[#4FC3F7]">Clínicas e Ambientes Corporativos</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            Regularize seu ambiente climatizado com um plano profissional. Conformidade, manutenção preventiva e segurança para sua operação — com responsabilidade técnica e foco em resultados.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
            >
              <WhatsAppIcon />
              Falar com Especialista
            </a>
            <a
              href="tel:+5561993676477"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all duration-200"
            >
              (61) 99367-6477
            </a>
          </div>
        </div>
      </section>

      {/* O que é PMOC */}
      <section className="bg-[#060F1F] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Entenda o PMOC</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              O que é o <span className="text-[#4FC3F7]">PMOC</span>?
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12">
            <p className="text-white/70 leading-relaxed mb-4">
              O <strong className="text-white">PMOC (Plano de Manutenção, Operação e Controle)</strong> é um documento técnico obrigatório previsto na <strong className="text-white">Lei Federal nº 13.589/2018</strong> e na <strong className="text-white">Portaria 3.523/98 do Ministério da Saúde</strong>.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Ele estabelece procedimentos e rotinas de manutenção preventiva dos sistemas de climatização, garantindo a qualidade do ar interno e a saúde dos ocupantes do ambiente.
            </p>
            <p className="text-white/70 leading-relaxed">
              É obrigatório para todos os ambientes de uso público e coletivo que possuam sistemas de ar condicionado — como empresas, clínicas, consultórios, escolas, comércios e condomínios comerciais.
            </p>
          </div>
        </div>
      </section>

      {/* Por que sua empresa precisa */}
      <section className="bg-[#091A34] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Importância</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Por que sua empresa <span className="text-[#4FC3F7]">precisa</span> de PMOC?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: "Evitar multas e sanções", desc: "A ausência do PMOC pode gerar penalidades em fiscalizações da Vigilância Sanitária." },
              { icon: ShieldCheck, title: "Proteger a saúde", desc: "Ar de má qualidade pode causar problemas respiratórios, alergias e contaminações." },
              { icon: FileCheck, title: "Cumprir a legislação", desc: "A Lei 13.589/2018 exige o PMOC para ambientes climatizados de uso coletivo." },
              { icon: Wrench, title: "Prolongar vida útil", desc: "Manutenção regular previne quebras, reduz custos e aumenta a eficiência dos equipamentos." },
              { icon: Building2, title: "Ambiente profissional", desc: "Demonstre responsabilidade com colaboradores, clientes e visitantes do seu espaço." },
              { icon: ClipboardCheck, title: "Documentação técnica", desc: "Tenha registros organizados para auditorias, certificações e vistorias." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#4FC3F7]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem precisa */}
      <section className="bg-[#060F1F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Aplicação</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Quem precisa de <span className="text-[#4FC3F7]">PMOC</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Building2, label: "Empresas" },
              { icon: Stethoscope, label: "Clínicas" },
              { icon: Store, label: "Comércios" },
              { icon: GraduationCap, label: "Escolas" },
              { icon: Building2, label: "Escritórios" },
              { icon: Building2, label: "Condomínios" },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#4FC3F7]/30 transition-all duration-300">
                <item.icon size={28} className="text-[#4FC3F7] mx-auto mb-3" />
                <span className="text-white text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-[#091A34] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4FC3F7] text-sm font-semibold uppercase tracking-wider mb-3">Processo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Como <span className="text-[#4FC3F7]">funciona</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Análise do Ambiente", desc: "Avaliamos o espaço, as condições de uso e o tipo de sistema de climatização instalado." },
              { step: "02", title: "Levantamento dos Equipamentos", desc: "Identificamos todos os equipamentos, modelos, capacidades e condições atuais." },
              { step: "03", title: "Elaboração do PMOC", desc: "Criamos o plano técnico completo com cronogramas de manutenção e responsáveis." },
              { step: "04", title: "Orientação Técnica", desc: "Explicamos as rotinas necessárias e organizamos a documentação para conformidade." },
              { step: "05", title: "Manutenção e Acompanhamento", desc: "Realizamos as manutenções preventivas programadas e atualizamos os registros." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#4FC3F7]/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center">
                  <span className="text-[#4FC3F7] font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#060F1F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Nossos <span className="text-[#4FC3F7]">Diferenciais</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Foco Empresarial", desc: "Atendemos exclusivamente ambientes corporativos e institucionais." },
              { icon: HeadphonesIcon, title: "Suporte Técnico", desc: "Acompanhamento contínuo com suporte dedicado." },
              { icon: Search, title: "Organização Documental", desc: "Toda documentação organizada para auditorias e fiscalizações." },
              { icon: Clock, title: "Agilidade", desc: "Resposta rápida e execução eficiente em todo o DF." },
            ].map((item) => (
              <div key={item.title} className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-[#4FC3F7]/15 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={24} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-b from-[#091A34] to-[#0D2447] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Regularize seu PMOC com{" "}
            <span className="text-[#4FC3F7]">apoio técnico especializado</span>
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Solicite uma análise e veja como adequar seu ambiente às exigências legais.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-lg shadow-xl shadow-[#25D366]/30 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
          >
            <WhatsAppIcon />
            Falar com Especialista
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
