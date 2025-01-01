import './Checkbox.css';

interface CheckboxProps {
    label? : string,
    onChange? : () => void,
    hasLabel? : boolean,
}

const Checkbox = ({hasLabel, label, onChange} : CheckboxProps)=>{
    return (
        <>
            <div className={'h-stack'}>
                <input type={"checkbox"} onChange={onChange}/>
                {hasLabel && <label htmlFor={'label'}>{label}</label>}
            </div>
        </>
    )
}

export default Checkbox;