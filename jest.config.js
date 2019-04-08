module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      diagnostics: { warnOnly: true },
    },
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/jest.stubs.js'],
  testURL: 'http://localhost/',
  moduleNameMapper: {
    '~root/(.*)$': '<rootDir>/$1',
    '~src/(.*)$': '<rootDir>/src/$1',
    '~locales/(.*)$': '<rootDir>/locales/$1',
  },
  snapshotSerializers: ['jest-emotion/serializer'],
};
