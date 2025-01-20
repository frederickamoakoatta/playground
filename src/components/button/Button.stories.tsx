import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button";
import {fn} from "@storybook/test";
import ButtonColors from "./ButtonColors";


const meta : Meta = {
    title: "Button",
    component: Button,
    args : {
        onClick : fn(),
        children: 'Button'
    },
    argTypes : {
        state : {
            options: ["primary", "secondary", "success", "warning", "danger", "neutral", "dark", 'disabled', 'transparent'],
            control: 'select'
        }
    }
};
export default meta

type Story = StoryObj<typeof Button>;


export const PrimaryButton : Story  = {
    args : {
        state: ButtonColors.primary,
    }
}

export const SecondaryButton : Story  = {
    args : {
        state: ButtonColors.secondary
    }
}

export const SuccessButton : Story  = {
    args : {
        state: ButtonColors.success,
    }
}

export const WarningButton : Story  = {
    args : {
        state: ButtonColors.warning
    }
}


export const DangerButton : Story  = {
    args : {
        state: ButtonColors.danger
    }
}

export const NeutralButton : Story  = {
    args : {
        state: ButtonColors.neutral
    }
}

export const DarkButton : Story  = {
    args : {
        state: ButtonColors.dark
    }
}


export const DisabledButton : Story  = {
    args : {
        state: ButtonColors.disabled
    }
}

export const TransparentButton : Story  = {
    parameters: {
        backgrounds: {
            default: 'Dark',
        },
    },
    args : {
        state: ButtonColors.transparent
    }
}
