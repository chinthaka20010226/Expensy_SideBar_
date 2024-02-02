import React from 'react';

function SideBar(){
    return(
        <div className='container'>
            <div className='side-bar'>
                <div className='top-section'>
                    <h1 className='logo'>Logo</h1>
                    <div className='bar'></div>
                </div>
                <div className='body-section'></div>
            </div>
            <main></main>
        </div>
    );
}

export default SideBar;