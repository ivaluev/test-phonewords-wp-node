# App Name

## How to Run

```
npm i
npm run build
npm start
```

project will be started on localhost:20002 (browser will not open automatically)


## App UI flow / features
- user can enter digits (from 2 to 9) - search will start automatically after 1 second

## Project Structure

```
/build - build folder (this folder is in .gitignore, so it is not part of this repository)
/etc - webpack configuration
/public - app template
/src - app source files
|_ /client - frontend part of app
  |_ /api - rest api services and interfaces
  |_ /components - common components
  |_ /pages - app scenes, routing logic and sub components
  |_ /strings - transaltions; I like my own infrastructure(it is using react context api) but i18n also can be used. 
  |_ /theme - styled components theme
  |_ /utils - other common infrastracture
|_ /server - backend part of app
.env - development env variables; production env variables are set manually on Deployment server
config.js - env schema and setup for development version
...
```

## Technology

- react (hooks)
- react state: - local - but can be easily extended to Redux store (with typesafe actions) / or url state 
- typescript (latest)
- styled-components (themed)
- ui frameword - material-ui - can be changed to Bootstrap, Semantic, Ant, Ring etc or fully custom
- @material-ui
- backend - koa - can be express
- testing - react-testing-libraty and jest (not done)

## Scripts

- `clean` - will remove build folder
- `build` - will create production bundle
- `build-server` - will create server side part of bundle
- `build-client` - wii create client side part of bundle
- `start` - will run production version
- `dev` - will run dev version
- `postinstall` - will run postinstall scripts
- `lint` - will run css and js linters
- `lint-css` - will run only css linter

## Production deployment

TODO
