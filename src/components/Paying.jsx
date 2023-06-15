import React from 'react'

const Paying = (props) => {
    const {cash,credit,eMoney} =props;
  return (
    <div>
        <h3 className='text-xl mb-2'>支払い方法</h3>
        <ul className='w-44 lg:w-[530px]  mx-auto flex flex-wrap border border-black '>
            <li className='border w-44 border-black text-left'>現金<span className=' border w-5 float-right text-center'>{cash ? "〇":"-"}</span></li>
            <li className='border w-44 border-black text-left'>クレジットカード<span className='border w-5 float-right text-center'>{credit ? "〇":"-"}</span></li>
            <li className='border w-44 border-black text-left'>電子マネー<span className='border w-5 float-right text-center'>{eMoney ? "〇":"-"}</span></li>
        </ul>
    </div>
  )
}

export default Paying