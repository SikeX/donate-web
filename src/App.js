import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'
import Donate from './pages/DonateChoose'
import DonateDetail from './pages/DonateDetail'
import Protocol from './pages/ProtocolChoose'
import ProtocolDetail from './pages/ProtocolDetail'
import Info from './pages/Info'
import Order from './pages/Order'
import NotFound from './pages/NotFound'
// import DonateChoose from './pages/DonateChoose'
// import ProtocolChoose from './pages/ProtocolChoose'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DonateDetail} />
        <Route path="/protocol/detail/:id" component={ProtocolDetail} />

        {/* <Route path="/donateChoose" component={DonateChoose} /> */}
        {/* <Route path="/protocolChoose" component={ProtocolChoose} /> */}
        <Route path="/info/:itemId/:optionId/:number" component={Info} />
        <Route path="/info/:itemId/:optionId" component={Info} />
        <Route path="/order/:orderNo" component={Order} />
        <Route path="/donate" component={Donate} />
        <Route path="/protocol" component={Protocol} />
        <Route path="/404" component={NotFound} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
