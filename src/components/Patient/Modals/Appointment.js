import React from 'react'

const Appointment = ({ modalState, setModalState }) => {
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] rounded-md translate-y-[-50%] bg-[#150050] w-[650px] py-6'>
            <form className='flex flex-col items-center mx-auto px-6 py-4 rounded-md bg-[#150050]'>
                <h1 className='py-4 text-4xl font-bold bg-[#150050] text-white'>Make Appointment</h1>
                <h1 className='bg-[#150050] text-white text-center font-bold text-2xl'>Doctor's Name</h1>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <h1 className='bg-[#150050] text-white text-center'>Available Day's</h1>
                    <div className='grid grid-cols-2 bg-[#150050] gap-1'>
                        <h1 className='bg-[#150050] text-white '>Sunday</h1>
                        <h1 className='bg-[#150050] text-white'>8pm-10pm</h1>
                    </div>
                </div>
                <div className='my-2 flex flex-col bg-[#150050]'>
                    <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1' name='day' type='text' placeholder='Prefered Day' />
                    <input className='w-[350px] border-b-2 bg-[#150050] border-white px-2 py-1 mt-2' name='time' type='text' placeholder='Prefered Time' />
                </div>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' type='submit'>Confirm</button>
                <button className='max-w-[250px] bg-[#FB2576] text-white px-4 py-2 rounded-md my-2' onClick={() => setModalState(!modalState)} >Cancel</button>
            </form>
        </div>
    )
}

export default Appointment