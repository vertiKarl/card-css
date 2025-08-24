export const CardFinishes = {
  normal: "normal",
  foil: "foil",
  royal: "royal",
} as const;

export type CardFinish = keyof typeof CardFinishes;
