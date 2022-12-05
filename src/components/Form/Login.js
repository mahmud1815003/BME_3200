import React from 'react'

const Login = () => {
    return (
        <div className='w-full h-full mx-auto'>
            <form className='max-w-[550px] flex flex-col items-center mx-auto px-6 py-4 bg-purple-500 rounded-md'>
            <div className='my-2 flex flex-col bg-purple-500'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='username' type='text' placeholder='User Name' />
            </div>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='text' placeholder='Password' />
            </div>
            <div className='my-2 flex flex-col bg-purple-500'>
                <label className="text-lg font-bold py-1 bg-purple-500">Select Your Account Type</label>
                <select className='max-w-[250px] bg-purple-500 text-lg rounded-md border-2 border-black' name="types">
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Researcher">Researcher</option>
                    <option value="Hospital Admin">Hospital Admin</option>
                    <option value="Hospital Operator">Hospital Operator</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' type='submit'>Login</button>
            <p className='text-red-600 font-bold bg-purple-500'>Error Goes Here</p>
        </form>
        </div>
    )
}

export default Login