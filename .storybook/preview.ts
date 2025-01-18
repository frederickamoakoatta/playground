import type { Preview } from "@storybook/react";

const preview : Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#FFF' },
      ],
      default: 'Light',
    },
  },

  tags: ["autodocs"]
};

export default preview;
