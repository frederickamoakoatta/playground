import Header from "../../components/headers/Header";
import HeaderActions from "../../components/headers/HeaderActions";
import "./HeroB.scss"
import phones from "../../assets/phones.png";
import miniPhones from "../../assets/min-phone.png";
import LazyLoad from "react-lazyload";
import Footer from "../../components/footer/Footer";

const HeroB = () => {
    return (
        <>
            <Header mode={'transparent'} navItems={['Home', 'Phones', 'Accessories', 'Contact']} hasActions={true} navActions={<HeaderActions actionType={'style4'}/>}/>
            <section aria-label={'Hero'} className="heroB">
                <div className={'v-stack'}>
                    <h1 className="hero-heading-white">Mobile Goodies</h1>
                    <br/>
                    <h6 className="hero-subtitle">Design, build, collaborate and bring your ideas to life with the world</h6>
                </div>
                <br/>
                <LazyLoad height={600} className="v-stack">
                <img className="imgA" src={phones} alt={'3D illustration of phones with screens for desktop'}/>
                <img className="imgB" src={miniPhones} alt={'3D illustration of phones with screens for mobile'}/>
                </LazyLoad>
            </section>
            <Footer/>
        </>
    )
}
export default HeroB;