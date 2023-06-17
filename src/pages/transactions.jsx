import React, { useState, useEffect } from 'react'
import MainLayout from '../Components/base'
import { Link } from 'react-router-dom'

const Transactions = () => {
    const [transactionData, setTransactionData] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3000/transactions/')
        .then((res) => res.json())
        .then((data) => {
            setTransactionData(data)
        })
    },[])

    const priceSort = () => {
        let sortedData = [...transactionData].sort((a,b) => {
            return a.name > b.name ? 1 : -1
        })
        setTransactionData(sortedData)
    }

    return (
        <MainLayout>
            <div className='text-3xl ml-5 my-2 tracking-wide uppercase flex gap-5 items-baseline'>
                Transactions
                <div className='text-sm px-1 py-1 rounded-md shadow-md w-32 bg-white text-center hover:bg-slate-200 cursor-pointer' onClick={() => priceSort()}>
                    Sort By Name
                </div>
            </div>
            <div className='rounded-md shadow-md bg-white w-11/12 mt-5 ml-5'>
                <div className='flex items-center justify-evenly w-full py-5 text-base font-semibold border-b'>
                    <div className='w-28'>
                        Invoice ID
                    </div>
                    <div className='w-28'>
                        Patient ID
                    </div>
                    <div className='w-32'>
                        Name
                    </div>
                    <div className='w-10'>
                        Amount
                    </div>
                    <div className='w-10'>
                        Status 
                    </div>
                </div>
            { 
                transactionData && transactionData.map((item,i)=>{
                    return (
                        <div key={i} className='flex items-center justify-evenly py-5 w-full border-b hover:bg-slate-100 cursor-pointer'>
                            <Link to={`/transactions/${item.invoice_id}`}>
                            <div className='w-28 text-blue-600'>
                                #{item.invoice_id}
                            </div>
                            </Link>
                            <div className='w-28'>
                                {item.patient_id}
                            </div>
                            <div className='w-32'>
                                {item.name}
                            </div>
                            <div className='w-10'>
                                $ {item.amount}
                            </div>
                            <div className='w-10 text-green-500 font-semibold uppercase'>
                                {item.status}
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

export default Transactions
