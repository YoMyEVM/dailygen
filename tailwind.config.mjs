import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#232222', // Custom color
      },
    },
  },
  plugins: [forms],
};
