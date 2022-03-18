import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
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
        render(<Gallery currentCategory={portrait}></Gallery>)
        const element = screen.getByTestId('h1tag');
        expect(element).toHaveTextContent('Portraits');
    })
})