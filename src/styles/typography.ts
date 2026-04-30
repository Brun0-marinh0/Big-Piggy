export const typography = {
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 40,
  },

  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  } as const,

  family: {
    regular: "Inter Regular, sans-serif",
    mono: "monospace",
  },
} as const;
