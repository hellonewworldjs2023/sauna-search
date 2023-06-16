import React from 'react'

const Article = (props) => {
  const {name,image,area,maleSaunaTemp,maleColdBath,maleAirBath,maleLouryu,
    femaleSaunaTemp,femaleColdBath,femaleAirBath,femaleLouryu,price} =props;

  return (
    <div >
        <div className='flex flex-row mb-6'>
          <img src={image} alt="orz" height="130" width="160"></img>
          <div>
            <h2 className='font-bold text-xl'>{name}</h2>
            <p>{area}</p>
            <div className='flex flex-row'>
              <h1><span className='rounded-md bg-blue-600 text-white'>男</span>　㋚{maleSaunaTemp}水{maleColdBath}外{maleAirBath ? "〇":"-"}ロ{maleLouryu ? "〇":"-"}</h1>
              <p>　　　<span className='rounded-md bg-red-500 text-white'>女</span>　㋚{femaleSaunaTemp}水{femaleColdBath}外{femaleAirBath ? "〇":"-"}ロ{femaleLouryu ? "〇":"-"}</p>
            </div>
            <p>￥{price}～</p>
          </div>
        </div>
        <div className='border-b-2'></div>
    </div>

  )
}

export default Article