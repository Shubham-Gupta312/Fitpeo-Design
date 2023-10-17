import React from 'react';
import { AiOutlineDollar } from 'react-icons/ai';
import {GrNotes} from 'react-icons/gr';
import {BiSolidWalletAlt} from 'react-icons/bi';
import {FaBagShopping} from 'react-icons/fa6';

import './Home.css';
import Graph from '../Graph/Graph';

const Home = () => {
    const cardArray = [
        {
            id: 1,
            title: "Earning",
            price: "$198K",
            rate: "37.8%",
            rate_text: "this month",
            logo: <AiOutlineDollar className='dollar'/>

        },
        {
            id: 2,
            title: "Orders",
            price: "$2.4K",
            rate: "2%",
            rate_text: "this month",
            logo: <GrNotes className='notes'/>
        },
        {
            id: 3,
            title: "Balance",
            price: "$2.4K",
            rate: "2%",
            rate_text: "this month",
            logo: <BiSolidWalletAlt className='wallet'/>
        },
        {
            id: 4,
            title: "Total Sales",
            price: "$89K",
            rate: "11%",
            rate_text: "this week",
            logo: <FaBagShopping className='bag'/>
        },
    ]
    return (
        <>
            <div className='navigation'>
                <div className='user-name'>Hello User 👋</div>
                <div className='search-bar'>
                    <input type='search' placeholder='Search..' className='search' />
                </div>
            </div>
            <div className='card-section'>
                {
                    cardArray.map((item) => (
                        <div className='cards'>
                            <div className='card-item'>
                                <div className='card-logo'>
                                    {item.logo}
                                </div>
                                <div className='card-content'>
                                    <div className='span-content'>
                                        <span className='content-title'>{item.title}</span>
                                        <span className='price'>{item.price}</span>
                                        <span className='rate'><strong>{item.rate}</strong> {item.rate_text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='graph-container'>
                <Graph/>
            </div>
        </>
    )
}

export default Home