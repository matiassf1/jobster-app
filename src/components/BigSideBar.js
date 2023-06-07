import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/BigSidebar'
import { toggleSideBar } from '../store/sideBarSlice';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';

export const BigSideBar = () => {
  const { isSideBarOpen } = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  }
  return (
    <Wrapper>
      <div className={ isSideBarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className='content'>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            <NavLinks />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
