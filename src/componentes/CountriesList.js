import { Link } from 'react-router-dom';

function CountriesList(props) {
  const pais = props.countries;
  return pais.map((currentPais) => {
    return (
    <div key={currentPais.cca3} className="list-group">
    <Link className="list-group-item list-group-item-action" to={currentPais.cca3} >
    <div>
    <div>{currentPais.flag}</div>
    <div>{currentPais.name.common}</div>
    </div>
    </Link>
    </div>
    );
  });
}

export default CountriesList;
  //***FEITO EM DUPLA - Guilherme Santos Gomes e Caio Guarnieri / IRONHACK