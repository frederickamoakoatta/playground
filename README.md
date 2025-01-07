# Storybook Playground

## Overview

This project is a playground for building, testing, and documenting UI components using [Storybook](https://storybook.js.org/). It serves as a collaborative space for developers and designers to prototype, refine, and showcase reusable components.

## Features

- **Component Development**: Develop isolated UI components without dependency on the main application.
- **Live Documentation**: Automatically generate interactive documentation for each component.
- **Testing**: Ensure components work as expected using tools like Jest and Chromatic.
- **Theming Support**: Experiment with multiple themes to ensure design consistency.
- **Accessibility**: Test components for accessibility using Storybook's built-in tools.

## Prerequisites

- Node.js (>= 16)
- npm or Yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/storybook-playground.git
   ```

2. Navigate to the project directory:

   ```bash
   cd storybook-playground
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Usage

### Starting Storybook

To launch Storybook in development mode, run:

```bash
  npm run storybook
```

or

```bash
  yarn storybook
```

This will start a local development server, typically accessible at [http://localhost:6006](http://localhost:6006).

### Adding Components

1. Create a new directory under `src/components` for your component.
2. Implement your component in a `.jsx` or `.tsx` file.
3. Add a `.stories.jsx` or `.stories.tsx` file in the same directory to define the Storybook stories for your component.

Example of a simple story:

```jsx
import React from 'react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};
```

### Building Components

To build your components for production:

```bash
  npm run build
```

or

```bash
  yarn build
```

This will output a static version of your Storybook under the `storybook-static` directory.

### Testing Components

Run unit tests:

```bash
  npm tests
```

or

```bash
  yarn tests
```

For visual regression testing with Chromatic:

```bash
  npx chromatic --project-token=<your-chromatic-project-token>
```

## Project Structure

```
storybook-playground/
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/  # Component implementations
│   └── stories/     # Additional example stories
├── public/           # Static assets
├── package.json
└── README.md
```

## Contributing

1. Fork the repository and create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:

   ```bash
   git commit -m 'Add your message here'
   ```

3. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a pull request.

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Chromatic](https://www.chromatic.com/)
- [Jest](https://jestjs.io/)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
