// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

// styles / CSS
import logo from './logo.svg';
import './App.css';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        */}
        
        <FirstComponent />
        <TemplateExpressions />
        {/* <MyComponent /> */}
        <Events />
        <Challenge />
      </header>
      
    </div>
  );
}

export default App;
