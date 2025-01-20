import './Toggle.scss';
import {useState} from "react";

interface ToggleProps {
    label? : string,
    hasLabel ? : boolean
}

const Toggle = ({label, hasLabel}: ToggleProps) => {
    const [defaultVal, setDefaultVal] = useState(false);

    const toggleHandler = () => {
        setDefaultVal(!defaultVal);
    }

    return (
        <>
            <div className="toggle-container">
                <div aria-label={'switch'} className={defaultVal ? 'toggle active' : 'toggle'} onClick={toggleHandler}></div>
                {hasLabel && <span className="label" aria-label={label}>{label}</span>}
            </div>
        </>
    )
}
export default Toggle;