import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/CondidionalRender';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 32000 },
  ];

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
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
        {/* reaproveitamento */}
        <CarDetails brand="Ford" color="Prata" km={150000} newCar={true} />
        <CarDetails brand="FIAT" color="Branco" km={4500} newCar={false} />
        <h3>loop com array de obj</h3>
        {/* loop com array de obj */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            newCar={car.newCar}
            km={car.km}
          />
        ))}
        {/* fragments */}
      <Fragment />
      </header>
    </div>
  );
}

export default App;
