import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Jobs = () => {
    const [jobs, setJobs]=useState([])

    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    console.log(jobs);
    return (
        <div>
            
        </div>
    );
};

export default Jobs;