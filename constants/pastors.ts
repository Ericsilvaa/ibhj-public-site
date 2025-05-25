export interface PastorProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
  delay?: number;
}

export const PASTORES_IBHJ: PastorProfile[] = [
  {
    name: "Pr. Abraão Guimarães de Aquino",
    role: "Pastor Titular",
    image: "/images/pessoas/pastor-abraao.jpg",
    bio: "Liderando nossa igreja com sabedoria e dedicação, o Pastor Abraão tem um coração para o ensino da Palavra e o cuidado pastoral.",
  },
  {
    name: "Pr. Jorge Henrique",
    role: "Pastor Auxiliar",
    image: "/images/pessoas/pastor-jorge.jpg",
    bio: "Coordenador do Ministério de Formação Cristã, faz parte do Ministério de Ética da igreja e atua diretamente com os jovens. Dedica-se especialmente ao ensino das Escrituras e à formação bíblica da igreja. É idealizador do treinamento de vocacionados da igreja.",
    delay: 0.1,
  },
  {
    name: "Pr. Rafael Vasconcelos",
    role: "Pastor Auxiliar",
    image: "/images/pessoas/pastor-rafael.jpg",
    bio: "Atua nos ministérios de Evangelismo, Discipulado e Ministério da Família. É idealizador do treinamento de Aconselhamento Bíblico, tem ênfase especial em missões e acompanha o projeto Espaço Voar da igreja, contribuindo para o crescimento espiritual e o fortalecimento da comunidade.",
    delay: 0.2,
  },
];
