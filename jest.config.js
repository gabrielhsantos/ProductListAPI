module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!src/database/migrations/**'],
  coverageDirectory: 'coverage',
  testMatch: [
    "**/src/core/domain/useCases/**/*.test.js?(x)",
  ],
}