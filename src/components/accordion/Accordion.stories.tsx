import {Meta, StoryObj} from "@storybook/react";
import Accordion from "./Accordion.tsx";


const meta : Meta = {
    title : 'Accordion',
    component : Accordion,
}
export default meta;

type Story = StoryObj<typeof Accordion>;

export const ToggleAccordion: Story = {
    args : {
        header : 'Toggle Accordion',
        content : 'Toggle Accordion',
    }
}