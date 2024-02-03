import React from 'react';

import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function SettingBank(){
    const menuItems = [
        {
            path:"",
            name:"Payments Notification",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Payments Help Center",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Payment Two Factor Verification",
            icon:<IoIosArrowDropright />
        },
        {
            path:"",
            name:"Advance Bank Setting",
            icon:<IoIosArrowDropright />
        },
    ]

    return(
        <div className='setting-bank-container container'>
            <div className='row'>
                <div className='col'>
                    <h1>Bank</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <div className='col'>
                            <RiUserSettingsLine />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            {
                                menuItems.map((item,index) => (                                                                     
                                    <div className=''>
                                        <div className=''>{item.name}</div>
                                        <NavLink to={item.path} key={index} className=''>
                                            {item.icon}
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingBank;