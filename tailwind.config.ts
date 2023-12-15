import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sidebarIconHide: "651px",
      xsm: {  max: "450px" },
      msm: {  max: "550px" },
      sm: {  max: "650px" },
      mds: {  max: "800px" },
      md: {  max: "950px" },
      lg: {  max: "1050px" },
      xlg: {  max: "" },
      xxlg: {  max: "" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    lineHeight: {
      10: "2rem",
      12: "2.5rem",
      14: "3rem",
      18: "3.5rem",
      20: "4rem",
    },
  },
  plugins: [],
};
export default config
