import '../css/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import {Home} from './Home.js'
import {AuthProvider} from './auth.js'
import {Login} from "./Login.js"
import {Register} from "./Register.js"
import {StartPage} from "./StartPage.js"
import {Layout} from "./Layout";
import {Pulls} from "./pulls";
import {Issues} from "./issues";
import {Marketplace} from "./marketplace";
import {Explore} from "./explore";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={StartPage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Register}/>
            <Route exact path="/main">
              <Layout className="grid_layout">
                <Home />
              </Layout>
            </Route>
            <Route path="/pulls">
              <Layout>
              <Pulls/>
              </Layout>
            </Route>
            <Route path="/issues">
            <Layout>
              <Issues/>
            </Layout>
          </Route>
            <Route path="/marketplace">
              <Layout>
              <Marketplace/>
              </Layout>
            </Route>
            <Route path="/explore">
              <Layout>
              <Explore/>
              </Layout>
            </Route>
        </div>
      </BrowserRouter>
     </AuthProvider>
  );
}
export default App;
