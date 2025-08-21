import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  const {country, handleVisitedCountry, handleVisitedFlages} = props;
  return (
    <div>
        <h4>Country Details</h4>
        <hr />
        {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlages={handleVisitedFlages}
        ></CountryData> */}
        <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;