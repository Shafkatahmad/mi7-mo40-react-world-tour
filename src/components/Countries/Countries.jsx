import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlages, setVisitedFlages] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2,cca3,flags,area')
    .then(res => res.json())
    .then(data => setCountries(data))
  } , [])

  const handleVisitedCountry = country => {
    console.log('add this to your visited country');
    const newVisitedCoutries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCoutries);
  }

  const handleVisitedFlages = flag => {
    const newVisitedFlages = [...visitedFlages, flag];
    setVisitedFlages(newVisitedFlages);
  }

  // remove item from an array in a state
  // use filter to select all the elements expect the one you want to remove
  return (
    <div>
        <h3>Countries {countries.length}</h3>
        {/* visited country */}
        <div>
          <h5>Visited Countries: {visitedCountries.length}</h5>
          <ul>
              {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
              }
          </ul>
        </div>
        <div className="flag-container">
            {
              visitedFlages.map((flag, idx) => <img key={idx} src={flag}></img>)
            }
        </div>
        {/* display countries */}
        <div className="country-container">
          {
          countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlages={handleVisitedFlages} country={country}></Country>)
        }
        </div>
    </div>
  );
};

export default Countries;