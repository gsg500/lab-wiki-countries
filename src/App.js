import './App.css';
import { Route, Routes } from 'react-router';
import countries from './countries.json';
import Navbar from './componentes/Navbar';
import CountriesList from './componentes/CountriesList';
import CountryDetails from './componentes/CountryDetails';
import About from './componentes/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-3" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <CountriesList countries={countries} />
          </div>
          <div className="col-6">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/:IdPais" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
  //***FEITO EM DUPLA - Guilherme Santos Gomes e Caio Guarnieri / IRONHACK