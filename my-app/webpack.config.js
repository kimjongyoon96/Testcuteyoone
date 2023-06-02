const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", //웹팩이 시작되는 입구멍
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), // 웹팩이 나오는 똥구멍,저장위치
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // 어떤 파일을 소화시킬지, 내장
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          "ts-loader",
        ],
      },
    ],
  }, // babel-loader와 ts-loader를 사용하여 TS를 JS로 변환, 즉 이빨
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       template: "./src/index.html",
  //     }), // HTML 파일을 생성하는 소스
  //   ],
};
