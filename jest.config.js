module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.vue$": "vue-jest", // Handles .vue files
      "^.+\\.js$": "babel-jest", // Handles .js files
    },
    moduleFileExtensions: ["js", "json", "vue"],
    transformIgnorePatterns: [
      "/node_modules/", // Avoid transforming dependencies
    ],
    setupFilesAfterEnv: ["@testing-library/jest-dom"], // Extend Jest with custom matchers
    collectCoverage: true, // Generate coverage reports
    collectCoverageFrom: [
      "src/**/*.{js,vue}", // Collect coverage from all source files
      "!src/main.js", // Exclude entry point
      "!**/node_modules/**",
    ],
  };
  