module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testRegex: '.+\/test.?.?.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}