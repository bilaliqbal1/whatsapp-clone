// import logo from './logo.svg';
import  Chat  from './components/Chat';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <h1>let's build whatsapp clone</h1> */}
      <div className="body">
          <Sidebar />
          <Chat />
      </div>
    </div>
  );
}

export default App;
