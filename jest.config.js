module.exports = {
  testEnvironment: "jsdom", // Use a browser-like environment
  transform: {
    "^.+\\.vue$": "vue-jest", // Transform Vue SFCs
    "^.+\\.js$": "babel-jest", // Transform modern JavaScript
  },
  moduleFileExtensions: ["js", "json", "vue"], // Recognize .js, .json, .vue
  transformIgnorePatterns: [
    "/node_modules/", // Ignore dependencies unless explicitly needed
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Add matchers for DOM testing
  collectCoverage: true, // Enable code coverage
  collectCoverageFrom: [
    "src/**/*.{js,vue}", // Collect coverage for JS and Vue files
    "!src/main.js", // Exclude the entry point
    "!**/node_modules/**", // Exclude dependencies
  ],
};

