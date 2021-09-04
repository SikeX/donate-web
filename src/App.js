import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './page/home'
import Donate from './page/Donate'
import DonateDetail from './page/DonateDetail'
import Order from './page/Order'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/donate/:name' component={DonateDetail} />
        <Route path='/order' component={Order} />
        <Route path='/donate' component={Donate} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
