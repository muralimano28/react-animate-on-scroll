var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ReactAnimateOnScroll.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "react-aos.js",
    library: "react-aos",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
