import {configure, addDecorator} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';

addDecorator(withA11y);
addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.(jsx|mdx)$/), module);
