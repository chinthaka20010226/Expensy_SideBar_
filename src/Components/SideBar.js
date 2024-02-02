import React from 'react';
import IMEGES from '../Assets/index';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SideBar(){
    const menuItems = [
        {
            path:"/analysis",
            name:"Analysis",
            icon:<IMEGES.analysis_icon />
        },
        {
            path:"/bankAccount",
            name:"BankAccount",
            icon:<IMEGES.bank_account_icon />
        },
        {
            path:"/bankCard",
            name:"BankCard",
            icon:<IMEGES.bank_card_icon />
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<IMEGES.notification_icon />
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<IMEGES.organization_icon />
        },
        {
            path:"/report",
            name:"Report",
            icon:<IMEGES.report_icon />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<IMEGES.setting_icon />
        },
        {
            path:"/transactions",
            name:"Transactions",
            icon:<IMEGES.transaction_icon />
        },
        {
            path:"/userDashBoard",
            name:"UserDashBoard",
            icon:<IMEGES.dashboard_icon />
        }
    ]

    return(
        <div className='container'>
            <div className='side-bar'>
                <div className='top-section'>
                    <h1 className='logo'>Logo</h1>
                    <div className='bar'>
                        <FaBars />
                    </div>
                </div>
                <div className='body-section'>
                    {
                        menuItems.map((item,index) => (
                            <NavLink to={item.path} key={index} className="link">
                                <div className='link-icon'>{item.icon}</div>
                                <div className='link-text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;