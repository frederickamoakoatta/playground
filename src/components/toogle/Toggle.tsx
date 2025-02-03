import './Toggle.scss';
import {Dispatch, SetStateAction} from "react";

interface ToggleProps {
    label? : string,
    hasLabel ? : boolean,
    defaultVal : boolean,
    setDefaultVal : Dispatch<SetStateAction<boolean>>,
}

const Toggle = ({label, hasLabel, defaultVal, setDefaultVal}: ToggleProps) => {

    return (
        <>
            <div className="toggle-container">
                <div aria-label={'switch'} className={defaultVal ? 'toggle active' : 'toggle'} onClick={() => setDefaultVal(!defaultVal)}></div>
                {hasLabel && <span className="label" aria-label={label}>{label}</span>}
            </div>
        </>
    )
}
export default Toggle;