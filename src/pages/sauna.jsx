import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Amenities from '../components/Amenities';
import Information from '../components/Information';
import Paying from '../components/Paying';
import Rental from '../components/Rental';
import SaunaFacility from '../components/SaunaFacility';
import Service from '../components/Service';
import WeatherForecast from '../components/WeatherForecast';
import dummyData from '../dummyData';


const Sauna = () => {
    const {saunaId} = useParams();
    const index = saunaId -1;
    const [data,setData] = useState(dummyData);
    const saunaData = data[index];
    

  return (
    <div className='text-center'>
      <div className='w-1/1 lg:w-3/5 bg-white mx-auto '>
        <h1 className='text-4xl font-bold mb-12'>{saunaData.name}</h1>
        <div className='mb-10'>
          <SaunaFacility sex="男湯" saunaTemp={saunaData.male.saunaTemp} coldBathTemp={saunaData.male.coldBath}
          airBath={saunaData.male.airBath} louryu={saunaData.male.louryu} autoLouryu={saunaData.male.autoLouryu}
          selfLouryu={saunaData.male.selfLouryu} totonoiSpace={saunaData.male.totonoiSpace}/>
        </div>
        <div className='mb-10'>
          <SaunaFacility sex="女湯" saunaTemp={saunaData.female.saunaTemp} coldBathTemp={saunaData.female.coldBath}
          airBath={saunaData.female.airBath} louryu={saunaData.female.louryu} autoLouryu={saunaData.female.autoLouryu}
          selfLouryu={saunaData.female.selfLouryu} totonoiSpace={saunaData.female.totonoiSpace}/>
        </div>
        <div className='mb-10'>
          <Service allTime={saunaData.service.allTime} restArea={saunaData.service.restArea} eatingSpace={saunaData.service.eatingSpace}
          comics={saunaData.service.comics} waterDispenser={saunaData.service.waterDispenser} parkingArea={saunaData.service.parkingArea}/>
        </div>
        <div className='mb-10'>          
          <Paying  cash={saunaData.paying.cash} credit={saunaData.paying.credit} eMoney={saunaData.paying.eMoney}/>
        </div>
        <div className='mb-10'>
          <Rental faceTowel={saunaData.rental.faceTowel} bathTowel={saunaData.rental.bathTowel} indoorWear={saunaData.rental.indoorWear}
            mat={saunaData.rental.mat}/>
        </div>
        <div className='mb-10'>
          <Amenities shampoo={saunaData.amenities.shampoo} conditioner={saunaData.amenities.conditioner} bodySoap={saunaData.amenities.bodySoap}
          hairDryer={saunaData.amenities.hairDryer}/>
        </div>
        <div className='mb-10'>
          <Information image={saunaData.image} name={saunaData.name} adress={saunaData.adress} tel={saunaData.tel} page={saunaData.page}/>
        </div>
        <div className='mb-10'>
          <WeatherForecast/>
        </div>
        <div className=''>
          <Link to="/">
            <h2 className='text-xl'>戻る</h2>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Sauna