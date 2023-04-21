module.exports = {
    stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-styling',
        '@storybook/addon-mdx-gfm',
        '@storybook/addon-a11y',
    ],
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
    },

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
