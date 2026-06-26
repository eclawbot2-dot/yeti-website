import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Glacier Performance palette
        carbon: {
          950: "#05070a", // near-black base
          900: "#0a0e14",
          800: "#11161f",
          700: "#1a212d",
          600: "#26303f",
        },
        glacier: {
          50: "#eafbff",
          100: "#c9f3ff",
          200: "#94e7ff",
          300: "#52d6ff",
          400: "#1cc0f5", // primary ice accent
          500: "#00a4dc",
          600: "#0682b3",
          700: "#0d6890",
          800: "#155575",
          900: "#164862",
        },
        ember: {
          400: "#ff7a3c", // warm performance accent (sparingly)
          500: "#f2530f",
        },
        frost: "#f4f9fc",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(28,192,245,0.25), 0 18px 60px -20px rgba(28,192,245,0.45)",
        card: "0 24px 60px -28px rgba(0,0,0,0.85)",
      },
      backgroundImage: {
        "ice-grid":
          "linear-gradient(to right, rgba(148,231,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,231,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
