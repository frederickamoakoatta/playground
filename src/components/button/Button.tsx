import Colors from "../../../style-guide.ts";
import './Button.css';


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
                        backgroundColor: state === 'primary' ? Colors.btn.primary :
                            state === 'secondary' ? Colors.btn.secondary :
                                state === 'success' ? Colors.btn.success :
                                    state === 'warning' ? Colors.btn.warning :
                                        state === 'danger' ? Colors.btn.danger :
                                            state === 'neutral' ? Colors.btn.neutral : Colors.btn.dark,
                        color: state === 'neutral' ? Colors.text.black :
                            state === 'warning' ? Colors.text.black : Colors.text.white
                    }} onClick={onClick}>{children}</button>
        </>
    )
}
export default Button;

