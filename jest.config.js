module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/core/domain/useCases/**/*UseCase.ts'
  ],
  coveragePathIgnorePatterns: ['index.ts'],
  coverageDirectory: '__tests__/coverage',
  testEnvironment: "node",
  testMatch: [
    "**/src/providers/**/*.test.js?(x)",
    "**/src/core/domain/useCases/**/*.test.js?(x)",
  ],
}