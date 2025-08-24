export const CardPatterns = {
  none: "none",
  striped: "striped",
} as const;

export type CardPattern = keyof typeof CardPatterns;
