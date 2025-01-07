import './Button.scss';
import colorPallet from '../../exports.module.scss';


interface ButtonProps {
    state?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | 'dark',
    onClick?: () => void,
    children: string,
}


const Button = ({state, onClick, children}: ButtonProps) => {
    return (
        <>
            <button className={'btn'}
                    style={{
                        backgroundColor: state === 'primary' ? colorPallet.btnPrimary :
                            state === 'secondary' ? colorPallet.btnSecondary :
                                state === 'success' ? colorPallet.btnSuccess :
                                    state === 'warning' ? colorPallet.btnWarning :
                                        state === 'danger' ? colorPallet.btnDanger :
                                            state === 'neutral' ? colorPallet.btnNeutral : colorPallet.btnDark,
                        color: state === 'neutral' ? colorPallet.textBlack :
                            state === 'warning' ? colorPallet.textBlack : colorPallet.textWhite
                    }} onClick={onClick}>{children}</button>
        </>
    )
}
export default Button;

