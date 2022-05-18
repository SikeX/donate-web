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

        <Route path="/info/:id/:option" component={Info} />
        <Route path="/order/:orderNo" component={Order} />
        <Route path="/donate" component={Donate} />
        <Route path="/protocol" component={Protocol} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
