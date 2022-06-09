import { useState } from 'react';
import * as AiIcon from 'react-icons/ai';

import './Sidebar.css';

function Sidebar() {

    return (
            
        <>
            <div className="sidebar flex flex-col w-60">
                <div className="sidebar-header flex justify-center items-center m-3">
                    <div className="avatar w-9 h-9">
                        <img src="https://avatars.githubusercontent.com/u/74342663" alt="" className=' rounded-full' />
                    </div>
                    <span className='mx-2 mr-9'>Username</span>
                    <button className="leftToggle">
                        <AiIcon.AiOutlineDoubleLeft className=' text-gray-600 w-6 h-6'/>
                    </button>

                </div>
                <div className="sidebar-menu flex flex-col">

                </div>
            </div>
        </>
    )
}

export default Sidebar