# Node Express MVC EJS Bootstrap Starter app

A sample starter app using:

- Node.js platform
- Express web framework
- EJS templating engine
- MVC design pattern
- Mongoose MongoDB object modeling
- Lodash for JavaScript object iteration and manipulation 
- jQuery library for DOM manipulation
- BootStrap framework for responsive design
- nedb In-memory database
- Winston logger

## Links

- Repo <https://bitbucket.org/professorcase/node-express-mvc-ejs-start>

## Prerequisites

Following must be downloaded, installed, and configured according to the product directions: 

1. Node.js and npm 
1. Git version control system
1. Add "Open Command Window Here as Administrator" to context menu. Download and run file from <https://github.com/profcase/open-command-window-here-as-admin>.

## Code Editor

1. Install Visual Studio Code.
1. Right-click on your project folder and select "Open with Code".
1. RECOMMENDED: Under VS Code menu "File" option, check "Autosave".
1. OPTIONAL: To type commands from within VS Code, from the VS Code menu, select View /  Terminal.

## Get started

Clone this repo to your local machine. If Windows, 

- Right-click on parent folder (e.g. 44563) and select:
- git clone https://bitbucket.org/professorcase/node-express-mvc-ejs-start

## Review Code Organization

- app.js - Starting point for the application. Defines the express server, requires routes and models. Loads everything and begins listening for events.
- config/ - configuration information configuration/environment variables
- controllers/ - logic for handling client requests
- data/ - seed data loaded each time the application starts
- models/ - schema descriptions for custom data types
- routes/ - route definitions for the API
- views/ - EJS - embedded JavaScript and HTML used to create dynamic pages

## Install Nodemon Globally

In your new project folder, right-click and "Open Command Window Here as Administrator". Install nodemon globally to enable live updates.

```DOS
> npm install -g nodemon
```

## Install Project Dependencies

Run npm install to install the project dependencies listed in package.json.

```DOS
> npm install
```

## Run the App Locally

In your project folder, right-click and "Open Command Window Here as Administrator". At the prompt, type nodemon app.js to start the server.  (CTRL-C to stop.)

```DOS
> nodemon app.js
```

## View Web App

Open browser to the location displayed, e.g. http://localhost:8089/

## GraphQL 

GraphQL was added with:

```DOS
npm install graphql express-graphql -save
npm audit fix
```

## Resources

<https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1>