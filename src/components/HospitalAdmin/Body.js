import React, {useState} from 'react'
import AddStaff from './AddStaff';
import DoctorList from './DoctorList';
import StaffList from './StaffList';

const Body = () => {
    const [doctor, setDoctor] = useState(true);
    const [app, setApp] = useState(false);
    const [report, setReport] = useState(false);

    const doctorList = () => {
        setDoctor(true);
        setApp(false);
        setReport(false);
    }

    const appointment = () => {
        setDoctor(false);
        setApp(true);
        setReport(false);
    }

    const reportList = () => {
        setDoctor(false);
        setApp(false);
        setReport(true);
    }
    return (
        <div className='bg-[#5cdb95]'>
            <div className='w-full bg-[#5cdb95]  grid grid-cols-3 text-center border-t-[1px] border-black cursor-pointer'>
                <div onClick={() => doctorList()} className={doctor ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`Doctor List`}
                </div >

                <div onClick={() => appointment()} className={app ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`Staff List`}
                </div>

                <div onClick={() => reportList()} className={report ? `bg-[#FF1D58] text-xl py-4 font-bold` : 'bg-[#c7073a] text-xl py-4 font-bold'}>
                    {`Add Staff/Doctor`}
                </div>
            </div>
            {doctor && <div>
                <DoctorList />
            </div>}
            {app && <div>
                <StaffList />
            </div>}
            {report && <div>
                <AddStaff />
            </div>}
        </div>
    )
}

export default Body