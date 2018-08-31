import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ContnetRouter from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store.js'

const routes = [
	...ContnetRouter
]

class App extends React.Component {
  routeItem() {
    return routes.map((item) => 
      <Route path={item.path} exact key={item.path} component={item.component} />
    )
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to='/todo'>list</Link>
          {this.routeItem()}
        </div>
      </BrowserRouter>
    )
  }
}


render(<Provider store={store}><App /></Provider>, document.getElementById('root'))