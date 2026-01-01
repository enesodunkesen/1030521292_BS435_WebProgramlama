import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GameHeader from './GameHeader';

describe('GameHeader', () => {
    const defaultProps = {
        playerName: 'TestPlayer',
        mode: 'easy',
        score: 50,
        round: 'Round 3'
    };

    it('displays the player name', () => {
        render(<GameHeader {...defaultProps} />);
        expect(screen.getByText('Player:')).toBeInTheDocument();
        expect(screen.getByText('TestPlayer')).toBeInTheDocument();
    });

    it('displays the mode as Easy when mode is easy', () => {
        render(<GameHeader {...defaultProps} />);
        expect(screen.getByText('Mode:')).toBeInTheDocument();
        expect(screen.getByText('Easy')).toBeInTheDocument();
    });

    it('displays the mode as Hard when mode is hard', () => {
        render(<GameHeader {...defaultProps} mode="hard" />);
        expect(screen.getByText('Hard')).toBeInTheDocument();
    });

    it('displays the score', () => {
        render(<GameHeader {...defaultProps} />);
        expect(screen.getByText('Score:')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('displays the round', () => {
        render(<GameHeader {...defaultProps} />);
        expect(screen.getByText('Round:')).toBeInTheDocument();
        expect(screen.getByText('Round 3')).toBeInTheDocument();
    });

    it('applies correct mode class for easy', () => {
        render(<GameHeader {...defaultProps} mode="easy" />);
        const modeValue = screen.getByText('Easy');
        expect(modeValue).toHaveClass('mode-easy');
    });

    it('applies correct mode class for hard', () => {
        render(<GameHeader {...defaultProps} mode="hard" />);
        const modeValue = screen.getByText('Hard');
        expect(modeValue).toHaveClass('mode-hard');
    });
});
