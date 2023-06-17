import React from 'react'
import './base.css'
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <div className='w-56 h-full flex flex-col bg-cyan-700 pr-1'>
        <ul className='w-52 h-full flex flex-col gap-4 py-3 overflow-x-hidden overflow-y-auto bg-cyan-700 px-2'>
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'>Dashboard</li>
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'><Link to="/appointments">Appointments</Link></li>
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'>Doctors</li>
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'><Link to="/patients">Patients</Link></li>            
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'>Profile</li>    
            <li className='text-white text-xl hover:text-gray-300 list-font pl-1'><Link to="/transactions">Transactions</Link></li>
            <br/>
            <br/>
        </ul>
        </div>
    )
}

export default Sidebar
