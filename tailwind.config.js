const forms = require("@tailwindcss/forms");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#232222', // Add custom dark brown color
      },
    },
  },
  plugins: [forms],
};
