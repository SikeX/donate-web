import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './page/home'
import Donate from './page/Donate'
import DonateDetail from './page/DonateDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/donate/:name' component={DonateDetail} />
        <Route path='/donate' component={Donate} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
