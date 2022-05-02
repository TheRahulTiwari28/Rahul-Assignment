import React from 'react';
import {BiMenu} from 'react-icons/bi';
import {FaAngleLeft, FaAngleRight, FaDownload} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Details from '../Else/Details';
import Filter from '../Else/Filter';
import './Hero.css';

const Hero = () => {
    return (
        <>
        <div className='main'>
            <div className="topbar">
                <h1>View Student</h1>
                <div className="toggle">
                    <BiMenu/>
                </div>
            </div>
            <Filter/>
            <Details/>
            <div className="pagination">
                <NavLink to="/"> <FaAngleLeft/> </NavLink>
                    <div className="pag">
                        <NavLink to="/" className="sec">1</NavLink>
                        <NavLink to="/" className="sec">2</NavLink>
                        <NavLink to="/" className="sec">3</NavLink>
                        <NavLink to="/" className="sec">4</NavLink>
                    </div>
               <NavLink to="/"> <FaAngleRight/> </NavLink>
            </div>
            <div className="btn">
                <NavLink to="/">
                    <button>Download Excel <FaDownload/> </button>
                </NavLink>                
            </div>
        </div>
        </>
    )
}

export default Hero
