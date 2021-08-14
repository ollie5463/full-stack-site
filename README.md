# full-stack-site


A full stack application mirroring Jackpotjoy using images lifted from the live site. It outlines a basic site with a home page, slots page and instants page. All of the pages are loaded within a page wrapper which will hide the content and show a loading spinner until loaded. When loading each route, you will notice the images are retrieved from the backend project. This is because the backend hosts resource lists and resources for the front end to retrieve (proxying from localhost:3000 to localhost:8080). 

## How to use
Prerequisites
- Have node_modules installed by using the `yarn` command via the CLI


To start this application, please start the [server](https://github.com/ollie5463/full-stack-site/tree/main/packages/server) first, then run the [react site](https://github.com/ollie5463/full-stack-site/tree/main/packages/app). 

For guidance on how to start each package, please refer to the readme files.

## Todo
- I have started dockerising each package, however this isn't fully implemented. 
