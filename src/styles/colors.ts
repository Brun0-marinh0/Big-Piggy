export const palette = {
  green: {
    400: "#22C26C",
    500: "#1AA85C",
    600: "#13874A",
  },
  gray: {
    0: "#FFFFFF",
    100: "#D1D1D6",
    200: "#AEAEB2",
    400: "#353535",
    900: "#191919",
  },
} as const;

export const colors = {
  primary: palette.green[400],
  background: palette.gray[900],
  surface: palette.gray[400],
  borderColor: palette.gray[400],
  text_title: palette.gray[0],
  text_subtitle: palette.gray[100],
  text_caption: palette.gray[200],
} as const;

export const gradients = {
  hero: {
    colors: ["#22C26C", "#1A5C3A", "#191919"],
    locations: [0, 0.4, 0.8],
    center: { x: 1, y: 0 },
  },
} as const;
