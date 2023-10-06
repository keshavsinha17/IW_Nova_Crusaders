/** @type {import('tailwindcss').Config} */
module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      // ...
    ]
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0EC54E",
        "secondary-color": "#16113A",
        "accent": "#e9e7f9",

        
      },
    },
  },
  plugins: [],
}

