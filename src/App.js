import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProjectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProjectedRoute exact path="/" component={Home} />
      <ProjectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </>
)
export default App
