import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cc-teal": "#14B8A6",
        "cc-purple": "#C4B5FD",
        "cc-dark": "#0f172a"
      },
      fontFamily: {
        sans: ["Instrument Sans", "ui-sans-serif", "system-ui"],
        display: ["Fraunces", "ui-serif", "Georgia"]
      }
    }
  },
  plugins: [typography]
};
