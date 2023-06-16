import React from 'react'

const SaunaFacility = (props) => {
    const {sex,saunaTemp,coldBathTemp,airBath,
        louryu,autoLouryu,selfLouryu,totonoiSpace} = props
  return (
    <div>
        <p className='text-3xl'>{sex}</p>
        <div className='flex flex-row mx-auto w-48'>
            <div className='mx-5'>
                <img src="../img/sauna-logo.jpg" alt="orz" width="100px" height="100px"/>
                <p><span className='text-red-600'>サウナ<br></br><span className='text-2xl'>{saunaTemp}</span>℃</span></p>
            </div>
            <div className='mx-5'>
            <img src="../img/coldbath-logo.jpg" alt="orz" width="100px" height="100px"/>
                <p><span className='text-blue-600'>水風呂<br></br><span className='text-2xl'>{coldBathTemp}</span>℃</span></p>
            </div>    
        </div>
        <div>
            <p>ロウリュ（アウフグース）：{louryu ? "〇":"-"}</p>
            <p>オートロウリュ：{autoLouryu ? "〇":"-"}</p>
            <p>セルフロウリュ：{selfLouryu ? "〇":"-"}</p>
            <p>外気浴：{airBath ? "〇":"-"}</p>
            <p>ととのいスペース：{totonoiSpace ? "〇":"-"}</p>
        </div>
    </div>
  )
}

export default SaunaFacility