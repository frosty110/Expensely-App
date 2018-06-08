# Expense-Ly
[Now hosted on Heroku!](https://expense-ly.herokuapp.com)

Expense-Ly is a cloud-enabled, mobile-ready, offline-storage, React powered tool for tracking expenses!

### Features Status 
- [x] Create/Edit/Delete expenses to Firebase (NoSQL database)
- [x] Filter expenses by text or date range
- [x] Basic summary report from filtered expenses
- [x] Data is accessable in the cloud from web or mobile
- [x] setup google autherization
- [x] Setup private routes
- [ ] setup public routes
- [ ] Style the UI
- [ ] Create better dashboard summary
- [ ] Allow import/export of data to csv

### For Local Run (requires Firebase):

#### Firebase setup
1. Create an account or login at: https://firebase.google.com/
2. Create a project.
3. Create a "Realtime Database".
4. In the Project Overview click on "Add Firebase to your web app".
5. Copy and paste those values in the ".env.development.editMe" file.
6. Save and remove the ".editMe" from the file.
7. Run "yarn run build-dev", navigate to the localhost in your brower and click away.

#### Commands
```sh
$ yarn install
$ yarn run build-dev
```
### Tech Stack 
| Modules | Description | 
| ------ | ------ |
| [React](https://reactjs.org/) | Interactive UI with reusable components |
| [Redux](https://redux.js.org/) | React application state manager | 
| [NodeJs](https://nodejs.org/en/)| JS Runtime environment | 
| [Webpack](https://webpack.js.org/) | Javascript Module bundler |
| [Babel](https://babeljs.io/) | EC6 to EC5 transpiler | 
| [Express](https://expressjs.com/) | web application framework for Node.js |
| [Firebase](https://firebase.google.com/) | NoSQL database platform |
| [Enyzme](http://airbnb.io/enzyme/) | Testing utilities for React |
| [Jest](https://facebook.github.io/jest/) | Testing tool for React |
| [Yarn](https://yarnpkg.com/lang/en/docs/getting-started/) | Package manager | 
