import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Donate from './pages/DonateChoose'
import DonateDetail from './pages/DonateDetail'
import Order from './pages/Order'
import DonateChoose from './pages/DonateChoose'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/donate/detail/:id' component={DonateDetail} />
        <Route path='/donateChoose' component={DonateChoose} />
        <Route path='/donate/order/:id/:option' component={Order} />
        <Route path='/donate' component={Donate} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
