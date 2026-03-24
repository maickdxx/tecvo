import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogLimpeza from "@/assets/blog-limpeza.jpg";
import blogGelando from "@/assets/blog-gelando.jpg";
import blogPmoc from "@/assets/blog-pmoc.jpg";
import blogInstalacao from "@/assets/blog-instalacao.jpg";

const imageMap: Record<string, string> = {
  "blog-limpeza": blogLimpeza,
  "blog-gelando": blogGelando,
  "blog-pmoc": blogPmoc,
  "blog-instalacao": blogInstalacao,
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero */}
      <section className="pt-16 sm:pt-20 bg-gradient-to-b from-[#0c2240] to-background min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs text-primary font-semibold mb-6">
              <BookOpen size={14} />
              BLOG CLIMATHOL
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-black text-foreground leading-tight mb-4 tracking-tight">
              Dicas e Informações sobre{" "}
              <span className="text-gradient">Ar-Condicionado</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm sm:text-base text-foreground/50 max-w-xl leading-relaxed">
              Conteúdo especializado para você cuidar melhor do seu ar-condicionado no Distrito Federal.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-white py-16 sm:py-24" style={{ color: '#374151' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageMap[post.image]}
                      alt={post.title}
                      className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={1024}
                      height={640}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readTime} de leitura
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-[#091A34] mb-3 leading-snug group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      Ler artigo completo
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
}
