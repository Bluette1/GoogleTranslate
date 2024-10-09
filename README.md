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
- **OpenAI API**: For fetching translations and creating transcriptions.
- **Supabase**: For edge functions and the database
- **TDD (Test-Driven Development)**: For reliable and maintainable code

Creation Story

The idea for this project was born out of the need for a customizable translation tool that leverages modern APIs. Inspired by the capabilities of existing translation services, the goal was to create an open-source version with added flexibility and integration with cutting-edge technologies like OpenAI and Supabase. This project aims to provide developers with a robust platform to build upon and customize for their specific needs.

[View a Step By Step Walk Through of How I Created the Project]()

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

In your code, make sure to replace the placeholder with your OpenAI API key. Typically, you would want to store your API key securely, possibly using environment variables.

Example:

```javascript
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key
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

<!-- --------- -->
# Google Translate Clone

## Overview

This project is a clone of the Google Translate service, providing text-to-text translation from one language to another using OpenAPI. It includes text-to-speech and speech-to-text features.

## Features

- **Text Translation**: Translate text between various languages.
- **Language Detection**: Automatically detect the input language.
- **Text-to-Speech Translation**
- **Speech-to-Text Translation**
- **User-Friendly Interface**: Intuitive and clean UI for seamless interaction.
- **Responsive Design**: Optimized for both iOS and Android devices.
- **User Authentication**
- **Real-time Database Updates**

## Technologies Used

- **JavaScript** with Babel for modern syntax
- **Supabase** for backend services
- **OpenAPI** for translation functionalities
- **TDD (Test-Driven Development)** for reliable and maintainable code

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bluette1/google-translate-clone.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd google-translate-clone
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file and add your Supabase and OpenAPI credentials.

5. **Run the application:**

   ```bash
   npm start
   ```

## Export as Static Website

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Export as static files:**

   Ensure your build script generates static files in a directory like `dist` or `build`.

3. **Deploy the static files:**

   Upload the static files to [tiiny.site](https://tiiny.site) or any other static hosting service.

## Testing

To run the tests, execute:

```bash
npm test
```

## Deployment

The application is deployed on [tiiny.site](https://tiiny.site).

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## User Stories

For a comprehensive overview of the user stories for the Google Translate Clone app, please refer to our [Notion User Stories](https://www.notion.so/Google-Translate-Clone-app-116e6a4d98f2806a822fc514d24c96a9?pvs=4).

## Acknowledgements
[Building a Google Translate Clone with React Native and Expo](https://www.youtube.com/live/wIS27dSWpfo)

## License

This project is licensed under the MIT License.

## Contact

For questions or collaboration, feel free to contact the project maintainer.


