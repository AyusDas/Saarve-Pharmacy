import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const OTPVerify = () => {
    const inputStyle = 'px-2 py-1 h-10 w-52 border border-gray-300 rounded-md'
    const navigate = useNavigate()
    let loginUser = async(e) => {
        e.preventDefault()
        console.log("login requested")
        let response = await fetch('http://35.154.97.252/api/pharmacy/user/verify/',{
            method : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'email_otp': e.target.email_otp.value,
                'phone_otp': e.target.phone_otp.value,
                'email' : 'demo@gmail.com',
                'phone_number': '123456789'
            })
        })

        let data = await response.json()
        console.log("data : ", data)

        if(response.status === 200) {
            navigate('/profile')
        }
    }

    return (
        <div className="w-80 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border border-slate-300 rounded-md">
            <form className='flex flex-col gap-5 items-center py-8' onSubmit={loginUser}>
                <div className='hidden'>
                    <p className='text-xl py-1'>Email</p>
                    <input type="email" name='email' className={inputStyle}/>
                </div>
                <div className='hidden'>
                    <p className='text-xl py-1'>Phone Number</p>
                    <input type="text" name='phone_number' className={inputStyle}/>
                </div>
                <div>
                    <p className='text-xl py-1'>Email OTP</p>
                    <input type="text" name='email_otp' className={inputStyle}/>
                </div>
                <div>
                    <p className='text-xl py-1'>Phone Number OTP</p>
                    <input type="text" name='phone_otp' className={inputStyle}/>
                </div>
                <input type="submit" value="Login" className='px-2 py-1 h-10 w-32 bg-blue-500 text-white font-medium text-lg uppercase rounded-md'/>
            </form>
            <div className='relative bottom-5 translate-y-1/2 w-full text-center'>
                Did Not Get OTP ? <Link to='/signup' className='text-blue-600'>Resend</Link>
            </div>
        </div>
    )
}

export default OTPVerify
