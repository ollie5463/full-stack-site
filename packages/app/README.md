## front end for the website
This is to be used in conjunction with [Basic-site-BE](https://github.com/ollie5463/basic-site-BE).

This project uses images lifted from the Jackpotjoy live site. It outlines a basic site with a home page, slots page and instants page. All of the pages are loaded within a page wrapper which will hide the content and show a loading spinner until loaded. When loading each route, you will notice the images are retrieved from the backend project. This is because the backend hosts resource lists and resources for the front end to retrieve (proxying from localhost:3000 to localhost:8080). 
### How to use
Prerequisites
- Have node_modules installed by using the `yarn` command via the CLI

To start this project you need to run:
```js
yarn start
```

To run tests in this project you can use:
```js
yarn test
```

To make a build into the dist folder you can use:
```js
yarn build
```

To lint the project you can use: 
```js
yarn lint
```
### Tech used
- Webpack
- Babel
- React
- Yarn
- Jest
- Enzyme
- Typescript
- Styled-components (components and themes)
- React router
