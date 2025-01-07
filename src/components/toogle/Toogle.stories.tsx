import {Meta, StoryObj} from "@storybook/react";
import Toggle from "./Toggle.tsx";


const meta : Meta = {
    title : 'Input Controls/Toggle',
    component : Toggle
}
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Switch : Story = {
    args : {
        label : 'Remember me',
        hasLabel : true
    }
}