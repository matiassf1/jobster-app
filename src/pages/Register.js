import { Logo } from "../components";
import { useForm } from '../hooks'
import Wrapper from "../assets/wrappers/RegisterPage";

export const Register = () => {

  const { email, password, onInputChange, onResetForm } = useForm({
    email: '',
    password: ''
  });

  return (
    <Wrapper className="full-page">
      <form className="form">

        <Logo />
        <h3>Login</h3>

        <div className="form-row">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-input" type="email" name="email" placeholder="example@mail.com" value={email} onChange={onInputChange} />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">password</label>
          <input className="form-input" type="password" name="password" placeholder="xxxxxxxxxx" value={password} onChange={onInputChange} />
        </div>

        <button type="submit" className="btn btn-block" >submit</button>
      </form>
    </Wrapper>
  );
};
