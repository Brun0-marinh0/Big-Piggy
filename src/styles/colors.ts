export const palette = {
  green: {
    400: "#22C26C",
    500: "#1AA85C",
    600: "#13874A",
    700: "#0C5639",
  },
  blue: {
    400: "#0088FF",
    500: "#0066CC",
    600: "#00459969",
  },
  red: {
    400: "#FF4B4E",
    500: "#CC3A3C",
    600: "#992929",
  },
  orange: {
    400: "#FF711A",
    500: "#CC5714",
    600: "#993D0F",
  },
  gray: {
    0: "#FFFFFF",
    100: "#D1D1D6",
    200: "#AEAEB2",
    400: "#353535",
    800: "#27272a",
    900: "#191919",
  },
} as const;

export const colors = {
  primary: palette.green[400],
  background: palette.gray[900],
  surface: palette.gray[400],
  surface_bright: "#222121",
  borderColor: palette.gray[800],
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
