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
    }
}

export const SecondaryButton : Story  = {
    args : {
        state: "secondary"
    }
}

export const SuccessButton : Story  = {
    args : {
        state: "success"
    }
}

export const WarningButton : Story  = {
    args : {
        state: "warning"
    }
}


export const DangerButton : Story  = {
    args : {
        state: "danger"
    }
}

export const NeutralButton : Story  = {
    args : {
        state: "neutral"
    }
}

export const DarkButton : Story  = {
    args : {
        state: "dark"
    }
}

