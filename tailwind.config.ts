import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg: "oklch(0.129 0.042 264.695)",
        text: "oklch(0.823 0.12 346.018)",
        textAccent: "oklch(0.718 0.202 349.761)",
        bg2: "oklch(0.208 0.042 265.755)",
        // light: "#ECE2D1",
        // lightAccent: "#F5EFE4",
        // dark: "#2d2d2d",
      },
    },
  },

  plugins: [],
};
export default config;
