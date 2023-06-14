import React from 'react'

const Service = (props) => {
    const {allTime,restArea,eatingSpace,comics,waterDispenser,parkingArea} = props
  return (
    <div >
        <h3 className='text-xl mb-2'>設備</h3>
        <ul className='w-1/3 mx-auto border-2 border-black '>
                <li className='border border-black text-left inline '>24時間営業</li><li className='border border-black inline w-4'>{allTime ? "〇":"-"}</li><li className='border border-black text-left inline'>館内休憩スペース</li><li className='border border-black inline lg:block'>{restArea ? "〇":"-"}</li>
                <li className='border border-black text-left inline'>食事処</li><li className='border border-black '>{eatingSpace ? "〇":"-"}</li>
                <li className='border border-black text-left inline'>漫画</li><li className='border border-black'>{comics ? "〇":"-"}</li><li className='border border-black text-left inline'>給水器</li><li className='border border-black inline'>{waterDispenser ? "〇":"-"}</li>
                <li className='border border-black text-left inline'>駐車場</li><li className='border border-black'>{parkingArea ? "〇":"-"}</li> 
        </ul>
    </div>
  )
}

export default Service