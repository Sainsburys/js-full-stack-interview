import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Movie from './pages/Movie'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const GRAPHQL_URL = 'http://localhost:8888/offline/graphql'

const client = new ApolloClient({
  url: GRAPHQL_URL,
  cache: new InMemoryCache(),
})

// ApolloClient Docs https://www.apollographql.com/docs/react/get-started/#request-data

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
