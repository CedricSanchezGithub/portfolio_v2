/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "../index.html", "../index_french.html", "../index_english.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-texture":
          "linear-gradient(to right, #0f172a, #030712), url('../img/black-orchid.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
