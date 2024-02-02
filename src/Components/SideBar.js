import React from 'react';
import IMEGES from '../Assets/index';
import { FaBars } from 'react-icons/fa';

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
                <div className='body-section'></div>
            </div>
        </div>
    );
}

export default SideBar;