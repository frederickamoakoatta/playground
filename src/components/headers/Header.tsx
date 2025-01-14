import './Header.scss';
import {ReactNode} from "react";
import logo from '../../assets/Freddy_logo.svg';
import colorPallet from "../../exports.module.scss";

interface HeaderProps {
    mode: 'white' | 'transparent' | 'translucent',
    hasActions: boolean,
    navActions: ReactNode,
    navItems: Array<ReactNode>
}

const Header = ({mode, hasActions, navActions, navItems}: HeaderProps) => {
    return (
        <>
            <header className="header" aria-label={'header'} style={{backgroundColor : mode === 'white' ? colorPallet.white : mode === 'translucent' ? colorPallet.translucent : colorPallet.transparent}}>
                <div>
                    <img className="logo" src={logo} color={'black'} alt={'Freddy logo'}/>
                </div>
                <nav className="nav">
                    {navItems.map((item, i) => typeof item === 'string' ?
                        <a href="#" style={{color : mode === 'white' ? colorPallet.textDark : colorPallet.textWhite}} key={`nav_${i}`}>{item}</a> : item)}
                </nav>
                {
                    hasActions &&
                    <div className="h-stack" aria-label={'actions'}>
                        {navActions}
                    </div>
                }
                <div className="menu-toggle">&#9776;</div>
            </header>
        </>
    )
}
export default Header;