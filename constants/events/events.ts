// constants/events.ts

export const EVENT_CATEGORIES = {
  REGULAR: "Regular",
  ESPECIAL: "Especial",
} as const;

export const EVENT_LOCATIONS = {
  TEMPLO: "Templo Principal",
  SALA_MUSICA: "Sala de Música",
  SALAO_SOCIAL: "Salão Social",
  SALAS_EBD: "Salas de EBD",
  PRACA: "Praça do Henrique Jorge",
  SITIO_BETEL: "Sítio Betel",
} as const;

export const EVENT_TIMES = {
  EBD: "09h00",
  CULTO_DOM: "18h30",
  CULTO_QUA: "19h30",
  CORAL: "16h00",
  JOVENS: "19h00",
  CULTO_MULHERES: "19h00",
  CONFERENCIA: "19h30",
  EVANGELISMO: "15h00",
  RETIRO: "07h00",
} as const;

export const EVENT_LABELS = {
  EBD: "Escola Bíblica Dominical",
  CULTO_DOM: "Culto de Adoração",
  CULTO_QUA: "Culto de Oração e Estudo",
  CORAL: "Ensaio do Coral",
  JOVENS: "Encontro de Jovens",
  CULTO_MULHERES: "Culto das Mulheres",
  RETIRO_JOVENS: "Retiro de Jovens",
  EVANGELISMO: "Evangelismo na Praça",
  ANIVERSARIO: "Celebração de Aniversário da Igreja",
  CONFERENCIA: "Conferência de Família",
} as const;
