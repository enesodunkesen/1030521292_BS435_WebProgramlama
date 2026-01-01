import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RulesModal from './RulesModal';

describe('RulesModal', () => {
    it('renders nothing when isOpen is false', () => {
        const { container } = render(<RulesModal isOpen={false} onClose={() => {}} />);
        expect(container.firstChild).toBeNull();
    });

    it('renders the modal when isOpen is true', () => {
        render(<RulesModal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText('Welcome to Guess the AI generated picture')).toBeInTheDocument();
    });

    it('displays the how to play section', () => {
        render(<RulesModal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText('How to Play')).toBeInTheDocument();
    });

    it('displays the difficulty modes section', () => {
        render(<RulesModal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText('Difficulty Modes')).toBeInTheDocument();
        expect(screen.getByText('Easy Mode')).toBeInTheDocument();
        expect(screen.getByText('Hard Mode')).toBeInTheDocument();
    });

    it('displays the rules list', () => {
        render(<RulesModal isOpen={true} onClose={() => {}} />);
        expect(screen.getByText(/Each round shows you 3 images/)).toBeInTheDocument();
        expect(screen.getByText(/Click on the image you think is AI-generated/)).toBeInTheDocument();
        expect(screen.getByText(/If you guess wrong, you get a second chance/)).toBeInTheDocument();
    });

    it('calls onClose when close button is clicked', () => {
        const handleClose = vi.fn();
        render(<RulesModal isOpen={true} onClose={handleClose} />);
        
        const closeButton = screen.getByText('×');
        fireEvent.click(closeButton);
        
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when "Got it!" button is clicked', () => {
        const handleClose = vi.fn();
        render(<RulesModal isOpen={true} onClose={handleClose} />);
        
        const gotItButton = screen.getByText('Got it!');
        fireEvent.click(gotItButton);
        
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when clicking the overlay', () => {
        const handleClose = vi.fn();
        render(<RulesModal isOpen={true} onClose={handleClose} />);
        
        const overlay = document.querySelector('.modal-overlay');
        fireEvent.click(overlay);
        
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not close when clicking inside the modal content', () => {
        const handleClose = vi.fn();
        render(<RulesModal isOpen={true} onClose={handleClose} />);
        
        const content = document.querySelector('.modal-content');
        fireEvent.click(content);
        
        expect(handleClose).not.toHaveBeenCalled();
    });
});
