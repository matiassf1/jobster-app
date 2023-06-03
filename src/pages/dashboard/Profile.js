import { FormRow } from "../../components/FormRow"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { updateUser } from "../../store"

export const Profile = () => {

  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch();

  const { name, email, lastName, location, onInputChange } = useForm({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || ''
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error('Please enter an name.');
      return;
    } 
    if (!email) {
      toast.error('Please enter an email.');
      return;
    }

    if (!lastName) {
      toast.error('Please enter a last name.');
      return;
    }

    if (!location) {
      toast.error('Please enter a location.');
      return;
    }

    dispatch(updateUser({name, email, lastName, location}))

  }


  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className="form-center">
          <FormRow type='text' value={name} onInputChange={onInputChange} name='name' />
          <FormRow type='email' value={email} onInputChange={onInputChange} name='email' />
          <FormRow type='text' value={lastName} onInputChange={onInputChange} name='lastName' />
          <FormRow type='text' value={location} onInputChange={onInputChange} name='location' />

          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
