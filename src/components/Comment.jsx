import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'


const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='bg-gray-100 shadow-md rounded-md flex gap-2 items-center p-2 m-2'>

            <div>
                <FontAwesomeIcon icon={faUser} className=' border-2 border-gray-500 bg-gray-100 p-[4px] text-xl text-gray-500 rounded-full' />
            </div>

            <div className='text-sm'>
                <p className='font-semibold'>@{name}</p>
                <p>{text}</p>
            </div>

        </div>
    )
}

export default Comment

