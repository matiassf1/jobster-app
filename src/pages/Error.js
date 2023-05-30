import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import notFoundImage from '../assets/images/not-found.svg'

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notFoundImage} alt="Page Not Found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to={'/'}>Back to home</Link>
      </div>
    </Wrapper>
  );
};
