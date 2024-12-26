module.exports = {
  content: ["./index.html", "./input.css"],
  theme: {
    extend: {
      fontFamily : {
        gilroyregular: ["Gilroy-Regular","sans-serif"],
        gilroymedium: ["Gilroy-Medium","sans-serif"],
        gilroylight: ["Gilroy-Light","sans-serif"],
        gilroyheavy: ["Gilroy-Heavy","sans-serif"],
        gilroybold: ["Gilroy-Bold","sans-serif"],
      },
      backgroundImage: {
        'nav-background': "url('./img/background-1441.png')",
        'mat-background-1': "url('./img/testimonials-image1.png')",
        'mat-background-2': "url('./img/testimonials-image2.png')",
        'mat-background-3': "url('./img/testimonials-image3.png')",
      }
    },
  },
  plugins: [],
};
