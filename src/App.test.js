// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdgeDbGraphql title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdgeDbGraphql/i);
    expect(titleElement).toBeInTheDocument();
});
