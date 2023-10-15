import React from 'react';
import { PiNut } from 'react-icons/pi';
import { TbHelpOctagonFilled } from 'react-icons/tb';
import { FaMoneyCheck } from 'react-icons/fa6';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { SiOpslevel } from 'react-icons/si';
import './Sidebar.css';
import Home from '../Home/Home';

const Sidebar = () => {
    return (
        <>
            <div className='main-section'>
                <div className='sidebar'>
                    <div className='sidebar-title'>
                        <PiNut />
                        <h2>Dashboard</h2>
                    </div>
                    <div className='sidebar-nav'>
                        <div className='sidebar-items'>
                            <BiSolidShoppingBags />
                            Products
                        </div>
                        <div className='sidebar-items'>
                            <MdOutlineContactSupport />
                            Customers
                        </div>
                        <div className='sidebar-items'>
                            <FaMoneyCheck />
                            Income
                        </div>
                        <div className='sidebar-items'>
                            <SiOpslevel />
                            Promote
                        </div>
                        <div className='sidebar-items'>
                            <TbHelpOctagonFilled />
                            Help
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <Home/>
                </div>
            </div>
        </>

    )

}

export default Sidebar