import  "./Checkbox.scss";

interface CheckboxProps {
    label? : string,
    onChange? : () => void,
    hasLabel? : boolean,
}

const Checkbox = ({hasLabel, label, onChange} : CheckboxProps) => {
    return (
        <>
            <div className={'mini-stack'}>
                <input type={"checkbox"} onChange={onChange}/>
                <span className={'spaceBtw'}/>
                {hasLabel && <label htmlFor={label} aria-label={label}>{label}</label>}
            </div>
        </>
    )
}

export default Checkbox;