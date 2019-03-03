module.exports = {
  //Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-flow",
            "@emotion/babel-preset-css-prop"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
