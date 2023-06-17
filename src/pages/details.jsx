import React, {useEffect,useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainLayout from '../Components/base'

const Details = () => {

    let { id } = useParams()
    let param = id.charAt(id.length-1)
    const [Data, setData] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:3000/transactions/'/*+param*/)
        .then((res) => res.json())
        .then((data) => {
            data.map(obj => {
                if(obj.invoice_id === id) {
                    setData(obj)
                }
            })
            //setData(data)
        })
    },[])

    return (
        <MainLayout>
            {
                Data && 
                <div className='rounded-md shadow-md bg-white w-2/5 mt-5 ml-5 px-5 py-2'>
                    <div className='text-2xl pb-2 flex justify-between'>
                        <span>INVOICE ID</span>  
                        <span className='text-blue-600 w-32'>#{id}</span>
                    </div>
                    <div className='text-2xl pb-2 flex justify-between'>
                        <span>PATIENT ID</span>  
                        <span className='text-slate-600 w-32'>#{Data.patient_id}</span>
                    </div>
                    <div className='text-2xl pb-2 flex justify-between'>
                        <span>NAME</span>  
                        <span className='text-slate-600 w-32'>{Data.name}</span>
                    </div>
                    <div className='text-2xl pb-2 flex justify-between'>
                        <span>AMOUNT</span>  
                        <span className='text-slate-600 w-32'>${Data.amount}</span>
                    </div>
                    <div className='text-2xl pb-2 flex justify-between'>
                        <span>Status</span>  
                        <span className='text-green-600 uppercase w-32'>{Data.status}</span>
                    </div>
                </div>
            }
            
        </MainLayout>
    )
}

export default Details
