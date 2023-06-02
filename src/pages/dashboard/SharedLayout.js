import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { SmallSideBar, BigSideBar, NavBar } from '../../components'

export const SharedLayout = () => {
  return (
    <>
      <Wrapper>

        <main className='dashboard'>
          <SmallSideBar />
          <BigSideBar />
          <div>
            <NavBar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>

        </main>

      </Wrapper>
    </>
  )
}
