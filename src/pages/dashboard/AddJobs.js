import { FormRow } from "../../components/FormRow";
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm"

import { toast } from 'react-toastify';

export const AddJobs = () => {

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOption,
    jobType,
    statusOption,
    status,
    isEditing,
    editJobId
  } = useSelector((store) => store.job)

  const dispatch = useDispatch();

  const { positionForm, companyForm, jobLocationForm, onInputChange } = useForm({
    positionForm: position || '',
    companyForm: company || '',
    jobLocationForm: jobLocation || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!positionForm || !companyForm || !jobLocationForm) {
      return toast.error('Please Fill Out All Fields');
    }
  }

  const handleJobInput = () => {

  }
  // export const FormRow = ({ type, name, value, onInputChange, labelText, placeholder }) => {

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
        <FormRow
            type='text'
            name='positionForm'
            labelText='Position'
            value={positionForm}
            onInputChange={onInputChange}
          />
          <FormRow
            type='text'
            name='companyForm'
            labelText='Company'
            value={companyForm}
            onInputChange={onInputChange}
          />
          <FormRow
            type='text'
            name='jobLocationForm'
            labelText='Job Location'
            value={jobLocationForm}
            onInputChange={onInputChange}
          />
          <FormRow/>
          <div className="btn-container">
            <button 
            className="btn btn-block clear-btn"
            type="button"
            onClick={() => console.log('clear values')}
            >
              clear
            </button>
            <button 
            className="btn btn-block submit-btn"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            >
              clear
            </button>

          </div>
        </div>
      </form>
    </Wrapper>
  )
}
