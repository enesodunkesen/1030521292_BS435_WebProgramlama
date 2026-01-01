import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GameTitle from './GameTitle';

describe('GameTitle', () => {
    it('renders the game title', () => {
        render(<GameTitle />);
        expect(screen.getByText('Guess the AI generated picture')).toBeInTheDocument();
    });

    it('has the correct class name', () => {
        render(<GameTitle />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('GameTitle');
    });
});
