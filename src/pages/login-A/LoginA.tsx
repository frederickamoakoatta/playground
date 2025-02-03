import Button from "../../components/button/Button";
import ButtonColors from "../../components/button/ButtonColors";
import "./LoginA.scss";
import Input from "../../components/input/Input";
import ministryLogo from "../../assets/ministryLogo.jpeg";
import Checkbox from "../../components/checkbox/Checkbox";


const LoginA = () => {
    return (
        <>
            <section aria-label={'login'} className="login-A">
                <div className="login-A-left"/>
                <div className="login-A-right">
                    <img src={ministryLogo} width={'80px'} height={'80px'} alt={'Agriculture Ministry Logo'}/>
                    <br/>
                    <h4>Welcome to Farmers Grant Portal</h4>
                    <p>Sign In</p>
                    <br/>
                    <div className="form">
                        <Input className="form-element" type={'email'} label={'Email Address'}/>
                        <br/>
                        <Input className="form-element" type={'password'} label={'Password'}/>
                        <br/>
                        <Button state={ButtonColors.success} isFullWidth>Login</Button>
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
export default LoginA;