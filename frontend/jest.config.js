module.exports = {
  testEnvironment: "jsdom", // Simulate a browser-like environment
  transform: {
    "^.+\\.vue$": "vue-jest", // Handle Vue single-file components
    "^.+\\.js$": "babel-jest", // Handle JavaScript files
  },
  moduleFileExtensions: ["js", "json", "vue"], // Recognize these file types
  transformIgnorePatterns: [
    "/node_modules/", // Ignore dependencies unless explicitly needed
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Add matchers for DOM testing
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}", // Include all JS and Vue files
    "!src/main.js", // Exclude the entry point
    "!**/node_modules/**", // Exclude dependencies
  ],
};
