import {Meta, StoryObj} from "@storybook/react";
import Header from "./Header.tsx";
import Button from "../button/Button.tsx";
import {fn} from "@storybook/test";
import ButtonColors from "../button/ButtonColors";
import HeaderActions from "./HeaderActions";

const meta : Meta = {
    title : 'Header',
    component : Header,
    args : {
        navItems : ['Home', 'About', 'Services', 'Contact'],
        navActions : <Button state={ButtonColors.primary} onClick={fn()}>Primary</Button>
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
        navActions : <HeaderActions actionType={'style1'}/>
    }
}

export const IconActions: Story = {
    args: {
        mode : 'white',
        hasActions : true,
        navActions : <HeaderActions actionType={'style2'}/>
    }
}

export const AvatarActions: Story = {
    args: {
        mode : 'white',
        hasActions : true,
        navActions : <HeaderActions actionType={'style3'}/>
    }
}

export const NoActions: Story = {
    args: {
        mode : 'white',
        hasActions : false,
        navItems : ['Home', 'About', 'Services', 'Contact', <Button state={ButtonColors.primary}>Primary</Button>],
    }
}