import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

export const Landing = () => {
    return (
        <Wrapper>
            <main>
                <nav>
                    <Logo />
                </nav>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            job <span>tracking</span> app
                        </h1>
                        <p>Lorem ipsum dolor sit ameteget ac dui. Ins a nec eleifend iaculis, nulla metus condimentum erat, interdum congue lorem augue sit amet sapien.</p>
                        <button className='btn btn-hero'>Login/Register</button>
                    </div>
                    <img src={main} alt="job hunt" className='img main-img' />

                </div>
            </main>
        </Wrapper>
    );
};
