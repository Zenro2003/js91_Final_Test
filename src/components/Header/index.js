import { NavLink } from 'react-router-dom';
import './style.css'
const Header = () => {
    const handleNavLinkClass = (params) =>{
        return `link ${params.isActive ? "link-active" : ""}`;
    };
    return(
        <div className="header">
            <ul className='nav-menu'>
                <li>
                    <NavLink className={handleNavLinkClass} to="/">All</NavLink>
                </li>
                <li>
                    <NavLink className={handleNavLinkClass} to="/active">Active</NavLink>
                </li>
                <li>
                    <NavLink className={handleNavLinkClass} to="/completed">Completed</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default Header;