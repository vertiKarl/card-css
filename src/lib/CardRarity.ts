export const CardRarities = {
  common: "common",
  rare: "rare",
  ["super-rare"]: "super-rare",
  ["ultra-rare"]: "ultra-rare",
} as const;

export type CardRarity = keyof typeof CardRarities;
