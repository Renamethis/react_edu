import '../css/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import {Home} from './Home.js'
import {AuthProvider} from './auth.js'
import {Login} from "./Login.js"
import {Register} from "./Register.js"
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Register}/>
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
     </AuthProvider>
  );
}
export default App;
