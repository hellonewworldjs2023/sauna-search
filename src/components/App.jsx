
import { useState } from 'react';
import '../App.css';
import dummyData from '../dummyData';
import Article from './Article';

function App() {

  const [data,setData] = useState(dummyData);

  return (
    <>
      <h3 className="text-3xl font-bold underline">hello!</h3>
      {data.map((section) =>
          <div className='mx-auto w-1/2'><Article key={section.id} name={section.name} 
          image= {section.image}
          maleSaunaTemp ={section.male.saunaTemp} maleColdBath={section.male.coldBath} 
          maleAirBath = {section.male.airBath} maleLouryu = {section.male.louryu}
          femaleSaunaTemp ={section.female.saunaTemp} femaleColdBath={section.female.coldBath} 
          femaleAirBath = {section.female.airBath} femaleLouryu = {section.female.louryu}
          price={section.price}
          /></div>
        )}
    </>
  );
}

export default App;
