import React from 'react'

const Amenities = (props) => {
    const {shampoo,conditioner,bodySoap,hairDryer} = props;
  return (
    <div>
        <h3 className='text-xl mb-2'>アメニティ</h3>
        <ul className='w-[290px] lg:w-[434px] mx-auto border border-black flex flex-wrap '>
            <li className='border border-black w-36 text-left'>シャンプー<span className='w-5 border float-right text-center'>{shampoo ? "〇":"-"}</span></li>
            <li className='border border-black w-36 text-left'>コンディショナー<span className=' w-5 border float-right text-center'>{conditioner ? "〇":"-"}</span></li>
            <li className='border border-black w-36 text-left'>ボディソープ<span className='w-5 border float-right text-center'>{bodySoap ? "〇":"-"}</span></li>
            <li className='border border-black w-36 text-left'>ドライヤー<span className='w-5 border float-right text-center'>{hairDryer ? "〇":"-"}</span></li>
        </ul>
    </div>
  )
}

export default Amenities