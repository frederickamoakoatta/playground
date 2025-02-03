import Header from "../../components/headers/Header";
import "./Pricing.scss";
import Toggle from "../../components/toogle/Toggle";
import PriceCard from "../../components/price-card/PriceCard";
import {useMemo, useState} from "react";
import Footer from "../../components/footer/Footer";


const Pricing = () => {
    const features = useMemo(() => {
        return [
            {name: '4k monthly emails', state: true},
            {name: '2k subscribers', state: true},
            {name: 'Email scheduling', state: true},
            {name: 'Design library', state: false},
            {name: 'Email support', state: false},
        ]
    }, []);

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <Header mode={'white'} navItems={['Home', 'Phones', 'Accessories', 'Contact']} hasActions={false}/>
            <section aria-label={'pricing section'} className="pricing">
                <div className={'v-stack'}>
                    <h2 className="hero-heading-black v-stack">Matching talents with their <br/> dream job</h2>
                    <br/>
                    <div className={'h-stack'}>
                        <strong>Monthly</strong>
                        <span className={'spaceBtw'}/>
                        <Toggle defaultVal={toggle} setDefaultVal={setToggle} />
                        <span className={'spaceBtw'}/>
                        <span>Yearly</span>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="card-group">
                    <PriceCard name={'Free'} price={'$0'} duration={toggle ? 'yearly': 'month' } features={features}/>
                    <PriceCard name={'Pro'} price={toggle ? '$250' : '$24'} duration={toggle ? 'yearly': 'month' } features={features} isRecommended/>
                    <PriceCard name={'Enterprise'} price={toggle ? '980': '$99'} duration={toggle ? 'yearly': 'month' } features={features}/>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Pricing;