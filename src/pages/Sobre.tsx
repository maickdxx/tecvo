import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import whyImg from "@/assets/work-2.jpg";
import { ShieldCheck, Users, Award, Target, Clock, Wrench } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/556193021232?text=Olá! Gostaria de saber mais sobre a Climathol.";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-[#060F1F]">
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="pt-16 sm:pt-20 bg-gradient-to-b from-[#091A34] to-[#0D2447]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
          <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] border border-[#4FC3F7]/30 rounded-full px-4 py-1.5 mb-6">
            CONHEÇA A CLIMATHOL
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Sobre a <span className="text-[#4FC3F7]">Climathol</span>
          </h1>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Somos especialistas em climatização no Distrito Federal. Nossa missão é entregar conforto térmico, qualidade do ar e eficiência energética.
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="bg-[#060F1F] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 tracking-tight">Quem Somos</h2>
              <p className="text-white/60 leading-relaxed mb-4 text-sm sm:text-[15px]">
                A <strong className="text-white">Climathol - Ar Condicionado</strong> atua no Distrito Federal com foco em soluções completas de climatização para residências, empresas, clínicas e ambientes comerciais.
              </p>
              <p className="text-white/60 leading-relaxed mb-4 text-sm sm:text-[15px]">
                Contamos com uma equipe técnica qualificada e comprometida com a qualidade em cada etapa do serviço.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-[15px]">
                Nosso objetivo é oferecer tranquilidade e conforto, garantindo que seus sistemas de climatização funcionem com máxima eficiência e segurança.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={whyImg} alt="Técnico Climathol" className="w-full h-auto object-cover" loading="lazy" width={1280} height={960} />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-[#091A34] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#4FC3F7] text-xs font-bold uppercase tracking-[0.15em] mb-3">Nossos Valores</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              O que nos <span className="text-[#4FC3F7]">move</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { icon: Target, title: "Missão", desc: "Entregar soluções em climatização com qualidade, eficiência e responsabilidade técnica." },
              { icon: Award, title: "Visão", desc: "Ser referência em climatização no DF, reconhecida pela excelência e confiança." },
              { icon: ShieldCheck, title: "Compromisso", desc: "Trabalhar com transparência, integridade e respeito em cada atendimento." },
              { icon: Users, title: "Equipe", desc: "Profissionais treinados, capacitados e comprometidos com a satisfação do cliente." },
              { icon: Clock, title: "Agilidade", desc: "Atendimento rápido, com respeito ao tempo e às necessidades do cliente." },
              { icon: Wrench, title: "Qualidade", desc: "Equipamentos e técnicas de alto padrão em todos os serviços." },
            ].map((v) => (
              <div key={v.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl p-6 sm:p-7 hover:border-[#4FC3F7]/30 transition-all duration-300">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#4FC3F7]/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[#4FC3F7]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#091A34] to-[#0D2447] py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight">
            Conheça nosso trabalho de <span className="text-[#4FC3F7]">perto</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8">
            Entre em contato e veja como podemos ajudar com a climatização do seu ambiente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-xl shadow-[#25D366]/25 hover:scale-[1.03] hover:brightness-110 transition-all duration-200"
          >
            <WhatsAppIcon />
            Falar com a Climathol
          </a>
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
