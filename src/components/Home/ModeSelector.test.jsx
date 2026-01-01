import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModeSelector from './ModeSelector';

describe('ModeSelector', () => {
    it('renders the title', () => {
        render(<ModeSelector onModeSelect={() => {}} selectedMode="easy" />);
        expect(screen.getByText('Select Game Mode')).toBeInTheDocument();
    });

    it('renders both mode options', () => {
        render(<ModeSelector onModeSelect={() => {}} selectedMode="easy" />);
        expect(screen.getByText('Hard Mode')).toBeInTheDocument();
        expect(screen.getByText('Easy Mode')).toBeInTheDocument();
    });

    it('shows easy mode as selected when selectedMode is easy', () => {
        render(<ModeSelector onModeSelect={() => {}} selectedMode="easy" />);
        const easyRadio = screen.getByRole('radio', { name: /easy mode/i });
        const hardRadio = screen.getByRole('radio', { name: /hard mode/i });
        
        expect(easyRadio).toBeChecked();
        expect(hardRadio).not.toBeChecked();
    });

    it('shows hard mode as selected when selectedMode is hard', () => {
        render(<ModeSelector onModeSelect={() => {}} selectedMode="hard" />);
        const easyRadio = screen.getByRole('radio', { name: /easy mode/i });
        const hardRadio = screen.getByRole('radio', { name: /hard mode/i });
        
        expect(hardRadio).toBeChecked();
        expect(easyRadio).not.toBeChecked();
    });

    it('calls onModeSelect with "easy" when Easy Mode is clicked', () => {
        const handleSelect = vi.fn();
        render(<ModeSelector onModeSelect={handleSelect} selectedMode="hard" />);
        
        const easyRadio = screen.getByRole('radio', { name: /easy mode/i });
        fireEvent.click(easyRadio);
        
        expect(handleSelect).toHaveBeenCalledWith('easy');
    });

    it('calls onModeSelect with "hard" when Hard Mode is clicked', () => {
        const handleSelect = vi.fn();
        render(<ModeSelector onModeSelect={handleSelect} selectedMode="easy" />);
        
        const hardRadio = screen.getByRole('radio', { name: /hard mode/i });
        fireEvent.click(hardRadio);
        
        expect(handleSelect).toHaveBeenCalledWith('hard');
    });
});
