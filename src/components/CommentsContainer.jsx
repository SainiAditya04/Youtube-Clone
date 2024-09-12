import React from 'react'
import { commentsData } from '../utils/commentsData'
import Comment from './Comment'
import CommentList from './CommentList'


const CommentsContainer = () => {
  return (
    <div className='p-2'>
      <p className='text-xl font-bold'>Comments:</p>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer

