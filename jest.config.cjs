module.exports = {
  testEnvironment: "jest-fixed-jsdom",

  transform: {
    "^.+\\.jsx?$": "babel-jest",
   // Use jsdom environment for testing React components
    },
  collectCoverageFrom: [
  "src/**/*.{js,jsx}", 
  ],
  };