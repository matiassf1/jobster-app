import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../store/jobs/thunks';

import { Job, Loading } from './'
import Wrapper from '../assets/wrappers/JobsContainer'

export const JobsContainer = () => {

    const { jobs, isLoading } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getAllJobs());
    }, []);
    

    if (isLoading) {
        return <Loading center={true} />
    }

    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }


    return (
        <Wrapper>
            <h5>Jobs Info</h5>
            <div className='jobs'>
                {
                    jobs.map((job) => {
                        return <Job key={job._id} {...job} />
                    })
                }
            </div>
        </Wrapper>
    )
}
