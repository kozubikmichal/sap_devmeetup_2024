# SAP DevMeetup 2024 Demo App

This is a demo application for the purpose of SAP DevMeetup 2024, where we showed the use of different types of automated tests on the frontend part of the application.

## How to navigate through this repo

`main` branch serves as the starting point for this demo.

Contains

- application code, which may or may not always be the final version
- Preparation for running tests both locally and within the CI Pipeline, so that we don't get bogged down with configuration during the presentation
- all the dependencies that will be needed in later phases, so that you can switch freely between branches without installing dependencies

Not included

- The tests themselves
- Some code modifications required to run the tests successfully

To demonstrate how the tests could be added into this application, there are several open [Pull Requests](https://github.com/kozubikmichal/sap_devmeetup_2024/pulls), each containing partial support of automated tests.

Final version of this app with all tests etc. can be found in the [final](https://github.com/kozubikmichal/sap_devmeetup_2024/tree/final) branch of this repository.

## How to run

Simply run `npm install` to install all dependencies and then `npm run dev` to start the application. The app itself runs at http://localhost:5173/

## Functionality

As this is purely to demonstrate the testing principles, the UI and logic is very simple and far from any basic real world applications.

First page contains the Login form where user can put their credentials. There are 2 hardcoded users

- user: `admin`, password: `admin`
- user: `user`, password: `user`

<img width="630" alt="image" src="https://github.com/user-attachments/assets/aeaacfe7-fdc6-4902-a112-973cdc51ef12">

In case of wrong credentials, proper message is shown to the user

<img width="631" alt="image" src="https://github.com/user-attachments/assets/53c56e1a-4c6c-4866-a95a-67a32a6e4824">

After successful login, user can access the User Portal

<img width="632" alt="image" src="https://github.com/user-attachments/assets/ab0a9528-3bd8-4c8b-8c7e-45c128e984fd">

## Tech stack

- [npm](https://www.npmjs.com/)
- [vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [GitHub Actions](https://github.com/features/actions)
