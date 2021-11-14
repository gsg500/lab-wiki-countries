import { Link, useParams } from 'react-router-dom';
import countries from '../countries.json';

function CountriesDetails() {
  const pais = useParams();  
  const countrySearch = countries.find((currentPaisObj) => {
    return currentPaisObj.cca3 === pais.IdPais;
  }); 

  return (
    <div> <h1>{countrySearch.name.common}</h1>
     <table className="table">
       <thead></thead>
       <tbody>
         <tr>
           <td style={{ width: '25%' }}>Capital</td>
           <td>{countrySearch.capital}</td>
         </tr>
         <tr>
           <td>Area</td>
           <td>
             {countrySearch.area}
             <sup> *2</sup>
            </td>
          </tr>
         <tr>
           <td>Fronteiras</td>
           <td>
             <ul>
               {countrySearch.borders.map((currentTypeCca3) => {
                   const paisSelecionado = countries.find((currentPaisObj) => {
                       return currentPaisObj.cca3 === currentTypeCca3;
                     }); 
                  return (
                   <li key={currentTypeCca3}>
                     <Link to={`/${currentTypeCca3}`}>{paisSelecionado.name.common}</Link>
                   </li>
                 );
               })}
             </ul>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
  );
}

export default CountriesDetails;
  //***FEITO EM DUPLA - Guilherme Santos Gomes e Caio Guarnieri / IRONHACK