import React from 'react';
import ProviderDecorator from '../src/provider-decorator';
import { addDecorator } from '@storybook/react';
import '../src/index.css';

addDecorator(ProviderDecorator);

// addDecorator((StoryFn) => {
//     return (
//         <>
//             <StoryFn />
//         </>
//     );
// });