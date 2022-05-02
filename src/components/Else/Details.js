import React from 'react'
import { NavLink } from 'react-router-dom';
import data from './mock-data.json';

const Details = () => {
    return (
        <>
        <div className="details">
            <div className="recantstudent">
                <table>
                    <thead>
                        <tr>
                            <td>ID’V</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>School</td>
                            <td>Class</td>
                            <td>Divison</td>
                            <td>Status</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((contact) => (
                            <tr>
                                <td>{contact.Id}</td>
                                <td>{contact.name}</td>
                                <td>{contact.age}</td>
                                <td>{contact.school}</td>
                                <td>{contact.class}</td>
                                <td>{contact.divison}</td>
                                <td>{contact.status}</td>
                                <td>
                                    <NavLink className='line' to="/">Edit</NavLink>
                                    <NavLink className='line-1' to="/">Delete</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div> 
        </>
    )
}

export default Details
