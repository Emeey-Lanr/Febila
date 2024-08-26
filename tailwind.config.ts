import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        helvetica: ["hel", "sans-serif"],
        gilSans: ["gil", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transwhite: {
        300: "hsla(0, 0%, 100%, 0.50)",
        700: "hsla(0, 0%, 100%, 0.70)",
      },
      transblack: {
        500: "#00000088",
      },
      grey: {
        900: "#171C18",
        800: "#2E3830",
        700: "#455448",
        600: "#5C7061",
        500: "#738C79",
        400: "#8FA394",
        300: "#ABBAAE",
        200: "#C7D1C9",
        100: "#E3E8E4",
        50: "#F1F3F1",
      },
      green: {
        500: "#38E761",
      },
    },
  },
  plugins: [],
};
export default config
