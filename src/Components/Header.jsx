import React from 'react'
import notify from '../assets/notifications.svg'
import './base.css'

const Header = () => {
    return (
        <header className="border border-gray-100 sticky z-10 w-full">
            <ul className="flex justify-between px-3 items-center h-full py-3">
                <li className='text-3xl list-font'>SAARVE</li>
                <li>
                    <img src={notify} className='h-5 w-5'/>
                </li>
                {/* header components go here */}
            </ul>
        </header>
    ) 
} 

export default Header
