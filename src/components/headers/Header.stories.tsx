import {Meta, StoryObj} from "@storybook/react";
import Header from "./Header.tsx";
import Button from "../button/Button.tsx";
import {fn} from "@storybook/test";
import bellIcon from "../../assets/bell.svg";
import userIcon from "../../assets/user-shield-alt.svg";
import userImgIcon from "../../assets/user.jpg";
import menuIcon from "../../assets/burger-menu.svg";

const meta : Meta = {
    title : 'Header',
    component : Header,
    args : {
        navItems : ['Home', 'About', 'Services', 'Contact'],
        navActions : <Button state={'primary'} onClick={fn()}>Primary</Button>
    },
    argTypes : {
        mode : {
            control : 'select',
            options : ['white', 'translucent', 'transparent'],
        }
    }
}
export default meta;

type Story = StoryObj<typeof Header>;

export const Basic : Story = {
    args: {
        mode : 'white',
        hasActions : true,
    }
}

export const DoubleActions: Story = {
    args: {
        mode : 'white',
        hasActions : true,
        navActions : (<div className={'h-stack'}>
            <Button state={'neutral'} onClick={() => fn()}>Docs</Button>
            <span className={'spaceBtw'}/>
            <Button state={'primary'} onClick={() => fn()}>Primary</Button>
        </div>)
    }
}

export const IconActions: Story = {
    args: {
        mode : 'white',
        hasActions : true,
        navActions : (<div className={'h-stack'}>
            <img src={bellIcon} alt="bell Icon" className={'header-icons'}/>
            <span className={'spaceBtw'}/>
            <img src={userIcon} alt="user Icon" className={'header-icons'}/>
            <span className={'spaceBtw'}/>
            <img src={menuIcon} alt="menu Icon" className={'header-icons'}/>
        </div>)
    }
}

export const AvatarActions: Story = {
    args: {
        mode : 'white',
        hasActions : true,
        navActions : (<div className={'h-stack'}>
            <img src={userImgIcon} alt="user avatar" className={'header-avatar'}/>
            <span className={'spaceBtw'}/>
            <img src={menuIcon} alt="menu Icon" className={'header-icons'}/>
        </div>)
    }
}

export const NoActions: Story = {
    args: {
        mode : 'white',
        hasActions : false,
        navItems : ['Home', 'About', 'Services', 'Contact', <Button state={'primary'}>Primary</Button>],
    }
}