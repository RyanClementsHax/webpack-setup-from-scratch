const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { debug: true, useBuiltIns: "usage", corejs: 3 },
      // @babel/preset-react is not needed because typescript takes care of jsx transpilation for us
      // https://www.typescriptlang.org/tsconfig#jsx
    ],
  ],
  plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
};
