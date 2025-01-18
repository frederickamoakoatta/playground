import {useLocation} from "react-router-dom";
import {ReactNode, useEffect} from "react";
import colorPallet from "../../exports.module.scss"
import ThemeContext from "../../context/AppThemeContext";

interface AppThemeProps {
    children: ReactNode;
}


const AppTheme = ({children}: AppThemeProps) => {
    const location = useLocation();
    const themeOption = location.search?.slice(7);

    useEffect(() => {
        document.body.style.backgroundColor = themeOption === 'dark' ? colorPallet.black : colorPallet.white;
        return () => {
            document.body.style.backgroundColor = colorPallet.white; // Default color
        };
    }, [themeOption]);

    return (
        <ThemeContext.Provider value={themeOption}>
            {children}
        </ThemeContext.Provider>
    )
}

export default AppTheme;