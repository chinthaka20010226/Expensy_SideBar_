import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const Setting = ({children}) => {
    const menuItems = [
        {
            path:"settingBank",
            name:"Bank"
        },
        {
            path:"settingNotification",
            name:"Notification"
        },
        {
            path:"settingEmail",
            name:"Email"
        },
        {
            path:"settingAPI",
            name:"API"
        },
        {
            path:"settingTeam",
            name:"Team"
        },
        {
            path:"settingPassword",
            name:"Password"
        }
    ]

    return(
        <div className='container setting-container'>
            <div className='row setting-top-bar'>
                <div className='col'>
                    <h1 className='top-bar-title'>Setting</h1>
                    <div className='top-bar-items'>
                        {
                            menuItems.map((item,index) => (
                                <NavLink to={item.path} key={index} className='link_' activeclassName='active_'>
                                    <div className='link_-text'>{item.name}</div>                                                                                              
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Setting;