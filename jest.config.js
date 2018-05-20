module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/scripts/setupTests.js',
  moduleNameMapper: {
    '.(css|scss)$': '<rootDir>/config/jest/cssTransform',
    '.(jpg|jpeg|png|svg)$': '<rootDir>/config/jest/fileTransform'
  }
}
