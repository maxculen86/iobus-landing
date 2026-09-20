import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "io-tex1": "var(--io-tex1)",
        "io-tex2": "var(--io-tex2)",
      },
      boxShadow: {
        "io-card":
          "0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)",
        "io-step": "0 10px 15px -3px rgba(0,0,0,.08)",
        "io-card-soft":
          "0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.1)",
      },
      colors: {
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
        // Landing design tokens (defined in app/styles/globals.css, light + dark).
        io: {
          bg: "var(--io-bg)",
          surface: "var(--io-surface)",
          surface2: "var(--io-surface2)",
          border: "var(--io-border)",
          ink: "var(--io-ink)",
          ink2: "var(--io-ink2)",
          ink3: "var(--io-ink3)",
          "input-border": "var(--io-input-border)",
          blue: "var(--io-blue)",
          "blue-h": "var(--io-blue-h)",
          accent: "var(--io-accent)",
          "accent-soft": "var(--io-accent-soft)",
          "blue-soft": "var(--io-blue-soft)",
          "blue-soft-border": "var(--io-blue-soft-border)",
          "ink-on-soft": "var(--io-ink-on-soft)",
          green: "var(--io-green)",
          header: "var(--io-header-bg)",
          "logo-from": "var(--io-logo-from)",
        },
        iobusnavy: "#000e2f",
        iobusblue: "#0260fb",
        iobusgray: "#efefef",
        iobusgreen: "#bef3b1",
      },
    },
  },
  plugins: [],
} satisfies Config;
