import {Route, BrowserRouter, Switch} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
