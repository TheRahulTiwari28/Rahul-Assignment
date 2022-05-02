import React from 'react'

const Filter = () => {
    return (
        <>
        <div className="filter">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Age"/>
            <select id="school" className="opt">
                <option value="Model">Model</option>
                <option value="Model">Model</option>
                <option value="Model">Model</option>
                <option value="Model">Model</option>
            </select>
            <select id="Class" className="opt">
                <option value="">Class</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <select id="Divison" className="opt">
                <option value="">Divison</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <input type="search" placeholder="Search"/>
        </div>
        </>
    )
}

export default Filter
