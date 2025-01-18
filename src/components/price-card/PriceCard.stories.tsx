import {Meta, StoryObj} from "@storybook/react";
import PriceCard from "./PriceCard";

const meta : Meta = {
    title : 'Pricing Card',
    component : PriceCard,
    args : {
        features : [
            {name: '4k monthly emails', state: true},
            {name: '2k subscribers', state: true},
            {name: 'Email scheduling', state: true},
            {name: 'Design library', state: false},
            {name: 'Email support', state: false},
        ]
    },
    argTypes : {
        duration : {
            control : 'select',
            options : ['monthly', 'yearly'],
        }
    }
}
export default meta;

type Story = StoryObj<typeof PriceCard>;

export const FreePriceCard : Story =  {
    args : {
        name : 'Free',
        price : '$0',
        duration : 'month',
    }
}

export const ProPriceCard : Story =  {
    args : {
        ...meta.args,
        name : 'Pro',
        price : '$24',
        duration : 'month',
    }
}


export const EnterprisePriceCard : Story =  {
    args : {
        ...meta.args,
        name : 'Enterprise',
        price : '$99',
        duration : 'month',
        features : [
            ...meta.args?.features || [],
        ],
    },
    render: (args) => {
        const features = args?.features.map((feature, i) => {
            return i >= 3 ? {...feature, state: true} : feature;
        });
        return (<PriceCard {...args} features={features}/>)
    }
}