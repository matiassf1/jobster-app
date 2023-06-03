import { useDispatch, useSelector } from 'react-redux'
import { Logo, NavLinks } from './'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { toggleSideBar } from '../store/jobs/sideBarSlice';

import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/links';


export const SmallSideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  }
  return (
    <Wrapper>
      <div
        className={isSideBarOpen ? 'show-sidebar sidebar-container' : 'sidebar-container'}
      >
        <div className='content'>
          <button className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
           <NavLinks toggleSideBar={toggle} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
