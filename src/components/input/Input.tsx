import {ChangeEvent, InputHTMLAttributes} from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type: 'email' | 'password' | 'text';
    placeholder?: string;
    error?: string;
}

const Input = ({label, error, placeholder, type, ...props}: InputProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    return (
        <>
            <div className={'input-container'}>
                {label && <label htmlFor={props.id || props.name} aria-label={label}>{label}</label>}
                <input
                    {...props}
                    type={type}
                    className={`input ${error ? "input-error" : ""}`}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                {error && <span className="error-message">{error}</span>}
            </div>
        </>
    )
}
export default Input;