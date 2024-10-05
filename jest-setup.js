import '@testing-library/jest-native/extend-expect';
jest.mock('expo-router', () => ({
    Stack: jest.fn(),
    Link: jest.fn(),
  }));
  
  jest.mock('expo-modules-core', () => ({
    requireOptionalNativeModule: jest.fn(),
  }));
