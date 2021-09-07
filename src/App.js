import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Donate from './pages/Donate'
import DonateDetail from './pages/DonateDetail'
import Order from './pages/Order'

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
