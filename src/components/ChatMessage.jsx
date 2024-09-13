import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';


const ChatMessage = ({name, message}) => {
    return (
        <div className='flex gap-3 items-center py-1'>
            <div>
                <FontAwesomeIcon icon={faUser} className=' border-2 border-black p-[3px] rounded-full' />
            </div>

            <div className='flex gap-2 items-center text-sm'>
                <p className='font-semibold'>{name}</p>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage
