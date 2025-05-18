import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Music, Book, Globe, Baby, User } from "lucide-react";

interface MinisterioCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

function MinisterioCard({
  title,
  description,
  icon,
  imageUrl,
}: MinisterioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded-full p-2 text-white mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default function Ministerios() {
  const ministerios = [
    // {
    //   title: "Ministério Infantil (Espaço Voar)",
    //   description:
    //     "Dedicado ao ensino bíblico e desenvolvimento espiritual das crianças, com atividades lúdicas e educativas.",
    //   icon: <Baby className="h-5 w-5" />,
    //   imageUrl: "/images/ministerios/espaco-voar.jpg",
    // },
    {
      title: "Embaixadores do Rei",
      description:
        "Programa para meninos de 9 a 17 anos, focado em formação de caráter, liderança e princípios cristãos.",
      icon: <User className="h-5 w-5" />,
      imageUrl: "/images/ministerios/embaixadores-rei.jpg",
    },
    {
      title: "Mensageiras do Rei",
      description:
        "Programa para meninas de 9 a 17 anos, com ênfase em valores cristãos, serviço e desenvolvimento espiritual.",
      icon: <User className="h-5 w-5" />,
      // imageUrl: "/images/ministerios/mensageiras-rei.jpg",
      imageUrl: "/images/banners/logoI-ibhj-com-nome.jpg",
    },
    {
      title: "Grupo de Jovens - Unijovem",
      description:
        "Espaço para jovens crescerem na fé, desenvolverem relacionamentos saudáveis e descobrirem seus dons.",
      icon: <Users className="h-5 w-5" />,
      imageUrl: "/images/banners/logoI-ibhj-com-nome.jpg",
    },
    {
      title: "Ministério de Música",
      description:
        "Ministério dedicado à adoração através da música, com coral e equipe de louvor para os cultos.",
      icon: <Music className="h-5 w-5" />,
      imageUrl: "/images/ministerios/ministerio-de-musica.jpg",
    },
    {
      title: "Ministério da Família",
      description:
        "Apoio e fortalecimento das famílias através de encontros, aconselhamento e estudos bíblicos.",
      icon: <Heart className="h-5 w-5" />,
      imageUrl: "/images/banners/logoI-ibhj-com-nome.jpg",
    },
    // {
    //   title: "Ensino (EBD, Discipulado)",
    //   description:
    //     "Foco no ensino bíblico sistemático através da Escola Bíblica Dominical e programas de discipulado.",
    //   icon: <Book className="h-5 w-5" />,
    //   imageUrl: "/placeholder.svg?height=300&width=500",
    // },
    {
      title: "Evangelismo e Missões",
      description:
        "Alcançando a comunidade local e apoiando missões nacionais e internacionais com o evangelho.",
      icon: <Globe className="h-5 w-5" />,
      imageUrl: "/images/banners/logoI-ibhj-com-nome.jpg",
    },
  ];

  return (
    <div>
      {/* Hero da página */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Ministérios
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça as áreas de atuação da nossa igreja e como você pode se
            envolver
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12 bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-subtitle">Servindo com Propósito</h2>
            <p className="text-gray-700 mb-6">
              Na Igreja Batista de Henrique Jorge, acreditamos que cada membro
              tem dons e talentos que podem ser usados para a glória de Deus e
              edificação da igreja.
            </p>
            <p className="text-gray-700">
              Nossos ministérios são espaços onde você pode servir, crescer e
              impactar vidas. Conheça nossas áreas de atuação e descubra onde
              você pode se encaixar.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Ministérios */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministerios.map((ministerio, index) => (
              <MinisterioCard
                key={index}
                title={ministerio.title}
                description={ministerio.description}
                icon={ministerio.icon}
                imageUrl={ministerio.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-surface">
        <div className="container-custom text-center">
          <h2 className="section-title mb-6">Quer fazer parte?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Deus tem um lugar especial para você servir na obra. Venha conversar
            conosco e descobrir como você pode usar seus dons para o Reino.
          </p>
          <Link href="/contato" className="btn-primary">
            Entre em contato
          </Link>
        </div>
      </section>
    </div>
  );
}
