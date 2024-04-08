import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'
import './Nav.css'
const Nav = () => {
    return (
        <div className="flex flex-row gap-10 md:relative md:z-10 items-center justify-between py-10 px-10 md:w-10/12 mx-auto">
            <div className="">
                <NavLink to='/'><img src={Logo} alt="Logo" /></NavLink>
            </div>
            <div className="">
                <ul className=" flex text-md md:text-lg md:gap-4 gap-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/donations">Donation</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Nav;