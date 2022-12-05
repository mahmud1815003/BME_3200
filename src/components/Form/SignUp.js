import React from 'react'

const SignUp = () => {
  return (
    <div className='w-full h-full mx-auto'>
            <h1 className='text-4xl text-center py-4 font-bold'>Pateint/Researcher Sign Up</h1>
            <form className='bg-purple-500 max-w-[550px] flex flex-col items-center mx-auto px-6 py-4 bg-purple-500 rounded-md'>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='username' type='text' placeholder='Name' />
                <p className='text-[#DC143C] text-sm bg-purple-500'>Error Goes Here</p>
            </div>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='email' type='email' placeholder='Email' />
                <p className='text-[#DC143C] text-sm bg-purple-500'>Error Goes Here</p>
            </div>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='mobile' type='text' placeholder='Mobile (Ex: 017XX..)' />
                <p className='text-[#DC143C] text-sm bg-purple-500'>Error Goes Here</p>
            </div>
            <div className='my-2 flex flex-col'>
                <input className='max-w-[250px] border-b-2 bg-purple-500 border-black px-2 py-1' name='password' type='text' placeholder='Password' />
                <p className='text-[#DC143C] text-sm bg-purple-500'>Error Goes Here</p>
            </div>
            <div className='my-2 flex flex-col bg-purple-500'>
                <label className="text-lg font-bold py-1 bg-purple-500">Select Your Account Type</label>
                <select className='max-w-[250px] bg-purple-500 text-lg rounded-md border-2 border-black' name="types">
                    <option value="Patient">Patient</option>
                    <option value="Researcher">Researcher</option>
                </select>
            </div>
            <button className='max-w-[250px] bg-black text-white px-4 py-2 rounded-md my-2' type='submit'>Login</button>
            <h1 className='bg-purple-500'>*Give Institutional Mail For Researcher</h1>
        </form>
        
        </div>
  )
}

export default SignUp