// components
import FirstComponent from './components/FirstComponent';

// styles / CSS
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <FirstComponent />
      </header>
      
    </div>
  );
}

export default App;
