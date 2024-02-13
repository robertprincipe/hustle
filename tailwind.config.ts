import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      rethink: ["var(--font-rethink)"],
    },
    extend: {
      colors: {
        teal: {
          // '50': '#f9f6fe',
          // '100': '#f1eafd',
          // '200': '#e6d9fb',
          // '300': '#d3baf8',
          // '400': '#b88ef2',
          // '500': '#9d63e9',
          // '600': '#7c33d7',
          // '700': '#7231bf',
          // '800': '#612d9c',
          // '900': '#50257e',
          // '950': '#340f5c',
          '50': '#e9f1ff',
          '100': '#d7e6ff',
          '200': '#b6cfff',
          '300': '#8aafff',
          '400': '#5d7fff',
          '500': '#3850ff',
          '600': '#151eff',
          '700': '#0b11f7',
          '800': '#0d15c6',
          '900': '#151e9d',
          '950': '#0c0f5a',
          // '50': '#fdf2f7',
          // '100': '#fce7f2',
          // '200': '#fccee6',
          // '300': '#faa7d0',
          // '400': '#f670af',
          // '500': '#ee4691',
          // '600': '#dd256e',
          // '700': '#c01654',
          // '800': '#9d1545',
          // '900': '#84173e',
          // '950': '#510620',
          // '50': '#f0f9ff',
          // '100': '#dff2ff',
          // '200': '#b8e8ff',
          // '300': '#79d6ff',
          // '400': '#33c2fd',
          // '500': '#08abef',
          // '600': '#0089cd',
          // '700': '#006da5',
          // '800': '#035c89',
          // '900': '#094d71',
          // '950': '#073755',
          // '50': '#f2ffe3',
          // '100': '#e0ffc2',
          // '200': '#c2ff8b',
          // '300': '#98ff49',
          // '400': '#71ff13',
          // '500': '#50ef00',
          // '600': '#3bc000',
          // '700': '#2d9100',
          // '800': '#267103',
          // '900': '#1e5507',
          // '950': '#0d3600',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config