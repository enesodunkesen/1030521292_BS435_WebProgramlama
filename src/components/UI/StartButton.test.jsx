import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import StartButton from './StartButton';

describe('StartButton', () => {
    it('renders the Ready button', () => {
        render(<StartButton onStart={() => {}} />);
        expect(screen.getByText('Ready')).toBeInTheDocument();
    });

    it('calls onStart when clicked', () => {
        const handleStart = vi.fn();
        render(<StartButton onStart={handleStart} />);
        
        const button = screen.getByRole('button');
        fireEvent.click(button);
        
        expect(handleStart).toHaveBeenCalledTimes(1);
    });

    it('has the correct class name', () => {
        render(<StartButton onStart={() => {}} />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('StartButton');
    });
});
