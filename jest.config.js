module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    '\\.(css|scss|less|jpg|png|svg)$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/src/api/*'],
};
