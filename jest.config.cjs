module.exports = {
  testEnvironment: "jest-fixed-jsdom", // Use jsdom environment for testing React components
  // Transform jsx files using babel-jest
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Collect coverage from all js or jsx files in src folder
    "!src/routes.js", // Exclude routes.js from coverage
    "!src/main.jsx", // Exclude main.jsx from coverage
    "!src/App.jsx", // Exclude App.jsx from coverage

  ],
  testResultsProcessor: 'jest-sonar-reporter',
};

module.exports = {
  testEnvironment: "jest-fixed-jsdom",
  transform: { "^.+\\.jsx?$": "babel-jest" },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/routes.js",
    "!src/main.jsx",
    "!src/App.jsx"
  ],
  testResultsProcessor: 'jest-sonar-reporter',
};