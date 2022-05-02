import React from 'react'
import Hero from '../components/Hero/Hero'
import SideBar from '../components/Sidebar/SideBar'

const Home = () => {
    return (
        <>
        <div className='container'>
            <SideBar/>
            <Hero/>
        </div>
        </>
    )
}

export default Home
