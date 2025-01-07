import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom', // Use jsdom for DOM-related tests
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files with ts-jest
    },
    moduleNameMapper: {
        '\\.(css|scss|sass|less)$': 'identity-obj-proxy', // Mock CSS imports
        '^@/(.*)$': '<rootDir>/src/$1', // Handle alias imports (adjust based on your setup)
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup file for jest-dom
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // File extensions for modules
};

export default config;
