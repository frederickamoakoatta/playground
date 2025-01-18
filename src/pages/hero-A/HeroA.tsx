import Header from "../../components/headers/Header";
import HeaderActions from "../../components/headers/HeaderActions";
import "./HeroA.scss";
import Button from "../../components/button/Button";
import ButtonColors from "../../components/button/ButtonColors";
import alien from "../../assets/alien.png"

const HeroA = () => {
    return (
        <>
            <Header mode={'white'} navItems={['Home', 'Space station', 'Our planets', 'Contact']} hasActions={true} navActions={<HeaderActions actionType={'style3'}/>}/>
            <section aria-label={'Hero'} className="hero h-stack">
                <div>
                    <h1>Meet our friends from the other side</h1>
                    <h6>Lets make sure we preserve live on other planets</h6>
                    <br/>
                    <Button state={ButtonColors.secondary}>Donate now</Button>
                    <p><span>🤗</span> No credit card required. 30 days cash back guarantee</p>
                </div>
                <img src={alien} alt={'Alien and human 3D illustration'} width={'60%'}/>
            </section>
        </>
    )
}
export default HeroA;