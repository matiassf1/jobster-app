import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../store/jobs/sideBarSlice'
import { Logo } from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa'

export const NavBar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const { user } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const toggle = (() => {
        dispatch(toggleSideBar());
    })
    return (
        <Wrapper>
            <div className='nav-center'>
                <button
                    type='button'
                    className='toggle-btn'
                    onClick={toggle}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className='logo-text'>dashboard</h3>
                </div>
                <div className='btn-container'>
                    <button
                        type='button'
                        className='btn'
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <FaUserCircle />
                        {user?.name}
                        <FaCaretDown />
                    </button>

                    <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                        <button
                            type='button'
                            className='dropdown-btn'
                            onClick={() => console.log('logout user')}
                        >logout</button>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}
