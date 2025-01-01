import {ReactNode} from "react";
import './SocialButton.css'

interface SocialButtonProps {
    type : 'login' | 'CTA',
    onClick?: () => void,
    children: ReactNode,
}
const SocialButton = ({type, onClick, children}: SocialButtonProps) => {
    return (
        <>
            <button className={['btn', type === 'CTA' ? 'btn-social-light' :'button-social-dark'].join(' ')} onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default SocialButton;