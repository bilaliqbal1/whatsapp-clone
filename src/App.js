// import logo from './logo.svg';
import  Chat  from './components/Chat';
import './App.css';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import { useStateValue } from './redux/StateProvider';

function App() {
  const [{ user }, dispatch]= useStateValue();
  return (
    <div className="App">
      {/* <h1>let's build whatsapp clone</h1> */}
      {!user ? (
        <Login />
      ):(
        <div className="body">
          <Router>
                <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
    
  );
}

export default App;
