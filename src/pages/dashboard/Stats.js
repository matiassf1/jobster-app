import React, { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/StatsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../store/jobs/allJobsSlice';
import { Loading } from '../../components/Loading';

export const Stats = () => {
  const { isLoading, monthyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    
  }, [])
  
  if(isLoading){
    return <Loading center />
  }

  return (
    <>
      <Wrapper>
        
      </Wrapper>
    </>
  )
}
