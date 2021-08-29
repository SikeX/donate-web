import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './page/home'
import Donate from './page/Donate'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/donate' component={Donate} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
