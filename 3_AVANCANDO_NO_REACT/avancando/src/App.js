import './App.css';

import City from './assets/city.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avançando em React</h1>

        {/* Imagem em public */}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>

        {/* Imagem em assets */}
        <div>
          <img src={City} alt="Cidade" />
        </div>
      </header>
    </div>
  );
}

export default App;
