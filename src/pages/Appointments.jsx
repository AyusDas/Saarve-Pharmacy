import React, { useEffect, useState } from 'react'
import MainLayout from '../Components/base'

const Appointments = () => {

    const [data, setData] = useState(null)
    const getData = async() => {
        let res = await fetch('http://localhost:3000/appointments/')
        let myData = await res.json()
        if(myData) {
            setData(myData)
        }
    }
    useEffect(() => {
        getData()
    },[])

    const priceSort = () => {
        let sortedData = [...data].sort((a,b) => {
            return a.Amount > b.Amount ? 1 : -1
        })
        setData(sortedData)
    }

    const specialSort = () => {
        let sortedData = [...data].sort((a,b) => {
            return a.Speciality > b.Speciality ? 1 : -1
        })
        setData(sortedData)
    }

    return (
        <MainLayout>
            <div className='text-3xl ml-16 my-2 tracking-wide uppercase flex gap-5 items-baseline'>
                Appointments
                <div className='text-sm px-1 py-1 rounded-md shadow-md w-32 bg-white text-center hover:bg-slate-200 cursor-pointer' onClick={() => priceSort()}>
                    Sort By Price
                </div>
                <div className='text-sm px-1 py-1 rounded-md shadow-md w-40 bg-white text-center hover:bg-slate-200 cursor-pointer' onClick={() => specialSort()}>
                    Sort By Speciality
                </div>
            </div>
            <div className='rounded-md shadow-md bg-white w-11/12 mt-5 ml-16'>
                <div className='flex items-center justify-evenly w-full py-5 text-base font-semibold border-b'>
                    <div className='w-40 pl-3'>
                        Doctors Name
                    </div>
                    <div className='w-40 pl-8'>
                        Speciality
                    </div>
                    <div className='w-40 text-center'>
                        Patients Name
                    </div>
                    <div className='w-40 text-center'>
                        Date And Time 
                    </div>
                    <div className='w-40 text-center'>
                        Status
                    </div>
                    <div className='w-20 text-center'>
                        Amount
                    </div>
                </div>
            {   
                data && data.map((item,i)=>{
                    return (
                        <div key={i} className='flex items-center justify-evenly py-5 w-full border-b hover:bg-slate-200'>
                            <div className='w-40'>
                                {JSON.stringify(item.Doctor.name).slice(1,JSON.stringify(item.Doctor.name).length-1)}
                            </div>
                            <div className='w-32'>
                                {JSON.stringify(item.Doctor.Speciality).slice(1,JSON.stringify(item.Doctor.Speciality).length-1)}
                            </div>
                            <div className='w-40'>
                                {JSON.stringify(item.PatientName).slice(1,JSON.stringify(item.PatientName).length-1)}
                            </div>
                            <div className='w-40'>
                                {JSON.stringify(item.DateTime.date).slice(1,JSON.stringify(item.DateTime.date).length-1)}<br/>
                                {JSON.stringify(item.DateTime.time).slice(1,JSON.stringify(item.DateTime.time).length-1)}
                            </div>
                            <div className='w-20 text-center text-green-500 font-semibold'>
                                {JSON.stringify(item.Status).slice(1,JSON.stringify(item.Status).length-1)}
                            </div>
                            <div className='w-20 text-right'>
                                {JSON.stringify(item.Amount).slice(1,JSON.stringify(item.Amount).length-1)}
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div className='h-32'></div>
        </MainLayout>
    )
}      

export default Appointments
