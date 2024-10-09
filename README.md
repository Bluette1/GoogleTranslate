# Google Translate Clone

Welcome to the **Google Translate Clone**! This is a React Native application built with Expo that mimics the functionality of Google Translate, allowing users to translate text between multiple languages.

![](./assets/Screenshot-Google-Translate-Clone%20.png)

[Deployment Link](https://amethyst-tani-54.tiiny.site/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Text Translation**: Translate text between various languages.
- **Language Detection**: Automatically detect the input language.
- **User-Friendly Interface**: Intuitive and clean UI for seamless interaction.
- **Responsive Design**: Optimized for both iOS and Android devices.

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **Expo**: Framework and platform for universal React applications.
- **JavaScript**: Core programming language for the application.
- **Google Translate API**: For fetching translations.
- **Supabase**: For the database

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Expo CLI

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/notJust-dev/GoogleTranslate.git
   cd GoogleTranslate
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up the Google Translate API**:

   - Obtain an API key from Google Cloud. Follow these steps:
     1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
     2. Create a new project or select an existing one.
     3. Enable the Google Cloud Translation API.
     4. Generate API credentials and obtain your API key.
   - Add your API key to the app (see the code section below for details).

4. **Start the development server**:
   ```bash
   npm start
   # or
   yarn start
   ```

### API Key Configuration

In your code, make sure to replace the placeholder with your Google Translate API key. Typically, you would want to store your API key securely, possibly using environment variables.

Example:

```javascript
const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Replace with your actual API key
```

## Usage

1. Open the Expo Go app on your mobile device or use an emulator.
2. Scan the QR code displayed in the terminal or browser window after starting the development server.
3. Enter the text you want to translate in the input field.
4. Select the source and target languages.
5. Press the "Translate" button to see the translated text.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please follow these steps:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/my-feature
   ```
5. Open a pull request.

## User Stories

For a comprehensive overview of the user stories for the Google Translate Clone app, please refer to our [Notion User Stories](https://www.notion.so/Google-Translate-Clone-app-116e6a4d98f2806a822fc514d24c96a9?pvs=4).


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


