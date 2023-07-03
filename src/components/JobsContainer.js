import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../store/jobs/allJobsSlice';

import { Job, Loading } from './'
import Wrapper from '../assets/wrappers/JobsContainer'
import { PageBtnContainer } from './PageBtnContainer';

export const JobsContainer = () => {

    const {
        jobs,
        isLoading,
        totalJobs,
        page,
        numOfPage,
        search,
        searchStatus,
        searchType,
        sort
    } = useSelector((store) => store.allJobs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [page, search, searchStatus, searchType, sort]);


    if (isLoading) {
        return <Loading center={true} />
    }

    if (jobs?.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }


    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs?.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {
                    jobs?.map((job) => {
                        return <Job key={job._id} {...job} />
                    })
                }
            </div>
            {numOfPage > 1 && <PageBtnContainer />}
        </Wrapper>
    )
}
