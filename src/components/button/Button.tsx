import './Button.scss';
import colorPallet from '../../exports.module.scss';
import ButtonColors from "./ButtonColors";
import {Link} from "react-router-dom";


interface ButtonProps {
    state: ButtonColors,
    onClick?: () => void,
    children: string,
    isDisabled?: boolean,
    isLink?: boolean,
    link? : string,
}

interface ButtonState {
    backgroundColor: string,
    color: string,
}

const buttonState = (state: ButtonState, action: ButtonColors) => {
    switch (action) {
        case ButtonColors.primary:
            return {...state, backgroundColor: colorPallet.btnPrimary, color: colorPallet.textWhite};
        case ButtonColors.secondary:
            return {...state, backgroundColor: colorPallet.btnSecondary, color: colorPallet.textWhite};
        case ButtonColors.success:
            return {...state, backgroundColor: colorPallet.btnSuccess, color: colorPallet.textWhite};
        case ButtonColors.warning:
            return {...state, backgroundColor: colorPallet.btnWarning, color: colorPallet.textBlack};
        case ButtonColors.danger:
            return {...state, backgroundColor: colorPallet.btnDanger, color: colorPallet.textWhite};
        case ButtonColors.neutral:
            return {...state, backgroundColor: colorPallet.btnNeutral, color: colorPallet.textBlack};
        case ButtonColors.dark:
            return {...state, backgroundColor: colorPallet.btnDark, color: colorPallet.textWhite};
        case ButtonColors.disabled:
            return {...state, backgroundColor: colorPallet.btnDisabled, color: colorPallet.textDisabled};
        default:
            return state;
    }
}

const Button = ({state, onClick, isDisabled, isLink, link, children}: ButtonProps) => {
    return (
        <>
            {
                isLink ?
                    <Link aria-label={'link'} className={'btn btn-link'} to={link ?? ''}
                       style={buttonState({backgroundColor: colorPallet.btnPrimary, color: colorPallet.textWhite}, state)}>{children}</Link> :
                    <button className={'btn'} disabled={isDisabled}
                            style={buttonState({backgroundColor: colorPallet.btnPrimary, color: colorPallet.textWhite}, state)}
                            onClick={onClick}>{children}</button>
            }
        </>
    )
}
export default Button;

