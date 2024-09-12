import React from 'react'
import Button from './Button'

const nameList = [
  "All",
  "Sports",
  "Live",
  "Knowledge",
  "News",
  "Gaming",
  "Songs",
  "Trending",
  "Javascript",
  "Data Structures",
  "Algorithm",
  "Sitcom"
]

const ButtonList = () => {
  return (
    <div className='flex gap-3 m-3'>
      {
        nameList.map((name, index) => {
          return <Button name={name} key={index}/>
        })
      }
    </div>
  )
}

export default ButtonList
