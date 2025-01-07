import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import SocialButton from "./SocialButton.tsx";
import btnIcon from "../../assets/send.svg";
import './SocialButton.scss';

const meta : Meta = {
    title: "Button",
    component: SocialButton,
    args : {
        onClick : fn(),
        children : <div className={'h-stack'}>
            <img src={btnIcon} alt={'button icon'} width={'16px'} height={'16px'} style={{paddingRight: '4px'}}/>
            Button
        </div>
    },
    argTypes : {
        type : {
            options: ["login", "CTA"],
            control: 'select'
        }
    }
};
export default meta

type Story = StoryObj<typeof SocialButton>;

export const SocialLoginButton : Story  = {
    args :  {
        type : 'login'
    }
}

export const CTAButton : Story  = {
    args :  {
        type : 'CTA'
    }
}