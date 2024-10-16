import '@testing-library/jest-native/extend-expect';

jest.mock('expo-router', () => ({
  Stack: jest.fn(),
  Link: jest.fn(),
}));

jest.mock('@expo/vector-icons/build/FontAwesome5', () => jest.fn());
jest.mock('@expo/vector-icons/build/FontAwesome6', () => jest.fn());

jest.mock('expo-modules-core', () => ({
  requireOptionalNativeModule: jest.fn(),
}));
