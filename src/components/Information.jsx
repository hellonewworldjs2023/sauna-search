import React from 'react'

const Information = (props) => {

    const{name, image,adress,tel,page} = props;
    const newimage = "." + image;

  return (
    <div className=''>
       <h2 className='text-xl mb-2'>基本情報</h2>
       <div className='xl:flex md:flex-row md:w-3/4 mx-auto'>
           <div className='mr-5'>
                <img src={newimage} alt="orz" width="440" height="330" className='mx-auto block'/>
           </div>
            
            <div className='text-left'>
                <table>
                    <tbody>
                        <tr>
                            <td>施設名：</td><td>{name}</td>
                        </tr>
                        <tr>
                            <td>住所：</td><td>{adress}</td>
                        </tr>
                        <tr>
                            <td>電話番号：</td><td>{tel}</td>
                        </tr>
                        <tr>
                            <td>ホームページ：</td><td><span className='underline-offset-1'><a href={page} target="_blank">{page}</a></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
       </div>
       
    </div>
  )
}

export default Information