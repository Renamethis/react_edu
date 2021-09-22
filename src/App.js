import logo from './logo.svg';
import {Pulls} from './js/pulls.js';
import {Issues} from './js/issues.js';
import {Marketplace} from './js/marketplace.js';
import {Explore} from './js/explore.js';
import './css/App.css';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import bell from '/images/bell.png'
import plus from '/images/plus.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <div className="header-left">
            <p className="icon">GETHUB</p>
            <form>
              <label>
                  <input placeholder="Search or jump to..." className="search" type="text" name="name"/>
              </label>
            </form>
            <li className="li_navbar">
              <NavLink to="/pulls" className="title__text">Pull requests</NavLink>
              <NavLink to="/issues" className="title__text">Issues</NavLink>
              <NavLink to="/marketplace" className="title__text">Marketplace</NavLink>
              <NavLink to="/explore" className="title__text">Explore</NavLink>
            </li>
          </div>
        <div classname="header-right">
          <NavLink to="/explore"><img className="bell" src={bell}></img></NavLink>
          <NavLink to="/explore"><img className="plus" src={plus}></img></NavLink>
        </div>
        </header>
      <Route path="/pulls"><Pulls/>  </Route>
      <Route path="/issues"><Issues/>  </Route>
      <Route path="/marketplace"><Marketplace/>  </Route>
      <Route path="/explore"><Explore/>  </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
