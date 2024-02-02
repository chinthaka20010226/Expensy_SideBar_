import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// import '../Style/SideBar.css';

import { 
    MdOutlineDashboardCustomize,
    MdNotificationsNone,
    MdOutlineSettings
} from "react-icons/md";

import { 
    RiBankLine,
    RiBankCardLine,
    RiOrganizationChart
} from "react-icons/ri";

import { 
    TbReportSearch,
    TbFileAnalytics 
} from "react-icons/tb";

import { AiOutlineTransaction } from "react-icons/ai";

const SideBar = ({children}) => {
    const menuItems = [
        {
            path:"/",
            name:"UserDashBoard",
            icon:<MdOutlineDashboardCustomize />
        },
        {
            path:"/analysis",
            name:"Analysis",
            icon:<TbFileAnalytics />
        },
        {
            path:"/bankAccount",
            name:"BankAccount",
            icon:<RiBankLine />
        },
        {
            path:"/bankCard",
            name:"BankCard",
            icon:<RiBankCardLine />
        },
        {
            path:"/notifications",
            name:"Notifications",
            icon:<MdNotificationsNone />
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<RiOrganizationChart />
        },
        {
            path:"/report",
            name:"Report",
            icon:<TbReportSearch />
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<MdOutlineSettings />
        },
        {
            path:"/transactions",
            name:"Transactions",
            icon:<AiOutlineTransaction />
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
                            <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                                <div className='link-icon'>{item.icon}</div>
                                <div className='link-text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
}

export default SideBar;