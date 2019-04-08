/* eslint-disable */

module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/config/', '/cypress/'],
  coverageThreshold: {
    global: {
      branches: 0, //-> 80
      functions: 0, //-> 80
      lines: 0, //-> 80
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  setupFiles: ['./src/test/enzymeSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePaths: ['src'],
};
