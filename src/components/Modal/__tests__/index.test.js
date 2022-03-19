import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const mockToggleModal = jest.fn();
const currentPhoto = {
        name: 'Grocery aisle',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        index: 1
        };

describe('Modal Test Suite', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto}></Modal>)
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto}></Modal>);
        expect(asFragment()).toMatchSnapshot();
    }); 
});

describe('click event', () => {
    it('calls onClose handler', () => {
        render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto}></Modal>);
        const element = screen.getByText('Close');
        fireEvent.click(element);
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
});