import React from 'react'

const Service = (props) => {
    const {allTime,restArea,eatingSpace,comics,waterDispenser,parkingArea} = props
  return (
    <div >
        <h3 className='text-xl mb-2'>設備</h3>
        <table className='w-1/2 mx-auto border-2 border-black '>
            <tr>
                <td className='border border-black text-left'>24時間営業</td><td className='border border-black'>{allTime ? "〇":"-"}</td><td className='border border-black text-left'>館内休憩スペース</td><td className='border border-black'>{restArea ? "〇":"-"}</td>
                <td className='border border-black text-left'>食事処</td><td className='border border-black'>{eatingSpace ? "〇":"-"}</td>
            </tr>
            <tr>
                <td className='border border-black text-left'>漫画</td><td className='border border-black'>{comics ? "〇":"-"}</td><td className='border border-black text-left'>給水器</td><td className='border border-black'>{waterDispenser ? "〇":"-"}</td>
                <td className='border border-black text-left'>駐車場</td><td className='border border-black'>{parkingArea ? "〇":"-"}</td>
            </tr>
        </table>
    </div>
  )
}

export default Service