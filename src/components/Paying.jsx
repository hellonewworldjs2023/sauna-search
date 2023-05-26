import React from 'react'

const Paying = (props) => {
    const {cash,credit,eMoney} =props;
  return (
    <div>
        <h3 className='text-xl mb-2'>支払い方法</h3>
        <table className='w-2/3 mx-auto border-2 border-black '>
            <tr>
                <td className='border border-black w-22 text-left'>現金</td><td className='border border-black'>{cash ? "〇":"-"}</td><td className='border border-black w-22 text-left'>クレジットカード</td><td className='border border-black'>{credit ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>電子マネー</td><td className='border border-black'>{eMoney ? "〇":"-"}</td>
            </tr>
        </table>
    </div>
  )
}

export default Paying