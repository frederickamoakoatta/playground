import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button.tsx";
import {fn} from "@storybook/test";


const meta : Meta = {
    title: "Button",
    component: Button,
    args : {
        onClick : fn(),
        children: 'Button'
    },
    argTypes : {
        state : {
            options: ["primary", "secondary", "success", "warning", "danger", "neutral", "dark"],
            control: 'select'
        }
    }
};
export default meta

type Story = StoryObj<typeof Button>;


export const PrimaryButton : Story  = {
    args : {
        state: 'primary',
    },
    render : (args) => {
        return <Button {...args}/>
    }
}

export const SecondaryButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "secondary"
    }
}

export const SuccessButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "success"
    }
}

export const WarningButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "warning"
    }
}


export const DangerButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "danger"
    }
}

export const NeutralButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "neutral"
    }
}

export const DarkButton : Story  = {
    args : {
        ...PrimaryButton.args,
        state: "dark"
    }
}

