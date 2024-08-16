import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './MainNavigation.scss';

const MainNavigation = () => {
    
    const menuItems = [
        {
            id: '1',
            title: 'Home',
            url: '/home',
            cName: 'links',
            cFlag: 'home'
        },
        {
            id: '2',
            title: 'Projects',
            url: '/projects',
            cName: 'links',
            cFlag: 'projects'
        },
        {
            id: '3',
            title: 'About',
            url: '/about',
            cName: 'links',
            cFlag: 'about'
        },
    ]

    const [menuIconClicked, setMenuIconClicked] = useState(false);

    const handleClick = () => {
        setMenuIconClicked(!menuIconClicked)
    }

    return (
        <nav className='header-nav'>
        <Link to='/' className='header-nav__logo'>
            <h1 className='header-nav__title'> Alex 
                <span className='header-nav__title--bold'>Van Deuren</span>
            </h1>
        </Link>
        <div className='header-nav__menu-icon' onClick={handleClick}>
            {menuIconClicked ?
                <FontAwesomeIcon icon={faXmark} /> :
                <FontAwesomeIcon icon={faBars} />
            }
        </div>
        <ul className={`${menuIconClicked ?
                'header-nav__menu header-nav__menu--active' : 
                'header-nav__menu'
            }`}
        >
            {menuItems.map((item) => {
                return (
                    <li
                        key={item.id}
                        className={`header-nav__${item.cName} header-nav__${item.cName}--${item.cFlag}`}
                    >
                        <NavLink to={item.url} className={`header-nav__${item.cName}-url`}>
                            {item.title}
                        </NavLink>
                    </li>
                )
            })
            }
        </ul>
    </nav>
    )
}

export default MainNavigation;