import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const inputStyle = 'px-2 py-1 h-10 w-52 border border-gray-300 rounded-md'
    const navigate = useNavigate()
    let loginUser = async(e) => {
        e.preventDefault()
        console.log("login requested")
        let response = await fetch('http://35.154.97.252/api/pharmacy/user/login/',{
            method : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'username':e.target.username.value,
                'password':e.target.password.value
            })
        })

        let data = await response.json()
        console.log("data : ", data)

        if(response.status === 200 ) {
            localStorage.setItem('pharmacy_idToken',JSON.stringify(data.token))
            navigate('/profile')
        }
    }

    return (
        <div className="w-80 absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 border border-slate-300 rounded-md">
            <form className='flex flex-col gap-5 items-center py-8' onSubmit={loginUser}>
                <div>
                    <p className='text-xl py-1'>Username</p>
                    <input type="text" name='username' className={inputStyle}/>
                </div>
                <div>
                    <p className='text-xl py-1'>Password</p>
                    <input type="password" name='password' className={inputStyle}/>
                </div>
                <input type="submit" value="Login" className='px-2 py-1 h-10 w-32 bg-blue-500 text-white font-medium text-lg uppercase rounded-md'/>
            </form>
            <div className='relative bottom-5 translate-y-1/2 w-full text-center'>
                Don't Have An Account ? <Link to='/signup' className='text-blue-600'>Create</Link>
            </div>
        </div>
    )
}

export default Login
