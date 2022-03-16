import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..'

const portrait = {
    name: 'portraits',
    description: 'Portraits of people in my life'
};
afterEach(cleanup);

describe('Gallery testing', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait}></Gallery>)
    })
    it('snapshots', () => {
        const { asFragment } = render(<Gallery
            currentCategory={portrait}
        ></Gallery>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders titles', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait}></Gallery>)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
    })
})