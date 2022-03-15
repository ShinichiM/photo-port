// Import react to enable components
import React from 'react';
// render > Jest creating DOM simulation, cleanup > remove components from DOM (memory leaking)
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import About from '..';

// clear 'cache' after each test
afterEach(cleanup);

describe('About component', () => {
    // render About test
    it('renders', () => {
        render(<About></About>);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About></About>);
        expect(asFragment()).toMatchSnapshot();
    })
})