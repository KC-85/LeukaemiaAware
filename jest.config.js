module.exports = {
  testEnvironment: "jsdom", // Simulates a browser-like environment
  transform: {
    "^.+\\.vue$": "vue-jest", // Handles Vue single-file components
    "^.+\\.js$": "babel-jest", // Handles JavaScript files
  },
  moduleFileExtensions: ["js", "json", "vue"], // Recognize these extensions
  transformIgnorePatterns: [
    "/node_modules/", // Don't transform node_modules by default
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Custom matchers for DOM
  collectCoverage: true, // Generate coverage reports
  collectCoverageFrom: [
    "src/**/*.{js,vue}", // Include JS and Vue files in coverage
    "!src/main.js", // Exclude the entry point file
    "!**/node_modules/**",
  ],
  extensionsToTreatAsEsm: [".vue"], // Treat Vue files as ES modules
};
