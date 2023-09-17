import React,{ useEffect, useState } from 'react'
import dummyComment from '../dummyComment';

const Comment = (props) => {

    const [comments,setComment] = useState(dummyComment);
    const {name} = props;

    useEffect(() => {
      const copy_comments = [...comments];
      const filtered_comments = copy_comments.filter(comment => comment.facility_name === name) 
      setComment(filtered_comments); 
    },[]);
    

  return (
    <>
      <h2 className=' text-left text-2xl md:w-3/4 mx-auto'>みんなのコメント</h2>
      {comments.map((section) =>

        <div key={section.id} className="text-left border-b-2 border-gray-300 md:w-3/4 mx-auto mt-6 mb-6">
          <h2 className='text-lg'>{section.title}</h2>
          <p className='text-gray-600 text-sm mb-1'>{section.date}</p>
          <p className='font-bold mb-2'>{section.user_name}</p>
          <p className='break-all mb-4'>{section.commnet}</p>

        </div>

      )}
      <div>
      <form action="" method="get" class="">
        <div class="">
          <label for="name">Enter your name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div class="">
          <label for="title">Enter title: </label>
          <input type="text" name="title" id="title" required />
        </div>
        <div class="">
          <label for="comment">Enter comment: </label>
          <input type="textarea" name="comment" id="comment" required />
        </div>
        <div class="form-example">
          <input type="submit" value="コメントする" />
        </div>
      </form>

      </div>
    </>
  )
}

export default Comment