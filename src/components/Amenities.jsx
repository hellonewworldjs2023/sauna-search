import React from 'react'

const Amenities = (props) => {
    const {shampoo,conditioner,bodySoap,hairDryer} = props;
  return (
    <div>
        <h3 className='text-xl mb-2'>アメニティ</h3>
        <table className='w-3/5 mx-auto border-2 border-black '>
          <tbody>
            <tr>
                <td className='border border-black w-22 text-left'>シャンプー</td><td className='border border-black'>{shampoo ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>コンディショナー</td><td className='border border-black'>{conditioner ? "〇":"-"}</td>
                <td className='border border-black w-22 text-left'>ボディソープ</td><td className='border border-black'>{bodySoap ? "〇":"-"}</td>
            </tr>
            <tr>
            <td className='border border-black w-22 text-left'>ドライヤー</td><td className='border border-black'>{hairDryer ? "〇":"-"}</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Amenities