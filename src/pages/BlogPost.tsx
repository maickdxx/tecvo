import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn } from "@/components/Animations";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const WHATSAPP_URL = "https://wa.me/556193021232?text=Olá! Gostaria de solicitar um orçamento.";

const imageMap: Record<string, string> = {
  "blog-limpeza": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  "blog-gelando": "https://images.unsplash.com/photo-1631545806609-65e2de939aba?w=800&q=80",
  "blog-pmoc": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  "blog-instalacao": "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
};

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero image */}
      <section className="pt-16 sm:pt-20 relative">
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src={imageMap[post.image]}
            alt={post.title}
            className="w-full h-full object-cover"
            width={1024}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091A34] via-[#091A34]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime} de leitura
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          {/* Back link */}
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Voltar ao Blog
            </Link>
          </FadeIn>

          {/* Inline WhatsApp CTA */}
          <FadeIn delay={0.1}>
            <div className="bg-[#091A34] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-bold text-lg mb-1">Precisa de ajuda profissional?</p>
                <p className="text-white/50 text-sm">Fale com a Climathol pelo WhatsApp e receba atendimento rápido.</p>
              </div>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm whitespace-nowrap shadow-lg hover:brightness-110 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={16} />
                Falar com Técnico
              </motion.a>
            </div>
          </FadeIn>

          {/* Article body */}
          <FadeIn delay={0.15}>
            <article className="prose prose-lg max-w-none prose-headings:text-[#091A34] prose-headings:font-extrabold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-[#091A34] prose-a:text-[#4FC3F7] prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-[#091A34] prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:text-gray-700">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </FadeIn>

          {/* CTA final */}
          <FadeIn delay={0.2}>
            <div className="mt-14 bg-gradient-to-br from-[#091A34] to-[#0c2a4a] rounded-2xl p-8 sm:p-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Precisa de ajuda com seu ar-condicionado?
              </h3>
              <p className="text-white/50 mb-6 max-w-md mx-auto text-sm sm:text-base">
                Fale com a Climathol agora e receba um atendimento consultivo, rápido e transparente.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-xl hover:brightness-110 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={18} />
                Falar com a Climathol
              </motion.a>
            </div>
          </FadeIn>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="mt-16">
                <h3 className="text-xl font-bold text-[#091A34] mb-6">Leia também</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="group block rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <img
                        src={imageMap[p.image]}
                        alt={p.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={1024}
                        height={640}
                      />
                      <div className="p-5">
                        <span className="text-xs text-primary font-semibold">{p.category}</span>
                        <h4 className="text-base font-bold text-[#091A34] mt-1 group-hover:text-primary transition-colors leading-snug">
                          {p.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
