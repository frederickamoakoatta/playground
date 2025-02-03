import Select, {SingleValue} from "react-select";
import {useMemo, useState} from "react";
import './Home.scss';
import Button from "../../components/button/Button";
import ButtonColors from "../../components/button/ButtonColors";


type LinksType = {
    label: string;
    value: string;
}


const Home = () => {
    const [selectedURL, setSelectedURL] = useState<SingleValue<LinksType>>({label:'-- Select demo page --', value:''});
    const options : Array<LinksType> =  useMemo(() => {
        return [
            { value: '/login-1', label: 'Login page 1' },
            { value: '/login-2', label: 'Login page 2' },
            { value: '/pricing', label: 'Pricing page' },
            { value: '/hero-1', label: 'Hero page 1' },
            { value: '/hero-2?theme=dark', label: 'Hero page 2' }
        ]
    }, []);
    return (
        <>
            <div className="app-v-stack">
                <h1>Welcome to my React Playground</h1>
                <br/>
                <div className="app-h-stack">
                    <Select
                        styles={{
                            container: (provided) => ({
                                ...provided,
                                width: "250px", // Set the width here
                            }),
                        }}
                        isSearchable={false}
                        defaultValue={selectedURL}
                        onChange={(val) => setSelectedURL(val)}
                        options={options}
                    />
                    <span className="spaceBtw"/>
                    <Button state={selectedURL?.value === '' ? ButtonColors.disabled : ButtonColors.primary} isLink link={selectedURL?.value} isDisabled={selectedURL?.value === ''}>Go !</Button>
                </div>
            </div>
        </>
    )
}
export default Home;