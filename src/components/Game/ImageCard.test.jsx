import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageCard from './ImageCard';

describe('ImageCard', () => {
    const mockImage = {
        id: 'test1',
        src: '/test.jpg',
        alt: 'Test Image',
        isAI: true
    };

    it('renders the image card', () => {
        render(
            <ImageCard 
                image={mockImage}
                onChoose={() => {}}
                disabled={false}
                revealed={false}
            />
        );
        
        expect(document.querySelector('.image-card')).toBeInTheDocument();
    });

    it('calls onChoose when Choose button is clicked and not disabled', () => {
        const handleChoose = vi.fn();
        render(
            <ImageCard 
                image={mockImage}
                onChoose={handleChoose}
                disabled={false}
                revealed={false}
            />
        );
        
        const button = screen.getByRole('button', { name: /choose/i });
        fireEvent.click(button);
        
        expect(handleChoose).toHaveBeenCalledWith(mockImage);
    });

    it('does not call onChoose when disabled', () => {
        const handleChoose = vi.fn();
        render(
            <ImageCard 
                image={mockImage}
                onChoose={handleChoose}
                disabled={true}
                revealed={false}
            />
        );
        
        const button = screen.getByRole('button', { name: /choose/i });
        fireEvent.click(button);
        
        expect(handleChoose).not.toHaveBeenCalled();
    });

    it('adds disabled class when disabled', () => {
        render(
            <ImageCard 
                image={mockImage}
                onChoose={() => {}}
                disabled={true}
                revealed={false}
            />
        );
        
        expect(document.querySelector('.image-card')).toHaveClass('disabled');
    });

    it('adds revealed-ai class when revealed and isAI is true', () => {
        render(
            <ImageCard 
                image={mockImage}
                onChoose={() => {}}
                disabled={false}
                revealed={true}
            />
        );
        
        expect(document.querySelector('.image-card')).toHaveClass('revealed-ai');
    });

    it('adds revealed-real class when revealed and isAI is false', () => {
        const realImage = { ...mockImage, isAI: false };
        render(
            <ImageCard 
                image={realImage}
                onChoose={() => {}}
                disabled={false}
                revealed={true}
            />
        );
        
        expect(document.querySelector('.image-card')).toHaveClass('revealed-real');
    });

    it('shows loading placeholder before image loads', () => {
        render(
            <ImageCard 
                image={mockImage}
                onChoose={() => {}}
                disabled={false}
                revealed={false}
            />
        );
        
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
});
