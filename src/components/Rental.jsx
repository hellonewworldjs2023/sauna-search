import React from 'react'

const Rental = (props) => {
   const {faceTowel,bathTowel,indoorWear,mat} = props;
  return (
    <div>
        <h3 className='text-xl mb-2'>タオル・館内着・サウナマット</h3>
        <ul className='w-48 2xl:w-[770px] lg:w-[386px] mx-auto flex flex-wrap border border-black '>
            <li className='border border-black w-48 text-left'>レンタルフェイスタオル<span className='border w-5 float-right text-center'>{faceTowel ? "〇":"-"}</span></li>
            <li className='border border-black w-48 text-left'>レンタルバスタオル<span className='border w-5 float-right text-center'>{bathTowel ? "〇":"-"}</span></li>
            <li className='border border-black w-48 text-left'>館内着<span className='border w-5 float-right text-center'>{indoorWear ? "〇":"-"}</span></li>
            <li className='border border-black w-48 text-left'>サウナマット<span className='border w-5 float-right text-center'>{mat ? "〇":"-"}</span></li>
        </ul>
    </div>
  )
}

export default Rental