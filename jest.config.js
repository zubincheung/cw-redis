// Create by Zubin on 2018-08-13 10:09:32

module.exports = {
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,

  // 转换过程中，需要被忽略的文件。
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run.
  verbose: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // The directory where Jest should output its coverage files.
  coverageDirectory: './coverage/',

  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ['/(node_modules|lib|coverage|types)/'],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // The pattern Jest uses to detect test files.
  testRegex: '(/__tests__/|test.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
