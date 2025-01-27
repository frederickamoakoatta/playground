import './Header.scss';
import {ReactNode, useContext} from "react";
import logo from '../../assets/Freddy_logo.svg';
import logo_white from '../../assets/Freddy_logo_white.svg';
import colorPallet from "../../exports.module.scss";
import {Link} from "react-router-dom";
import AppThemeContext from "../../context/AppThemeContext";

interface HeaderProps {
    mode: 'white' | 'transparent' | 'translucent',
    hasActions: boolean,
    navActions?: ReactNode,
    navItems: Array<ReactNode>
}

const Header = ({mode, hasActions, navActions, navItems}: HeaderProps) => {
    const theme = useContext(AppThemeContext);
    return (
        <>
            <header className="header" aria-label={'header'} style={{backgroundColor : mode === 'white' ? colorPallet.white : mode === 'translucent' ? colorPallet.translucent : colorPallet.transparent}}>
                <Link to={'/'}>
                    <img className="logo" src={theme === 'dark' ? logo_white : logo} color={'black'} alt={'Freddy logo'}/>
                </Link>
                <nav className="nav">
                    {navItems.map((item, i) => typeof item === 'string' ?
                        <Link to="#" className={mode === 'white' ? 'nav-link-dark' : 'nav-link-light'} key={`nav_${i}`}>{item}</Link> : item)}
                </nav>
                {
                    hasActions &&
                    <div className="nav-actions" aria-label={'actions'}>
                        {navActions}
                    </div>
                }
                <div className="menu-toggle">&#9776;</div>
            </header>
        </>
    )
}
export default Header;