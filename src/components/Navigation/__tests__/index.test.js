import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component testing', () => {
    it('Renders a Nav component', () => {
        render(<Nav></Nav>)
    });

    it('snapshot', () => {
        const { asFragment } = render(<Nav></Nav>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('visible emoji', () => {
    it('inserts emoji into h2', () => {
        const  { getByLabelText } = render(<Nav></Nav>);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('visible links', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav></Nav>);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});