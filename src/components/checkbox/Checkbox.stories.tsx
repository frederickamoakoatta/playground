import {Meta, StoryObj} from "@storybook/react";
import Checkbox from "./Checkbox";
import {fn} from "@storybook/test";

const meta: Meta = {
    title : 'Input Controls/Checkbox',
    component : Checkbox,
    args : {
        label: 'label',
        onChange : fn()
    },
    argTypes :  {
        hasLabel : {
            type : 'boolean',
        }
    }
}

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const InputCheckbox : Story  = {
    args : {
        hasLabel : false,
    }
}