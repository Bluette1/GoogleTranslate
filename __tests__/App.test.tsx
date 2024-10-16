import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

// Testing the Input Functionality
describe('Google Translate App', () => {
  test('renders input field', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('Enter text to translate'); // Adjust placeholder as necessary
    expect(input).toBeTruthy();
  });

  test('allows text input', () => {
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText('Enter text to translate');

    fireEvent.changeText(input, 'Hello');
    expect(input.props.value).toBe('Hello'); // Verify the text has been entered
  });
});

// Testing Language Selection
test('selects source and target languages', () => {
  const { getByTestId } = render(<App />);
  
  const sourceLanguagePicker = getByTestId('source-language-picker'); // Use testID for testing
  const targetLanguagePicker = getByTestId('target-language-picker');

  fireEvent.change(sourceLanguagePicker, { target: { value: 'English' } });
  fireEvent.change(targetLanguagePicker, { target: { value: 'Spanish' } });

  expect(sourceLanguagePicker.props.value).toBe('English');
  expect(targetLanguagePicker.props.value).toBe('Spanish');
});

// Testing Translation Functionality
test('translates text when button is clicked', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  
  const input = getByPlaceholderText('Enter text to translate');
  const button = getByText('Translate'); // Adjust button text as necessary

  fireEvent.changeText(input, 'Hello');
  fireEvent.press(button);

  // Assuming the translation API returns 'Hola' for 'Hello'
  expect(getByText('Hola')).toBeTruthy(); // Replace with expected translated text
});

//  Testing Error Handling
test('shows error message on failed translation', async () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  
  const input = getByPlaceholderText('Enter text to translate');
  const button = getByText('Translate');

  fireEvent.changeText(input, ''); // Enter empty text to trigger error
  fireEvent.press(button);

  expect(getByText('Please enter text to translate')).toBeTruthy(); // Expected error message
});



