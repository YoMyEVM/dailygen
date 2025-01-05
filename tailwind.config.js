export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#232222', // Add custom dark brown color
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
