/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#0070f3",
        accent: "#0070f3",
        neutral: "#fff",
        "base-100": "#1a202c",
        info: "#0ea5e9",
        success: "#38b2ac",
        warning: "#fbbf24",
        error: "#e3342f",
        "custom-brown": "#79523b",
        cream: "#fff8e1",
        hoveryellow: "#ff9900",
        buttonyellow: "#fcae36",
        green: "#00FF00",
      },
      boxShadow: {
        "3xl": "35px 35px 60px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
