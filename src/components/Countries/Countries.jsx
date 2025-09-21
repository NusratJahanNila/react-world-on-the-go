import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    // const [visitedCountries,setVisitedCountries]=useState([]);

    const handleVisitedCountries=(country)=>{
        console.log('Visited country clicked',country)
    }
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries
    return (
        <div >
            <h1>Number of countries: {countries.length}</h1>
            <h3>Total Country visited: </h3>
            <div className='countries'>
                {
                countries.map(country=><Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;