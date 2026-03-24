import type { ComponentPropsWithoutRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FadeIn } from "@/components/Animations";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import blogLimpeza from "@/assets/blog-limpeza.jpg";
import blogGelando from "@/assets/blog-gelando.jpg";
import blogPmoc from "@/assets/blog-pmoc.jpg";
import blogInstalacao from "@/assets/blog-instalacao.jpg";

const WHATSAPP_URL = "https://wa.me/556193021232?text=Olá! Gostaria de solicitar um orçamento.";

const imageMap: Record<string, string> = {
  "blog-limpeza": blogLimpeza,
  "blog-gelando": blogGelando,
  "blog-pmoc": blogPmoc,
  "blog-instalacao": blogInstalacao,
};

const markdownComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-5 text-xl font-extrabold leading-tight text-[#091A34] sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-4 text-lg font-bold leading-tight text-[#091A34] sm:text-xl"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-5 text-base leading-8 text-gray-700 [word-spacing:0.04em]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-5 list-disc space-y-2 pl-5 text-gray-700" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-5 list-decimal space-y-2 pl-5 text-gray-700" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 leading-8 marker:text-primary" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-extrabold text-[#091A34]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="font-semibold text-primary underline-offset-4 hover:underline" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm leading-6" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-gray-200 bg-gray-50 px-4 py-3 font-bold text-[#091A34]"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-gray-100 px-4 py-3 align-top text-gray-700" {...props} />
  ),
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

      <section className="relative pt-16 sm:pt-20">
        <div className="relative h-[300px] overflow-hidden sm:h-[400px]">
          <img
            src={imageMap[post.image]}
            alt={post.title}
            className="h-full w-full object-cover"
            width={1024}
            height={640}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091A34] via-[#091A34]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
            <div className="mx-auto max-w-4xl">
              <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                {post.category}
              </span>
              <h1 className="mb-4 text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
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

      <section className="bg-white py-12 text-gray-800 sm:py-16" style={{ color: "#374151" }}>
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <FadeIn>
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} />
              Voltar ao Blog
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-10 flex flex-col items-center gap-4 rounded-2xl bg-[#091A34] p-6 sm:flex-row sm:p-8">
              <div className="flex-1">
                <p className="mb-1 text-lg font-bold text-white">Precisa de ajuda profissional?</p>
                <p className="text-sm text-white/70">
                  Fale com a Climathol pelo WhatsApp e receba atendimento rápido.
                </p>
              </div>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={16} />
                Falar com Técnico
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <article className="max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {post.content}
              </ReactMarkdown>
            </article>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#091A34] to-[#0c2a4a] p-8 text-center sm:p-10">
              <h3 className="mb-3 text-2xl font-black text-white sm:text-3xl">
                Precisa de ajuda com seu ar-condicionado?
              </h3>
              <p className="mx-auto mb-6 max-w-md text-sm text-white/70 sm:text-base">
                Fale com a Climathol agora e receba um atendimento consultivo, rápido e transparente.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:brightness-110"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <WhatsAppIcon size={18} />
                Falar com a Climathol
              </motion.a>
            </div>
          </FadeIn>

          {otherPosts.length > 0 && (
            <FadeIn delay={0.25}>
              <div className="mt-16">
                <h3 className="mb-6 text-xl font-bold text-[#091A34]">Leia também</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/blog/${p.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg"
                    >
                      <img
                        src={imageMap[p.image]}
                        alt={p.title}
                        className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width={1024}
                        height={640}
                      />
                      <div className="p-5">
                        <span className="text-xs font-semibold text-primary">{p.category}</span>
                        <h4 className="mt-1 text-base font-bold leading-snug text-[#091A34] transition-colors group-hover:text-primary">
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
