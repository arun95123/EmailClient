module.exports = {
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['js','jsx'],
	moduleDirectories: [
		'node_modules',
		'bower_components',
	],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'\\.(gif|ttf|eot|svg|jpeg)$': '<rootDir>/__mocks__/fileMock.js'
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};