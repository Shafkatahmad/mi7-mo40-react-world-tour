import { useState } from 'react';
import './Country.css'
import CountryDetail from '../countryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlages}) => {
  const {name, flags, population, area, cca3} = country

  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    setVisited(!visited);
  }


  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: visited? 'purple' : 'white'}}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={() => handleVisitedFlages(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
      {visited && 'I have visited this country.'}
      <hr />
      <CountryDetail
          country={country}
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlages={handleVisitedFlages}
      ></CountryDetail>
    </div>
  );
};

export default Country;