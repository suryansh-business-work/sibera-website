export const styleConfig = {
  colors: {
    primary: "blue-600",
    primaryHover: "blue-700",
    secondary: "gray-900",
    secondaryHover: "gray-800",
    accent: "blue-500",
    text: {
      primary: "gray-900",
      secondary: "gray-600",
      light: "gray-500",
      white: "white",
    },
    background: {
      page: "white",
      sectionLight: "gray-50",
      sectionDark: "gray-900",
      card: "white",
    },
    border: "gray-100",
  },
  typography: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-xl font-bold",
    body: "text-base leading-relaxed",
    bodyLarge: "text-lg md:text-xl leading-relaxed",
  },
  buttons: {
    primary:
      "inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 border border-transparent rounded-xl hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5",
    secondary:
      "inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm hover:shadow-md",
    text: "inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors",
  },
  cards: {
    default:
      "bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300",
    feature: "p-8 rounded-2xl bg-gray-50 border border-gray-100",
  },
  animations: {
    fadeInUp: "animate-fade-in-up",
    fadeInRight: "animate-fade-in-right",
    hoverScale: "transform hover:scale-105 transition-transform duration-300",
  },
};
