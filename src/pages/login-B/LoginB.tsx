import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ButtonColors from "../../components/button/ButtonColors";
import Checkbox from "../../components/checkbox/Checkbox";
import "./LoginB.scss";
import stanbicLogo from "../../assets/Stanbic-logo.png";

const LoginB = () => {
    return (
        <>
            <section aria-label={'login'} className="login-B">
                <div className="login-B-main">
                    <img src={stanbicLogo} width={'150px'} alt={'A Stanbic parody login'}/>
                    <br/>
                    <h6>Sign In</h6>
                    <br/>
                    <div className="form">
                        <Input className="form-element" type={'email'} label={'Email Address'}/>
                        <br/>
                        <Input className="form-element" type={'password'} label={'Password'}/>
                        <br/>
                        <Button state={ButtonColors.primary} isFullWidth>Login</Button>
                    </div>
                    <br/>
                    <div className="form-bottom">
                        <Checkbox label={'Remember me'} hasLabel/>
                        <small>Forget Password?</small>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LoginB;