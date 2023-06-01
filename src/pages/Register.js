import { Logo, FormRow } from "../components";
import { useForm } from '../hooks'
import Wrapper from "../assets/wrappers/RegisterPage";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../store";
import { useNavigate } from "react-router-dom";

const formData = {
  name: '',
  email: 'testin@mail.com',
  password: '1231231233'
}

export const Register = () => {
  const [isMember, setIsMember] = useState(false);
  const { email, password, name, onInputChange, onResetForm, isFormValid } = useForm(formData);

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please Fill Out All Fields.');
      return
    }
    if (isMember) {
      dispatch(loginUser({email, password}));
      return
    }

    dispatch(registerUser({name, email, password}));
  }

  const toggleMember = (e) => {
    e.preventDefault();
    setIsMember(!isMember);
  }

  useEffect(() => {
    if(user) navigate('/');
  }, [user]);
  

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>

        <Logo />
        <h3>{isMember ? 'Login' : 'Register'}</h3>
        {
          !isMember && (
            <FormRow
              name='name'
              labelText='name'
              type='name'
              value={name}
              onInputChange={onInputChange}
              placeholder='Esteban Quito'
            />
          )
        }
        <FormRow
          name='email'
          labelText='email'
          type='email'
          value={email}
          onInputChange={onInputChange}
          placeholder='example@mail.com'
        />

        <FormRow
          name='password'
          labelText='password'
          type='password'
          value={password}
          onInputChange={onInputChange}
          placeholder='xxxxxxxxxxx'
        />

        <button type="submit" className="btn btn-block" disabled={isLoading} >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>

        <p>
          {isMember ? 'Not a Member Yet?' : 'Already a Member?'}
          <button className="member-btn" onClick={toggleMember}> {isMember ? 'Register' : 'Login'} </button>
        </p>

      </form>
    </Wrapper>
  );
};
