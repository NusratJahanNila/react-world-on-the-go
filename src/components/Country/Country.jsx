import './Country.css'
const Country = ({country}) => {
    
    const handleVisited=()=>{
        alert("Visited")
    }
    return (
        <div className="country">
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} : {country.area.area> 300000? 'Big Country': "Small Country"}</p>
            <p>Continents: {country.continents.continents[0]}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;

/**
 * 1.inline: style?
 * 
 */