import React from 'react'

const Rental = (props) => {
   const {faceTowel,bathTowel,indoorWear,mat} = props;
  return (
    <div>
        <h3 className='text-xl mb-2'>タオル・館内着・サウナマット</h3>
        <table className='w-3/5 mx-auto border-2 border-black '>
            <tr>
                <td className='border border-black w-22 text-left'>レンタルフェイスタオル</td><td className='border border-black'>{faceTowel ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>レンタルバスタオル</td><td className='border border-black'>{bathTowel ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>館内着</td><td className='border border-black'>{indoorWear ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>サウナマット</td><td className='border border-black'>{mat ? "〇":"-"}</td>
            </tr>
        </table>
    </div>
  )
}

export default Rental