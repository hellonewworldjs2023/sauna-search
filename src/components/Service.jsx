import React from 'react'

const Service = (props) => {
    const {allTime,restArea,eatingSpace,comics,waterDispenser,parkingArea} = props
  return (
    <div >
        <h3 className='text-xl mb-2'>設備</h3>
        <ul className='w-[290px] lg:w-[482px] mx-auto flex flex-wrap border border-black '>
                <li className='border w-36 lg:w-40 border-black text-left '>24時間営業<span className='w-5 border text-center  float-right '>{allTime ? "〇":"-"}</span></li><li className='border w-36 lg:w-40 border-black text-left'>館内休憩スペース<span className='w-5 border text-center float-right'>{restArea ? "〇":"-"}</span></li>
                <li className='border w-36 lg:w-40 border-black text-left'>食事処<span className='w-5 border text-center float-right'>{eatingSpace ? "〇":"-"}</span></li>
                <li className='border w-36 lg:w-40 border-black text-left'>漫画<span className=' w-5 border text-center float-right'>{comics ? "〇":"-"}</span></li><li className='border w-36 lg:w-40 border-black text-left'>給水器<span className='w-5 border text-center float-right'>{waterDispenser ? "〇":"-"}</span></li>
                <li className='border w-36 lg:w-40 border-black text-left'>駐車場<span className='w-5 border text-center float-right' >{parkingArea ? "〇":"-"}</span> </li>
        </ul>
    </div>
  )
}

export default Service