import {
  Heart,
  Eye,
  BookOpen,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  BookIcon,
  ArrowRight,
  CalendarIcon,
  Cross,
  HeartHandshake,
} from "lucide-react";
import { getRecentPosts } from "@/lib/blog-data";
import FadeInSection from "@/components/animation/fade-in-section";
import ParallaxSection from "@/components/parallax/parallax-section";
import Link from "next/link";
import HeroSection from "@/components/hero-section";
import Image from "next/image";
import MissionCard from "@/components/mission-card";
import VideoSection from "@/components/video-section";
import EventCard from "@/components/event-card";
import HomeUpcomingEvents from "@/components/home-upcoming-events";
import TestimonialCard from "@/components/testimonial-card";
import StaggerChildren from "@/components/animation/stagger-children";
import StatCard from "@/components/stat-card";

export default function Home() {
  // Obter posts recentes do blog
  const recentPosts = getRecentPosts(3);

  return (
    <div>
      <HeroSection />

      {/* Boas-vindas e Chamada para Ação */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div>
                <h2 className="section-title mb-4">
                  Bem-vindo à Igreja Batista de Henrique Jorge
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Somos uma comunidade cristã comprometida com o evangelho de
                  Jesus Cristo e com o cuidado de vidas. Há mais de 55 anos,
                  temos sido um farol de esperança no bairro Henrique Jorge e em
                  toda Fortaleza.
                </p>
                <p className="text-gray-700 mb-8">
                  Convidamos você a conhecer nossa igreja, participar de nossos
                  cultos e fazer parte da nossa família. Aqui você encontrará um
                  ambiente acolhedor, onde a Palavra de Deus é pregada com
                  fidelidade e as pessoas são amadas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/programacao"
                    className="btn-primary flex items-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Horários de Culto
                  </Link>
                  <Link
                    href="/quem-somos"
                    className="btn-secondary flex items-center"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Conheça-nos Melhor
                  </Link>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection direction="left" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/igreja/congregacao-culto.jpg"
                  alt="Congregação da Igreja Batista de Henrique Jorge"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <ParallaxSection
        backgroundImage="/images/banners/biblia-background.jpg"
        backgroundAlt="Bíblia aberta"
        overlayColor="#21477a"
        overlayOpacity={0.85}
        height="min-h-[600px]"
        speed={0.4}
      >
        <div className="container-custom py-16">
          <FadeInSection>
            <h2 className="section-title text-center mb-12 text-white">
              Nossa Missão e Visão
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection direction="up" delay={0}>
              <MissionCard
                title="Missão"
                description="Cuidar de vidas em amor, levando a mensagem de Cristo a todas as pessoas e formando discípulos comprometidos com o Reino de Deus."
                icon={<Heart className="h-8 w-8 text-primary" />}
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.1}>
              <MissionCard
                title="Visão"
                description="Ser uma igreja relevante na comunidade, transformando vidas através do evangelho e impactando positivamente a sociedade."
                icon={<Eye className="h-8 w-8 text-primary" />}
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.2}>
              <MissionCard
                title="Valores"
                description="Amor, Fé, Integridade, Unidade, Serviço e Evangelismo são os pilares que sustentam nossa caminhada."
                icon={<BookOpen className="h-8 w-8 text-primary" />}
              />
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Palavra do Pastor */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right" className="order-2 md:order-1">
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-primary mr-4"></div>
                  <h3 className="text-lg font-medium text-primary">
                    Palavra do Pastor
                  </h3>
                </div>
                <h2 className="text-3xl font-bold mb-6 ">
                  Uma Igreja que Cuida de Vidas
                </h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    "Queridos irmãos e amigos, é com alegria que compartilho
                    esta mensagem com vocês. Em um mundo cada vez mais
                    individualista, somos chamados a ser uma comunidade que
                    reflete o amor de Cristo, cuidando uns dos outros e
                    alcançando os que estão distantes."
                  </p>
                  <p className="mb-4">
                    "Na Igreja Batista de Henrique Jorge, acreditamos que cada
                    pessoa é preciosa aos olhos de Deus e merece ser acolhida,
                    amada e discipulada. Nosso compromisso é com a Palavra de
                    Deus e com a Grande Comissão de fazer discípulos."
                  </p>
                  <p className="italic font-medium">
                    "Venha nos visitar e fazer parte desta família. Estamos de
                    braços abertos para recebê-lo!"
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/pessoas/pastor-abraao.jpg"
                      alt="Pastor Abraão Guimarães de Aquino"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">
                      Pr. Abraão Guimarães de Aquino
                    </h4>
                    <p className="text-gray-600">Pastor Titular</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection
              direction="left"
              delay={0.2}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2 "
            >
              <Image
                src="/images/pessoas/pastor-pregando.jpg"
                alt="Pastor pregando"
                fill
                className="object-cover object-[35%_center]"
                priority
              />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Última Mensagem */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <h2 className="section-title mb-4 md:mb-0">Última Mensagem</h2>
              <Link
                href="/midia"
                className="text-primary hover:text-hover flex items-center font-medium"
              >
                Ver todas as mensagens
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            <div className="max-w-4xl mx-auto">
              <VideoSection
                title="Culto da Noite - Domingo 11/05/2025"
                videoId="YqgCtGS6WCw"
                description="Acompanhe nossa última mensagem e seja edificado pela Palavra de Deus. 
                Tema: 'A mudança da família por meio do evangelho' 
                - Pregador: Pr. Jorge Henrique"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Números da Igreja */}
      <ParallaxSection
        backgroundImage="/images/banners/igreja-interior.jpg"
        backgroundAlt="Interior da igreja"
        overlayColor="#21477a"
        overlayOpacity={0.85}
        height="min-h-[400px]"
        speed={0.3}
        direction="down"
      >
        <div className="container-custom py-16">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-white ">
              55 Anos Cuidando de Vidas em Amor
            </h2>
            <p className="text-lg md:text-xl text-center text-white/80 max-w-2xl mx-auto mb-14">
              Uma história marcada por fé, ensino da Palavra, serviço
              comunitário e transformação de vidas.
            </p>
          </FadeInSection>

          <div className=" md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StaggerChildren
              direction="up"
              staggerAmount={0.2}
              className="grid  grid-cols-2 gap-8"
            >
              <StatCard
                icon={CalendarIcon}
                number="55+"
                label="Anos de História"
                description="Desde 1969 proclamando o Evangelho em Fortaleza."
              />
              <StatCard
                icon={Users}
                number="350+"
                label="Membros Ativos"
                description="Famílias servindo, aprendendo e crescendo em Cristo."
              />
              <StatCard
                icon={Cross}
                number="12"
                label="Ministérios"
                description="Do louvor à ação social, com propósito e paixão."
              />
              {/* <StatCard
                icon={HeartHandshake}
                number="1"
                label="Projetos Sociais"
                description="Atendendo necessidades reais com compaixão e presença."
              /> */}
            </StaggerChildren>
          </div>
        </div>
      </ParallaxSection>

      {/* Destaques da Semana e Eventos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeInSection>
            <h2 className="section-title text-center mb-12">
              Destaques e Eventos
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection direction="up" delay={0}>
              <EventCard
                title="Culto de Adoração"
                date="Domingo, 18h30"
                description="Venha adorar a Deus conosco em nosso culto dominical."
                imageUrl="/images/cultos/culto-adoracao.jpg"
                link="/programacao"
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.1}>
              <EventCard
                title="Encontro de Jovens"
                date="Sábado, 19h00"
                description="Um momento especial para os jovens se conectarem e crescerem na fé."
                imageUrl="/images/ministerios/jovens-encontro.jpg"
                link="/ministerios"
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.2}>
              <HomeUpcomingEvents />
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      {/* <ParallaxSection
        backgroundImage="/images/banners/congregacao-worship.jpg"
        backgroundAlt="Congregação em adoração"
        overlayColor="#f8fafc"
        overlayOpacity={0.92}
        height="min-h-[600px]"
        speed={0.25}
      >
        <div className="container-custom py-16">
          <FadeInSection>
            <h2 className="section-title text-center mb-12">Testemunhos</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection direction="up" delay={0}>
              <TestimonialCard
                quote="A IBHJ transformou minha vida. Encontrei aqui não apenas uma igreja, mas uma família que me acolheu e me ajudou a crescer na fé."
                author="Maria Silva"
                role="Membro há 12 anos"
                imageUrl="/images/pessoas/testemunho-1.jpg"
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.1}>
              <TestimonialCard
                quote="Os estudos bíblicos e a comunhão com os irmãos têm sido fundamentais para o meu crescimento espiritual. Sou grato a Deus pela IBHJ."
                author="João Pereira"
                role="Membro há 5 anos"
                imageUrl="/images/pessoas/testemunho-2.jpg"
              />
            </FadeInSection>
            <FadeInSection direction="up" delay={0.2}>
              <TestimonialCard
                quote="Meus filhos amam participar do ministério infantil. É uma bênção ver como eles estão aprendendo sobre Jesus de forma tão divertida e profunda."
                author="Ana Costa"
                role="Membro há 8 anos"
                imageUrl="/images/pessoas/testemunho-3.jpg"
              />
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection> */}

      {/* Blog Recente */}
      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <h2 className="section-title mb-4 md:mb-0">Artigos Recentes</h2>
              <Link
                href="/blog"
                className="text-primary hover:text-hover flex items-center font-medium"
              >
                Ver todos os artigos
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <FadeInSection key={post.slug} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-primary mb-2 text-xl line-clamp-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-hover transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium hover:text-hover transition-colors inline-flex items-center"
                    >
                      Ler mais
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Galeria de Fotos */}
      {/* <section className="py-16 bg-surface">
        <div className="container-custom">
          <FadeInSection>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <h2 className="section-title mb-4 md:mb-0">Nossa Galeria</h2>
              <Link
                href="/galeria"
                className="text-primary hover:text-hover flex items-center font-medium"
              >
                Ver galeria completa
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <FadeInSection key={index} direction="up" delay={index * 0.03}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={`/images/galeria/foto-${index}.jpg`}
                    alt={`Foto da galeria ${index}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Novo Visitante */}
      <ParallaxSection
        backgroundImage="/images/banners/igreja-entrada.jpg"
        backgroundAlt="Entrada da igreja"
        overlayColor="#21477a"
        overlayOpacity={0.8}
        height="min-h-[600px]"
        speed={0.35}
      >
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Primeira Vez na IBHJ?
              </h2>
              <p className="text-xl mb-8 text-white">
                Estamos ansiosos para recebê-lo! Queremos que você se sinta em
                casa desde o primeiro momento.
              </p>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <FadeInSection direction="up" delay={0.1}>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="bg-white text-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">
                    Localização
                  </h3>
                  <p className="text-white/90">
                    Rua Porto Alegre, 997 - Henrique Jorge, Fortaleza/CE
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection direction="up" delay={0.2}>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="bg-white text-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">
                    Horários
                  </h3>
                  <p className="text-white/90">
                    Domingos às 9h (EBD) e 18h30 (Culto)
                  </p>
                </div>
              </FadeInSection>
              <FadeInSection direction="up" delay={0.3}>
                <div className="bg-white/10 p-6 rounded-lg">
                  <div className="bg-white text-primary h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white">
                    O que Esperar
                  </h3>
                  <p className="text-white/90">
                    Adoração, ensino bíblico e comunhão
                  </p>
                </div>
              </FadeInSection>
            </div>
            <FadeInSection direction="up" delay={0.4}>
              <Link
                href="/contato"
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-surface transition-colors"
              >
                Saiba mais sobre sua visita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      {/* Mapa e Localização */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeInSection direction="right">
              <div>
                <h2 className="section-title mb-6">Como nos Encontrar</h2>
                <p className="text-gray-700 mb-6">
                  Estamos localizados no bairro Henrique Jorge, em Fortaleza-CE.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold">Endereço</h3>
                      <p className="text-gray-700">
                        Rua Porto Alegre, 997 - Henrique Jorge, Fortaleza/CE -
                        CEP: 60510-300
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-bold">Horários de Funcionamento</h3>
                      <p className="text-gray-700">
                        Segunda a Sexta: 8h às 17h | Sábado: 8h às 12h |
                        Domingo: 8h às 12h e 17h às 21h
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/contato" className="btn-primary">
                  Entre em contato
                </Link>
              </div>
            </FadeInSection>
            <FadeInSection direction="left" delay={0.2}>
              <div className="aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.221389633705!2d-38.59019672627117!3d-3.761930743341028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bf507396b11%3A0xca2495c0615737df!2sIgreja%20Batista%20-%20Henrique%20Jorge!5e0!3m2!1spt-BR!2sbr!4v1747556033112!5m2!1spt-BR!2sbr"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Localização da Igreja Batista de Henrique Jorge"
                ></iframe>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
