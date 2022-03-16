import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [{
    name: 'portraits',
    description: 'Portraits of people in my life'
}];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component testing', () => {
    it('Renders a Nav component', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        ></Nav>)
    });

    it('snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        ></Nav>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('visible emoji', () => {
    it('inserts emoji into h2', () => {
        const  { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        ></Nav>);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('visible links', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        ></Nav>);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});