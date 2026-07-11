/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Swiss palette — see DESIGN.md. Use tokens, never raw hex in components.
      colors: {
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#0D0D0D",
          70: "#4A4A4A",
          40: "#8A8A8A",
        },
        line: "#E4E4E4",
        subtle: "#F4F4F3",
        accent: "#E4002B",
      },
      fontFamily: {
        // One grotesque family for everything. No serif.
        sans: ["Inter", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1600px",
      },
    },
  },
  plugins: [],
};
