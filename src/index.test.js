import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import App from './views/App';

describe('App component', () => {
    beforeAll(() => {
        render(<App />)
    })

    it('should have the right message in the dom', () => {
        const message = 'Wallet';

        expect(screen.getByText(message)).toBeInTheDocument();
    })

    afterAll(cleanup)
});
