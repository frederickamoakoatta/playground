import './Header.css';
import {ReactNode} from "react";
import logo from '../../assets/Freddy_logo.svg'
import Colors from "../../../style-guide.ts";

interface HeaderProps {
    mode: 'white' | 'transparent' | 'translucent',
    hasActions: boolean,
    navActions: ReactNode,
    navItems: Array<ReactNode>
}

const Header = ({mode, hasActions, navActions, navItems}: HeaderProps) => {
    return (
        <>
            <header className="header" style={{backgroundColor : mode === 'white' ? Colors.white : mode === 'translucent' ? 'rgba(0, 0, 0, 0.38)' : 'rgba(0, 0, 0, 0)'}}>
                <div>
                    <img className="logo" src={logo} color={'black'} alt={'Freddy logo'}/>
                </div>
                <nav className="nav">
                    {navItems.map((item, i) => typeof item === 'string' ?
                        <a href="#" style={{color : mode === 'white' ? Colors.text.black : Colors.text.white}} key={`nav_${i}`}>{item}</a> : item)}
                </nav>
                {
                    hasActions &&
                    <div className="actions">
                        {navActions}
                    </div>
                }
                <div className="menu-toggle">&#9776;</div>
            </header>
        </>
    )
}
export default Header;