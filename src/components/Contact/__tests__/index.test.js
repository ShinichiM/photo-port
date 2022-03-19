import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '../index';

afterEach(cleanup);

describe('Contact component testing', () => {
    it('renders component', () => {
        render(<ContactForm></ContactForm>);
    });
    it('snapshot matches render', () => {
        const { asFragment } = render(<ContactForm></ContactForm>);
        expect(asFragment()).toMatchSnapshot();
    });
    it('tests h1 element text content', () => {
        render(<ContactForm></ContactForm>);
        const element = screen.getByTestId('contact');
        expect(element).toHaveTextContent('Contact Me')
    })
    it('tests button text content', () => {
        render(<ContactForm></ContactForm>);
        const element = screen.getByTestId('button');
        expect(element).toHaveTextContent('Submit');
    })
});