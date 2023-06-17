import React, { useState, useEffect } from 'react'
import MainLayout from '../Components/base'

const Patients = () => {
    const [patientData, setPatientData] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/patients/')
        .then((res) => res.json())
        .then((data) => {
            setPatientData(data)
        })
    },[])

    const priceSort = () => {
        let sortedData = [...patientData].sort((a,b) => {
            return a.paid > b.paid ? 1 : -1
        })
        setPatientData(sortedData)
    }

    return (
        <MainLayout>
            <div className='text-3xl ml-5 my-2 tracking-wide uppercase flex gap-5 items-baseline'>
                Patients
                <div className='text-sm px-1 py-1 rounded-md shadow-md w-32 bg-white text-center hover:bg-slate-200 cursor-pointer' onClick={() => priceSort()}>
                    Sort By Price
                </div>
            </div>
            <div className='rounded-md shadow-md bg-white w-11/12 mt-5 ml-5'>
                <div className='flex items-center justify-evenly w-full py-5 text-base font-semibold border-b'>
                    <div className='w-10'>
                        id
                    </div>
                    <div className='w-32 text-center'>
                        Name
                    </div>
                    <div className='w-10'>
                        Age
                    </div>
                    <div className='w-80 text-center'>
                        Address
                    </div>
                    <div className='w-28'>
                        Last Visited 
                    </div>
                    <div className='w-10'>
                        Paid
                    </div>
                    <div className='w-28 pl-3'>
                        Phone
                    </div>
                </div>
            { 
                patientData && patientData.map((item,i)=>{
                    return (
                        <div key={i} className='flex items-center justify-evenly py-5 w-full border-b hover:bg-slate-200'>
                            <div className='w-10 text-left'>
                                {JSON.stringify(item.id)}
                            </div>
                            <div className='w-32 pl-3'>
                                {JSON.stringify(item.name).slice(1,JSON.stringify(item.name).length-1)}
                            </div>
                            <div className='w-10'>
                                {JSON.stringify(item.age)}
                            </div>
                            <div className='w-80'>
                                {JSON.stringify(item.address).slice(1,JSON.stringify(item.address).length-1)}
                            </div>
                            <div className='w-28'>
                                {JSON.stringify(item.last_visited).slice(1,JSON.stringify(item.last_visited).length-1)}
                            </div>
                            <div className='w-10 text-green-500 font-semibold'>
                                {JSON.stringify(item.paid)}
                            </div>
                            <div className='w-28'>
                                {JSON.stringify(item.phone).slice(1,JSON.stringify(item.phone).length-1)}
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

export default Patients
