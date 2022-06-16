import * as React from 'react';


function CardCities({cardFilter}){
    return (
        <>
        <div className='cards'>
        {cardFilter.map(city => (
            <div className='cards'>
                <div className='image'>
                    <img src = {process.env.MONGO_URI + `${city.photo}`}  alt="cities"/>
                </div>
                <div className='body-card'>
                    <h3>{city.cityname}</h3>
                    <h4>{city.country}</h4>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}
export default CardCities 