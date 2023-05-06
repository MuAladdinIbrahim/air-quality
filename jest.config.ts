import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/**.ts'],
    testRegex: '(/__tests__/.*(\\.|/)(test|spec))\\.[jt]sx?$',

};
export default config;