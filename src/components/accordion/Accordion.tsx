import './Accordion.css';
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
                    <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>{header}</div>
                    <div className={isOpen ? "accordion-content active": "accordion-content"}>{content}</div>
                </div>
            </div>
        </>
    )
}
export default Accordion;