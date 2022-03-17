import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photolist from '..';

afterEach(cleanup);

describe('Photolist Testing', () => {
    const category = {
        name: 'portrait',
        description: 'Portraits of animals'
    };

    it('renders', () => {
        render(<Photolist></Photolist>);
    });
    it('snapshot', () => {
        const { asFragment } = render(<Photolist></Photolist>);
        expect(asFragment()).toMatchSnapshot();
    });
});