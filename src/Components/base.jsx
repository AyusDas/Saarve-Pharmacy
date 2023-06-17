import React from 'react'
import Header from './Header'
import Sidebar from './sidebar'
import './base.css'

const MainLayout = (props) => {
    return (
        <div className='flex flex-col h-full overflow-x-hidden overflow-y-hidden'>
            <Header/>
            <div className='flex h-full'>
                <Sidebar/>
                <div className='bg-[#f7f7f7] w-full overflow-y-auto'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
