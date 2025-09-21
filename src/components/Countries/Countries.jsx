import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries,setVisitedCountries]= useState([])
    const[visitedFlags,setVisitedFlags]=useState([])
    console.log(visitedFlags)
    const handleVisitedCountries=(country)=>{
        // console.log('Visited country clicked',country)
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    } 
    const handleVisitedFlags=(flags)=>{
        const newVisitedFlags=[...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData=use(countriesPromise);
    const countries=countriesData.countries
    return (
        <div >
            <h1>Number of countries: {countries.length}</h1>
            <h3>Total Country visited: {visitedCountries.length}</h3>
            <h3>Total Country flags: {visitedFlags.length}</h3>
            {/* country list */}
            <ol>
                {
                    visitedCountries.map(country=><li key={country.ccn3.ccn3}>
                        {country.name.common}
                    </li>)
                }
            </ol>

            {/* flag list */}
            <div className='visited-flag'>
                {
                    visitedFlags.map((flag)=><img src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country=><Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;