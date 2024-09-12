import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import YoutubeLogo from '../assets/img/youtubeLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'


const Header = () => {
    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((state) => state.search);
    // searchCache = {
    //     "ip": ["iphone X", "ip address", "ip university"]
    // }

    useEffect(() => {
        // make an API call after every key press
        // but if the difference between 2 API calls is < 200ms
        // then decline the API call

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions();
            }
        }, 200);

        // this return function will be called when the component
        // is unmounted, when the component is refreshing
        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const jsonData = await data.json();
            setSuggestions(jsonData[1]);
            // update the cache 
            dispatch(
                cacheResults({
                    [searchQuery]: jsonData[1]
                })
            );
        }
        catch (error) {
            console.log("Error while fetching the search results");
            throw error;
        }
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='flex items-center justify-between shadow-md h-[46px]'>
            {/* section1 */}
            <div className='flex gap-4 items-center m-2'>

                <FontAwesomeIcon
                    icon={faBars}
                    className=' text-[20px] cursor-pointer'
                    onClick={() => toggleMenuHandler()}
                />

                <img
                    src={YoutubeLogo}
                    alt="youtube logo"
                    className='w-[110px]'
                />

            </div>

            {/* search bar  */}
            <div className='w-1/2'>
                <div className='flex w-full items-center'>
                    <input
                        type="search"
                        className=' w-3/4 h-[35px] text-md border-2 rounded-l-full px-4 focus:outline-none focus:border-blue-500'
                        placeholder='Search'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='border bg-gray-200 hover:bg-gray-300 h-[35px] px-4 rounded-r-full'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {
                    showSuggestions &&
                    <div className='fixed bg-white rounded-md shadow-md w-[530px]'>
                        <ul>
                            {
                                suggestions.map((suggestion) => (
                                    <li key={suggestion} className='flex items-center gap-2 hover:bg-gray-100 px-3 py-2'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xs' />
                                        {suggestion}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }
            </div>



            {/* section 3 */}
            <div className='flex gap-1 items-center m-2'>
                <FontAwesomeIcon icon={faUser} className=' border-2 border-black p-[3px] rounded-full' />
            </div>
        </div>
    )
}

export default Header
