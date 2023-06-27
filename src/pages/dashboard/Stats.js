import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../store/jobs/allJobsSlice';
import { Loading } from '../../components/Loading';
import { ChartsContainer, StatsContainer } from '../../components';

export const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());

  }, [])

  if (isLoading) {
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}
