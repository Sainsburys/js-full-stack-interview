# Sainsbury's DTP Full Stack Test

## Instructions

The test consists of creating a frontend single page application and a GraphQL Serverless server.

Most of the initial setup of the two services have been done for you, ie:

- Frontend
  - Routing
  - Testing setup
  - Apollo client setup see https://www.apollographql.com/docs/react/get-started/#request-data
- Backend
  - Serverless setup
  - Initial Apollo setup
  - Testing setup

The backend test has been setup to use TypeScript, the frontend should work out of the box with TypeScript.
It is not required to use TypeScript on either of the tests, but exposure is a bonus.

## Frontend

The front end application needs to consist of two pages, a homepage that will display a list of movies and a single page that will display the details of a movie. The route needs to change when a user clicks one of the movie cards on the homepage to that specific movie detail page.

Apollo client has been setup to point to the backend running on port 8888, so you should not have to worry about this.

---

We have provided you with two designs that can be used for inspiration for the front end designs.

[Home](./Visual_Home.jpg)

[Single Movie](./Visual_Movie.jpg)

---

## Frontend Requirements

- Routing:
  - The different pages should be handled by some sort of routing library.
  - React Router Dom has been setup, but you can use whatever you want.
- State management:
  - For this test please use React hooks to handle state management.
- Styling:
  - The website should be responsive and should be cater at least for 2 views: Desktop and Mobile.
  - The website UI shouldn't look rough.
  - No restriction to use CSS, SASS or CSS-in-JS
- Testing:
  - Not required to test all the components.
  - Encourage to test different cases more than the happy path.

## Preinstalled Frontend libs

- react-router-dom
- styled-components
- axios
- node-sass
- enzyme
- jest-enzyme
- @testing-library/react
- @testing-library/jest-dom
- @apollo/client

---

## Backend

The backend needs to be a Serverless application using the Serverless JS package. It will serve up all the data to be consumed by the frontend.

You can use [TMDb REST API](https://www.themoviedb.org/documentation/api) to search and fetch movies. As API key you can use `c857fa67fba523ad3ce66df18e7ab279`.

Images need to be prefixed with the following:

`https://image.tmdb.org/t/p/w300`

## Backend Requirements

The backend server must be an Apollo GraphQL server that consists of two queries:

```graphql
type Query {
    listMovies: MovieList
    movie(id!: string): Movie
}
```

The structure of the GraphQL types are up to you to design.

Testing is not required but some simple tests would be a bonus.

## Preinstalled Backend libs

- serverless
- serverless-offline
- serverless-webpack
- @graphql-tools/merge
- @graphql-tools/schema
- apollo-datasource-rest
- apollo-server-lambda
- apollo-server-plugin-base
- aws-lambda
- mocha
- chai
- sinon
