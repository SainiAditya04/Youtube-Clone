import React from 'react'

const Button = ({name}) => {
    return (
        <div>
            <button
            className=' text-sm bg-gray-200 px-4 py-2 rounded-md'
            >
                {name}
            </button>
        </div>
    )
}

export default Button
