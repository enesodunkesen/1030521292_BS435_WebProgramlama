import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerNameInput from './PlayerNameInput';

describe('PlayerNameInput', () => {
    it('renders the input label', () => {
        render(<PlayerNameInput value="" onChange={() => {}} />);
        expect(screen.getByText('Enter Your Name')).toBeInTheDocument();
    });

    it('renders the input field with placeholder', () => {
        render(<PlayerNameInput value="" onChange={() => {}} />);
        expect(screen.getByPlaceholderText('Player Name')).toBeInTheDocument();
    });

    it('displays the current value', () => {
        render(<PlayerNameInput value="TestPlayer" onChange={() => {}} />);
        expect(screen.getByDisplayValue('TestPlayer')).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const handleChange = vi.fn();
        render(<PlayerNameInput value="" onChange={handleChange} />);
        
        const input = screen.getByPlaceholderText('Player Name');
        fireEvent.change(input, { target: { value: 'NewPlayer' } });
        
        expect(handleChange).toHaveBeenCalledWith('NewPlayer');
    });

    it('has maxLength of 20', () => {
        render(<PlayerNameInput value="" onChange={() => {}} />);
        const input = screen.getByPlaceholderText('Player Name');
        expect(input).toHaveAttribute('maxLength', '20');
    });
});
