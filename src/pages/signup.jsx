import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const inputStyle = 'px-2 py-1 h-10 w-11/12 border border-gray-300 rounded-md'
    const navigate = useNavigate()

    let loginUser = async(e) => {
        e.preventDefault()
        console.log("login requested")
        let response = await fetch('http://35.154.97.252/api/pharmacy/user/signup/',{
            method : 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                'username':e.target.username.value,
                'name':e.target.full_name.value,
                'password':e.target.password.value,
                'confirm_password':e.target.confirm_password.value,
                'email':e.target.email.value,
                'phone_number':e.target.phone_number.value,
                'phramacy_reg_no':'12345'
            })
        })

        let data = await response.json()
        console.log("data : ", data)

        if(response.status === 200) {
            localStorage.setItem('pharmacy_idToken',JSON.stringify(data.token))
            navigate('/verify')
        }
    }

    return (
        <div className="w-80 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border border-slate-300 rounded-md">
            <form className='flex flex-col gap-5 items-center py-8 w-full' onSubmit={loginUser}>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Username</p>
                    <input type="text" name='username' className={inputStyle}/>
                </div>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Full name</p>
                    <input type="text" name='full_name' className={inputStyle}/>
                </div>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Email</p>
                    <input type="email" name='email' className={inputStyle}/>
                </div>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Password</p>
                    <input type="password" name='password' className={inputStyle}/>
                </div>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Confirm Password</p>
                    <input type="password" name='confirm_password' className={inputStyle}/>
                </div>
                <div className='w-4/5'>
                    <p className='text-xl py-1'>Phone Number</p>
                    <input type="text" name='phone_number' className={inputStyle}/>
                </div>
                <input type="submit" value="Sign Up" className='px-2 py-1 h-10 w-32 bg-blue-500 text-white font-medium text-lg uppercase rounded-md'/>
            </form>
            <div className='relative bottom-5 translate-y-1/2 w-full text-center'>
                Already Have An Account ? <Link to='/login' className='text-blue-600'>Login</Link>
            </div>
        </div>
    )
}

export default Signup
