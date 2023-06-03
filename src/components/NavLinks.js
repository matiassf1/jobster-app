import { NavLink } from "react-router-dom"
import { links } from "../utils/links"

export const NavLinks = ({toggleSideBar}) => {
    return (
        <>
            {
                links.map(({ path, id, icon, text }) =>
                    <NavLink
                        to={path}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        key={id}
                        onClick={toggleSideBar}
                        end
                    >
                        <span className='icon'>{icon}</span>
                        {text}
                    </NavLink>
                )
            }
        </>
    )
}
