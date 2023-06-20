import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/Job'
import { JobInfo } from './JobInfo'
import moment from 'moment/moment'

export const Job = ({
  company,
  _id,
  position,
  status,
  jobType,
  jobLocation,
  createdAt
}) => {

  const dispatch = useDispatch();

  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />}text={jobLocation} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer className='actions'>
          <Link
            to='/add-job'
            className='btn edit-btn'
            onClick={
              console.log('edit')
            }
          >
            Edit
          </Link>

          <button
            type='button'
            className='btn delete-btn'
            onClick={
              console.log('delete')
            }
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  )
}
