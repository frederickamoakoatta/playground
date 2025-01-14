import './Accordion.scss';
import {useState} from 'react';

interface AccordionProps {
    header: string;
    content: string;
}

const Accordion = ({header, content} : AccordionProps) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className="accordion">
                <div className="accordion-item">
                    <div aria-label={'accordion header'} className="accordion-header" onClick={() => setIsOpen(!isOpen)}>{header}</div>
                    {isOpen && <div aria-label={'accordion content'} className="accordion-content">{content}</div>}
                </div>
            </div>
        </>
    )
}
export default Accordion;