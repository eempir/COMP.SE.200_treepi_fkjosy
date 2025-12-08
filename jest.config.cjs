module.exports = {
  testEnvironment: 'node',

  // Look for tests in tests/ folder
  testMatch: ['**/tests/**/*.test.js'],

  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!**/.internal/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov']
};
