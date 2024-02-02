import React from 'react';
import IMAGES from '../Assets/index';
import { FaBars } from 'react-icons/fa'

import '../Style/SideBar.css';

function SideBar(){
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
                    <div>
                        <img src={IMAGES.setting_icon} alt=''></img>
                    </div>
                </div>
            </div>
            <main></main>
        </div>
    );
}

export default SideBar;