import Home from '../Home'
import List from '../TodoList'

const routes = [{
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/todo',
    exact: true,
    component: List
  }
]
export default routes