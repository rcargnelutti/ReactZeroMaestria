import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/CondidionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

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
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name="Rodrigo"/>
        <CarDetails brand="VW" km={100000} color="Azul" />
      </header>
    </div>
  );
}

export default App;
