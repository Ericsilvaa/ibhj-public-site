import Image from "next/image";
import ParallaxSection from "@/components/parallax/parallax-section";
import ParallaxDivider from "@/components/parallax/parallax-divider";
import FadeInSection from "@/components/animation/fade-in-section";
import { PASTORES_IBHJ } from "@/constants/pastors";

export default function QuemSomos() {
  return (
    <div>
      {/* Hero da página */}
      <ParallaxSection
        backgroundImage="/images/banners/igreja-fachada-wide.jpg"
        overlayColor="#21477a"
        overlayOpacity={0.7}
        height="min-h-[400px]"
        speed={0.3}
      >
        <div className="container-custom text-center flex items-center justify-center h-full py-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Quem Somos
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white">
              Conheça a história, missão e valores da Igreja Batista de Henrique
              Jorge
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* História */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInSection direction="right">
              <div>
                <h2 className="section-title">Nossa História</h2>
                <p className="mb-4">
                  A Igreja Batista de Henrique Jorge foi fundada nos anos 1970,
                  com uma visão evangelística clara para alcançar o bairro
                  Henrique Jorge e arredores em Fortaleza.
                </p>
                <p className="mb-4">
                  Ao longo de mais de cinco décadas, nossa igreja tem sido um
                  farol de esperança na comunidade, levando a mensagem do
                  evangelho e transformando vidas através do amor de Cristo.
                </p>
                <p className="mb-4">
                  Em 2025, completamos 55 anos de história, celebrando a
                  fidelidade de Deus e o compromisso de continuar cuidando de
                  vidas em amor, como nossa missão estabelece.
                </p>
                <p>
                  Nossa jornada é marcada por desafios superados, vidas
                  transformadas e um legado de fé que continua a impactar novas
                  gerações.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection direction="left" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/igreja/historia-ibhj.jpg"
                  alt="História da Igreja Batista de Henrique Jorge"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Divider com Paralaxe */}
      <ParallaxDivider
        backgroundImage="/images/banners/congregacao-worship.jpg"
        height="h-64 md:h-80"
        overlayColor="#21477a"
        overlayOpacity={0.7}
        speed={0.4}
      />
      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-surface">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">
            Missão, Visão e Valores
          </h2>

          <div className="max-w-3xl mx-auto">
            <FadeInSection direction="up">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-lg">
                  Cuidar de vidas em amor, levando a mensagem de Cristo a todas
                  as pessoas e formando discípulos comprometidos com o Reino de
                  Deus.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
                <p className="text-lg">
                  Ser uma igreja relevante na comunidade, transformando vidas
                  através do evangelho e impactando positivamente a sociedade.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Valores
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Amor</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Fé</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Integridade</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Unidade</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Serviço</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>Evangelismo</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pastores */}
      <ParallaxSection
        backgroundImage="/images/banners/biblia-background.jpg"
        overlayColor="#ffffff"
        overlayOpacity={0.92}
        height="min-h-[700px]"
        speed={0.25}
      >
        <div className="container-custom py-16">
          <h2 className="section-title text-center mb-12">Nossos Pastores</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {PASTORES_IBHJ.map((pastor, index) => (
              <FadeInSection
                key={pastor.name}
                direction="up"
                delay={pastor.delay ?? index * 0.1}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-80">
                    <Image
                      src={pastor.image}
                      alt={pastor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {pastor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{pastor.role}</p>
                    <p className="text-gray-700">{pastor.bio}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
}
