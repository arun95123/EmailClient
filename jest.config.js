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
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
		'\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js'
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};