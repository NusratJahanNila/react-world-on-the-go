import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const [visited,setVisited]=useState(false);
    
    
    const handleVisited=()=>{
        // rule-1
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // rule-2
        // setVisited(visited? false:true);

        // rule-3
        setVisited(!visited);

        handleVisitedCountries(country);

    }
    return (
        // dynamic css add
        <div>
            
            <div className={`country ${visited && 'country-visited'}`}>

                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital[0]}</p>
                <p>Population: {country.population.population}</p>
                <p>Area: {country.area.area} : {country.area.area> 300000? 'Big Country': "Small Country"}</p>
                <p>Continents: {country.continents.continents[0]}</p>
                {/* button */}
                <button style={{backgroundColor:'khaki'}} onClick={handleVisited}>
                    {
                        visited? "Visited" : "Not Visited"
                    }
                </button>

                <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}} 
                style={{backgroundColor:'khaki',marginLeft:'5px'}}>
                    Visited Flags
                </button>
            </div>
        </div>
    );
};

export default Country;

/**
 * 1.inline: style?
 * 
 */