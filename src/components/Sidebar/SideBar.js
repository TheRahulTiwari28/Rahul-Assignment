import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaAngleDown} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {FiUserPlus} from 'react-icons/fi'
import './sidebar.css';

const SideBar = () => {
    return (
        <>
        <div className="navigation">
            <ul>
                <div className="student">
                    <li>
                        <NavLink to='/'>
                            <span className='title'>Student</span>
                            <span className='icon'><FaAngleDown/></span>
                        </NavLink>
                    </li>
                </div>
                <li>
                    <NavLink to='/'>
                        <span className='icon'> <HiUserGroup/> </span>
                        <span class="title">View Student</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        <span className='icon'> <FiUserPlus/> </span>
                        <span class="title">View Student</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default SideBar
