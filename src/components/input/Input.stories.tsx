import {Meta, StoryObj} from "@storybook/react";
import Input from "./Input.tsx";

const meta : Meta = {
    title : 'Input Controls/Input',
    component : Input,
    args : {
        label : 'Input Label',
        placeholder : 'Enter some text',
        type: 'text',
    },
    argTypes : {
        error : {
            control: 'text'
        },
        type : {
            control: 'select',
            options : ['email', 'password', 'text'],
        }
    }
}
export default meta;

type Story = StoryObj<typeof Input>;

export const EmailInput : Story = {
    args: {
        label : 'Email',
        placeholder : 'Enter your email address',
        type: 'email',
        error : ''
    }
}

export const PasswordInput : Story = {
    args: {
        label : 'Password',
        placeholder : 'Enter your password',
        type: 'password',
        error : ''
    }
}

export const ErrorInput : Story = {
    args: {
        error : 'Email or Password is required!'
    }
}
