import { Logo, FormRow } from "../components";
import { useForm } from '../hooks'
import Wrapper from "../assets/wrappers/RegisterPage";
import { useState } from "react";

const formData = {
  name: '',
  email: '',
  password: ''
}

export const Register = () => {
  const [isMember, setIsMember] = useState(false);
  const { email, password, name, onInputChange, onResetForm } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password || (!isMember && !name)) throw new Error('Fill al the fields properly')
  }

  const toggleMember = (e) => {
    e.preventDefault();
    setIsMember(!isMember);
  }

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

        <button type="submit" className="btn btn-block" >submit</button>

        <p>
          {isMember ? 'Not a Member Yet?' : 'Already a Member?'}
          <button className="member-btn" onClick={toggleMember}> {isMember ? 'Register' : 'Login'} </button>
        </p>

      </form>
    </Wrapper>
  );
};
