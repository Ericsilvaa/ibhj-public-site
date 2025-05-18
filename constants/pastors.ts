// constants/pastores.ts

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
    bio: "Com um ministério voltado para o discipulado e evangelismo, o Pastor Jorge Henrique contribui significativamente para o crescimento espiritual da nossa comunidade.",
    delay: 0.1,
  },
  {
    name: "Pr. Rafael Vasconcelos",
    role: "Pastor Auxiliar",
    image: "/images/pessoas/pastor-rafael.jpg",
    bio: "Atua na área de ensino e discipulado, com ênfase na formação bíblica de novos membros e líderes. Também lidera os jovens e o podcast da igreja.",
    delay: 0.2,
  },
];
