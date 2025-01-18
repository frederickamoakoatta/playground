import Header from "../../components/headers/Header";
import HeaderActions from "../../components/headers/HeaderActions";
import "./HeroB.scss"
import phones from "../../assets/phones.png";

const HeroB = () => {
    return (
        <>
            <Header mode={'transparent'} navItems={['Home', 'Phones', 'Accessories', 'Contact']} hasActions={true} navActions={<HeaderActions actionType={'style4'}/>}/>
            <section aria-label={'Hero'} className="hero v-stack">
                <div className={'v-stack'}>
                    <h1 className="hero-heading-white">Mobile Goodies</h1>
                    <h6 className="hero-subtitle">Design, build, collaborate and bring your ideas to life with the world</h6>
                </div>
                <img src={phones} alt={'3D illustration of phones with screens'} width={'100%'}/>
            </section>
        </>
    )
}
export default HeroB;