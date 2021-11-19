import './header.css';
import logo from '../../../img/turners_logo.png';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className = 'header-wrapper'>

                <Link exact to = '/' className = 'logo-container'>
                    <img className = 'turners-logo' src= { logo }/>
                </Link>

                
                
                <div className = 'menu-wrapper'>

                    <NavLink to = '#' className = 'nav-links'>
                        <h3 className = 'nav-text'>Find a Car</h3>
                    </NavLink>

                    <NavLink to = '#' className = 'nav-links'>
                        <h3 className = 'nav-text'>Buy car</h3>
                    </NavLink>

                    <NavLink to = '#' className = 'nav-links'>
                        <h3 className = 'nav-text'>Sell your car</h3>
                    </NavLink>

                    <NavLink to = '/insurance.js' className = 'nav-links'>
                        <h3 className = 'nav-text'>Auto Insurance</h3>
                    </NavLink>

                    <NavLink to = '#' className = 'nav-links'>
                        <h3 className = 'nav-text'>FAQ</h3>
                    </NavLink>

                </div>

                
                
                <div className = 'search-box'>
                    <input 
                        type = 'text' className = 'user-text-input'
                        placeholder = '🔍   Search' />
                </div>

                
                
                <div className = 'entry-wrapper'>
                    <input type = 'button' value = 'Log in'
                        className = 'entry-btn' id = 'login-btn' />
                    <input type = 'button' value = 'Register'
                        className = 'entry-btn' id = 'reg-btn' />
                    <p className = 'china-lang'>中文</p>
                </div>

        </div>
    )

}

export default Header;