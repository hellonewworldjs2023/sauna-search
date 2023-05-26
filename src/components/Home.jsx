import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../dummyData';
import Article from './Article';

const Home = () => {

    const [data,setData] = useState(dummyData);

  return (
    <>

     <h3 className="text-3xl font-bold underline">Hello Sauna!</h3>
    {data.map((section) =>
        
            <div className='mx-auto w-1/2'>
              <Link key={section.id} to={`/saunas/${section.id}`} className='mx-auto w-1/2' >
                <Article  name={section.name} 
                image= {section.image} area={section.area}
                maleSaunaTemp ={section.male.saunaTemp} maleColdBath={section.male.coldBath} 
                maleAirBath = {section.male.airBath} maleLouryu = {section.male.louryu}
                femaleSaunaTemp ={section.female.saunaTemp} femaleColdBath={section.female.coldBath} 
                femaleAirBath = {section.female.airBath} femaleLouryu = {section.female.louryu}
                price={section.price}
                />
              </Link>
            </div>

    )}
    </>
  )
}

export default Home