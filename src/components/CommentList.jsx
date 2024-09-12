import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return (
    <div>
      {
        comments.map((comment, index) => {
            return <div key={index}>
                {/* this is the comment */}
                <Comment data={comment}/>
                
                {/* and this is the replies to comment */}
                <div className=' border-l-2 border-l-gray-900 ml-6 pl-3'>
                    <CommentList comments={comment.replies}/>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default CommentList


