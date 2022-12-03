import React from 'react'

const DoctorFilter = () => {
    return (
        <div className='max-w-[900px] mx-auto border-b-[1px] border-black py-4'>
            <div className='max-w-[720px] w-full mx-auto flex flex-row justify-between items-center '>
                <div className='my-2 flex flex-row'>
                    <label className="text-lg font-bold py-1 px-2">Select Hospital</label>
                    <select className='max-w-[250px] bg-[#5cdb95] text-center text-lg rounded-md border-2 border-black' name="types">
                        <option selected value="none">----select----</option>
                        <option value="Patient">Dhaka Medical Hospital</option>
                        <option value="Doctor">Khulna Medical Hospital</option>
                        <option value="Researcher">Rajshahi Medical Hospital</option>
                        <option value="Hospital Admin">Rangpur Medical Hospital</option>
                        <option value="Admin">Chottogram Medical Hospital</option>
                    </select>
                </div>
                <div className='w-[250px] my-2 flex flex-row'>
                    <input className='border-b-2 bg-[#5cdb95] border-black px-2 py-1' name='search' type='name' placeholder='Name/Speciality' />
                    <button className='px-6 py-2 rounded-md bg-purple-600 ml-4'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorFilter