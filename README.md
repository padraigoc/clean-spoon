## Running

```
bundle
cd client
npm i
cd ..
rake start
```

## Overview

`create-react-app` configures a Webpack development server to run on `localhost:3000`. This development server will bundle all static assets located under `client/src/`. All requests to `localhost:3000` will serve `client/index.html` which will include Webpack's `bundle.js`.

In this example, the React component `App` makes a request to an API server (`server.js`). The user's browser visits the Webpack dev server at `localhost:3000`. Then the React client communicates with the API server when needed at `localhost:3001`:

This setup uses [foreman](https://github.com/ddollar/foreman) for process management. Executing `foreman start` instructs Foreman to boot both the Webpack dev server and the API server.

## Acknowledgements

Initial scaffold based on [create react app with rails API tutorial](https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/) by Anthony Accomazzo.