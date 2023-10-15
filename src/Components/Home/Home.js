import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';

import './Home.css';

const Home = () => {
    return (
        <>
            <div className='navigation'>
                <div className='user-name'>Hello User 👋</div>
                <div className='search-bar'>
                    {/* <button>
                        <FiSearch />
                    </button> */}
                    <input type='search' placeholder='Search..' className='search' />
                </div>
            </div>
            <div className='card-section'>
                <div className='cards'>
                    <div className='card-item'>
                        <div className='card-logo'>
                            <AiOutlineDollar/>
                        </div>
                        <div className='card-content'>
                            <div className='span-content'>
                                <span className='content-title'>Earning</span>
                                <span className='price'>$198K</span>
                                <span className='rate'><strong>37.8%</strong> this month</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cards'></div>
                <div className='cards'></div>
                <div className='cards'></div>

            </div>
        </>
    )
}

export default Home