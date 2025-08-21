const CountryData = ({country, handleVisitedCountry, handleVisitedFlages}) => {
  console.log('inside country data', country, handleVisitedCountry, handleVisitedFlages)
  return (
    <div>
        <p><small>Country data: {country.name.common}</small></p>
    </div>
  );
};

export default CountryData;