module.exports = {
    modulePaths: ['<rootDir>/src/'],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js'
    },
    setupFilesAfterEnv: ['./setUpTests.js'],
    testEnvironment: "jsdom"
};