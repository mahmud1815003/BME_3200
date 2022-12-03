import React from 'react'
import Hospital from './Hospital'

const InstituteHero = () => {
    return (
        <>
            <div className='w-full h-screen bg-[#5cdb95]'>
                <div className='max-w-[1000px] mx-auto py-6'>
                    <div className='grid grid-cols-3 gap-x-4 text-xl font-bold text-center'>
                        <div>SL No.</div>
                        <div>Name</div>
                        <div>Address</div>
                    </div>
                    <Hospital sl={1} name={`Bangabandhu Sheikh Mujib Medical University`}
                        address={`Shahbag, Dhaka-1000
                            Bangladesh.`} />
                    <Hospital sl={1} name={`Dhaka Medical College Hospital
Dhaka`}
                        address={`Shahbag, Dhaka-1000
                            Bangladesh.`} />
                    <Hospital sl={1} name={`Bangabandhu Sheikh Mujib Medical University`}
                        address={`Shahbag, Dhaka-1000
                            Bangladesh.`} />
                </div>
            </div>
        </>
    )
}

export default InstituteHero