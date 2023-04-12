import React, { useContext, useEffect, useState } from 'react';
import SubHeader from '../SubHeader';
import { Link } from 'react-router-dom';
import { getStoredJob } from '../../utils/fakeDB';
import { JobsContext } from '../../App';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'



const AppliedJob = () => {
    const allData = useContext(JobsContext || []);
    const [appliedJob, setAppliedJob] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [filterData, setFilterData] = useState(appliedJob)

    useEffect(() => {
        let findJobs = [];
        const storedJobs = getStoredJob();
        for (const id in storedJobs) {
            const job = allData.find((job) => job.id === id);
            findJobs.push(job);
        }
        setAppliedJob(findJobs)
    }, []);


    // filter handler
    const handelFilter = (e) => {
        // setFilterText(value)
        const text = e.target.value;
        setFilterText(text);
    }
    // console.log(filterText);

    // const handelRemoteFilter = (value) => {
    //     setFilterText(value);
    // }

    // const handelOnsiteFilter = (value) => {
    //     setFilterText(value);
    // }

    useEffect(() => {
        let filteredData = [];
        if (filterText === 'remote') {
            filteredData = appliedJob.filter(item => item.workplace_type === 'remote');
        } else if (filterText === 'Onsite') {
            filteredData = appliedJob.filter(item => item.workplace_type === 'Onsite');
        }else if(filterText === "all"){
            filteredData = [...appliedJob];
        }
        console.log(filteredData);
        setFilterData(filteredData);
    }, [filterText])


    return (
        <>
            <SubHeader>Applied Jobs</SubHeader>
            <div className='p-10 md:mx-72 relative md:mb-20 '>
                {
                    appliedJob.length === 0 && <p className='bg-my-color-1 text-3xl text-center py-10 text-dark-1 mt-5 rounded-lg bg-opacity-20'>Nothing Found</p>
                }
                {/* {
                    appliedJob.length !== 0 && <div className='flex justify-center md:justify-end gap-10 py-5'>
                        <p onClick={() => { handelRemoteFilter("remote") }} className='btn-outline cursor-pointer'>Remote</p>
                        <p onClick={() => { handelOnsiteFilter("Onsite") }} className='btn-outline cursor-pointer'>On-site</p>
                    </div>
                } */}
                <div className='relative py-10 mb-5'>

                    <select onChange={handelFilter} className='bg-my-color-2 bg-opacity-20 px-7 py-2 rounded-md absolute right-0'>
                        <option value="all">All</option>
                        <option value="remote">Remote</option>
                        <option value="Onsite">On-Site</option>
                    </select>
                </div>

                {filterText === "" ?
                    appliedJob?.map((item) =>
                        <div key={item?.id} className='bg-dark-7 border border-my-color-2 rounded-lg p-5  md:grid grid-cols-5 md:gap-12 mb-6'>
                            <div className='bg-my-color-2 bg-opacity-10 rounded-lg grid col-span-2 md:py-14'>
                                <img className='mx-auto self-center' src={item?.logo} alt="" />
                            </div>
                            <div className='md:space-y-3 col-span-2 space-y-2'>
                                <h2 className='text-dark-1 font-bold text-2xl'>{item?.job_title}</h2>
                                <p className='text-dark-3 text-2xl'>{item?.company_name}</p>
                                <div className='flex'>
                                    <button className='btn-outline mr-3'>{item?.job_type}</button>
                                    <button className='btn-outline mr-3'>{item?.workplace_type}</button>
                                </div>
                                <div className=' text-lg text-dark-3 space-x-6 flex justify-between items-center'>
                                    <p className='flex items-center mr-3'><MapPinIcon className="h-6 w-6 text-blue-500 mr-3" />{item?.location}</p>
                                    <p className='flex items-center mr-2'><CurrencyDollarIcon className="h-6 w-6 text-blue-500 mr-2" />Salary : {item?.salary} </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Link to={`/jobDetails/${item?.id}`} className='btn-primary'>View Details</Link>
                            </div>
                        </div>
                    ) :
                    filterData?.map((item) =>
                        <div key={item?.id} className='bg-dark-7 border border-my-color-2 rounded-lg p-5  md:grid grid-cols-5 md:gap-12 mb-6'>
                            <div className='bg-my-color-2 bg-opacity-10 rounded-lg grid col-span-2 md:py-14'>
                                <img className='mx-auto self-center' src={item?.logo} alt="" />
                            </div>
                            <div className='md:space-y-3 col-span-2 space-y-2'>
                                <h2 className='text-dark-1 font-bold text-2xl'>{item?.job_title}</h2>
                                <p className='text-dark-3 text-2xl'>{item?.company_name}</p>
                                <div className='flex'>
                                    <button className='btn-outline mr-3'>{item?.job_type}</button>
                                    <button className='btn-outline mr-3'>{item?.workplace_type}</button>
                                </div>
                                <div className=' text-lg text-dark-3 space-x-6 flex justify-between items-center'>
                                    <p className='flex items-center mr-3'><MapPinIcon className="h-6 w-6 text-blue-500 mr-3" />{item?.location}</p>
                                    <p className='flex items-center mr-2'><CurrencyDollarIcon className="h-6 w-6 text-blue-500 mr-2" />Salary : {item?.salary} </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <Link to={`/jobDetails/${item?.id}`} className='btn-primary'>View Details</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AppliedJob;