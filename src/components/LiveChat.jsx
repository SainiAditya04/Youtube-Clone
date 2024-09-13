import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
    const [myLiveMessage, setMyLiveMessage] = useState("");
    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling here 
            dispatch(addMessage({
                name: "Karan kumar",
                message: "winter is coming"
            }))
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='border-2 w-[400px] h-[500px] ml-4 mt-2 p-2 rounded-md overflow-y-scroll flex flex-col-reverse bg-slate-100'>
                live chat
                {
                    chatMessages.map((liveMessage, index) => {
                        return <ChatMessage
                            key={index}
                            name={liveMessage.name}
                            message={liveMessage.message}
                        />
                    })
                }
            </div>

            <form className='w-full m-2' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({ name: "Aditya", message:myLiveMessage }))
                setMyLiveMessage("");
            }}>
                <input
                    type="text"
                    placeholder='message here'
                    className='py-1 px-2 w-[250px] bg-slate-100 rounded-sm border border-slate-200'
                    value={myLiveMessage}
                    onChange={(e) => setMyLiveMessage(e.target.value)}
                />
                <button
                    className='border border-slate-400 bg-slate-300 rounded-md px-2 ml-2'
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default LiveChat
