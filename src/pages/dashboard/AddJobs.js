import { FormRow, FormRowSelect } from "../../components";
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from "react-redux";
import { clearValues, handleChange } from "../../store/jobs/jobSlice";

import { toast } from 'react-toastify';
import { createJob, editJob } from "../../store/jobs/jobThunks";
import { useEffect } from "react";

export const AddJobs = () => {

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId
  } = useSelector((store) => store.job)

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    dispatch(handleChange({ name, value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      return toast.error('Please Fill Out All Fields');
    }

    if (!isEditing) {
      return dispatch(createJob({ position, company, jobLocation, jobType, status }))
    }
    dispatch(editJob({ jobId: editJobId, job: { position, company, jobLocation, jobType, status } }))

  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.jobLocation }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          <FormRow
            type='text'
            name='position'
            labelText='Position'
            value={position || ''}
            onInputChange={onHandleChange}
          />
          <FormRow
            type='text'
            name='company'
            labelText='company'
            value={company || ''}
            onInputChange={onHandleChange}
          />
          <FormRow
            type='text'
            name='jobLocation'
            labelText='Job Location'
            value={jobLocation || ''}
            onInputChange={onHandleChange}
          />

          <FormRowSelect
            status={status}
            name='status'
            labelText='Status'
            onHandleChange={onHandleChange}
            listOptions={statusOptions}
          />
          <FormRowSelect
            status={jobType}
            name='jobType'
            labelText='Job Type'
            onHandleChange={onHandleChange}
            listOptions={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>

          </div>
        </div>
      </form>
    </Wrapper>
  )
}
