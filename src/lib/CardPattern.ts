export const CardPatterns = {
  none: "none",
  striped: "striped",
  rainbow: "rainbow",
  chromatic: "chromatic",
  negative: "negative",
  sepia: "sepia",
} as const;

export type CardPattern = keyof typeof CardPatterns;
