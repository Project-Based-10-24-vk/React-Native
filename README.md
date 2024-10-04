![photo2 (1)](https://github.com/user-attachments/assets/97c87961-7765-416d-bc79-69b1f39348b4)


# SpaceToStudy React Native Project!


SpaceToStudy React Native project is an Android app where experts in various fields share their knowledge, and students can learn from the best. You can find a proper training course, locate a tutor, or find students and receive feedback from them.

[![GitHub issues](insert your link here)]  
[![Pending Pull-Requests](insert your link here)]  
[![GitHub license](insert your link here)]

---

- [Installation](#installation)
  - [Required to install](#required-to-install)
  - [Clone](#clone)
  - [Setup](#setup)
  - [How to run locally](#how-to-run-locally)
- [Usage](#usage)
  - [How to run tests](#how-to-run-tests)
- [Documentation](#documentation)
  - [Rules and guidelines](#rules-and-guidelines)
  - [Testing](#testing)
- [Contributing](#contributing)
  - [Git flow](#git-flow)
  - [Issue flow](#issue-flow)

---

## Installation

- All the `code` required to get started with the React Native version.

### Required to install

- **Android Studio** for mobile emulators (depending on the platform you're targeting)

### Clone

- Clone this repo to your local machine

### Setup

> Install npm packages

```shell
$ npm install
```

### How to run locally

1. Open terminal.
2. Start the project with Expo by running:

```bash
$ npm start
```

3. Open **Android Studio**, launch an emulator or connect your physical device.
4. Follow the Expo instructions to open the app on your emulator/device.

---

## Usage

### How to run tests

To run unit tests, open the terminal and execute:

```bash
$ npm test
```

---

## Documentation

### Rules and guidelines

- **Redux**  
  Each entity should have a separate folder. In each folder, different files are needed for actions and reducers:
  - `{modelName}.actions.js`
  - `{modelName}.reducer.js`

- **Configuration**  
  Configuration is done via the `.env` file where environment variables are located.

- **Styles**  
  For styling, use `StyleSheet.create()` from `react-native` and ensure styles are encapsulated within the specific component.

- **Components**  
  - Components connected to Redux should be located in the `containers` folder.
  - Components without a Redux connection should be in the `components` folder.
  - Pages accessible via routing (using `react-navigation`) should be in the `pages` folder. All components used on a page should reside in that page's specific folder.
  
  Each component should have at least two files:
  - `index.js` main file with all logic
  - `{component-name}.styles.js` where styles are stored

### Testing

#### Components

Order of testing:

1. Stateless components used across multiple places.
2. Components depending on other components but not connected to Redux and without state.
3. Components with internal state but not connected to Redux.
4. Components connected to Redux.

##### What to test:

- **Properties**: default properties, custom properties, and data types (use `jest-extended`).
- **Conditions**: test behavior under different conditions.
- **State**: default state and how state changes based on events.
- **Events**: test events with and without parameters.

##### How to test:

- Test snapshots to compare UI changes.
- Test the component's logic, especially dynamic behaviors.

##### Don’t test:

- Third-party libraries
- Constants
- Static styles

## Contributing

You're encouraged to contribute to our React Native project if you've found any issues or missing functionality. You can add issues in the **Issues** tab and click `New issue`.

Before sending a pull request, discuss the changes using an existing issue or create a new one. All pull requests should be done in the `develop` branch.

### Git flow

- We have **main**, **develop**, and **feature** branches.
- All **feature** branches must be merged into `develop`.
- Only release branches should be merged into `main`.

#### Steps to contribute

1. **Clone** the repository or create a new branch from `develop`.
2. Make commits to your branch.
3. Create a pull request targeting `develop`.

---

### Issue flow

1. Go to **Issues** and click `New issue`.
2. Fill in the name, description, assign a person, and label the issue.
3. If the issue is a `User Story`, link it to corresponding tasks.

