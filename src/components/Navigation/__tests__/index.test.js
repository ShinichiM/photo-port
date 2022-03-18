import React from "react";
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [{
    name: 'portraits',
    description: 'Portraits of people in my life'
}];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component testing', () => {
    it('Renders a Nav component', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        ></Nav>)
    });

    it('snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        ></Nav>); 
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('visible emoji', () => {
    it('inserts emoji into h2', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory} 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        ></Nav>);
        const element = screen.getByLabelText('camera')
        expect(element).toHaveTextContent('📸');
    });
});

describe('visible links', () => {
    it('inserts text into the links', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        ></Nav>);
        
        const element = screen.getByTestId('link')
        const element2 = screen.getByTestId('about')
        expect(element).toHaveTextContent('Oh Snap!');
        expect(element2).toHaveTextContent('About');
    });
});