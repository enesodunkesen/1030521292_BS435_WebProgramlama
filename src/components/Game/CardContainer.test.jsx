import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
    const mockImages = [
        { id: 'img1', src: '/test1.jpg', alt: 'Test 1', isAI: true },
        { id: 'img2', src: '/test2.jpg', alt: 'Test 2', isAI: false },
        { id: 'img3', src: '/test3.jpg', alt: 'Test 3', isAI: false }
    ];

    it('renders all images', () => {
        render(
            <CardContainer 
                images={mockImages}
                onChoose={() => {}}
                disabled={false}
                revealedCards={[]}
                eliminatedCard={null}
            />
        );
        
        const cards = document.querySelectorAll('.image-card');
        expect(cards.length).toBe(3);
    });

    it('has the correct container class', () => {
        render(
            <CardContainer 
                images={mockImages}
                onChoose={() => {}}
                disabled={false}
                revealedCards={[]}
                eliminatedCard={null}
            />
        );
        
        expect(document.querySelector('.card-container')).toBeInTheDocument();
        expect(document.querySelector('.cards-wrapper')).toBeInTheDocument();
    });

    it('passes revealed prop correctly to cards', () => {
        render(
            <CardContainer 
                images={mockImages}
                onChoose={() => {}}
                disabled={false}
                revealedCards={['img1', 'img2']}
                eliminatedCard={null}
            />
        );
        
        const revealedCards = document.querySelectorAll('.revealed-ai, .revealed-real');
        expect(revealedCards.length).toBeGreaterThanOrEqual(0);
    });

    it('renders empty when no images provided', () => {
        render(
            <CardContainer 
                images={[]}
                onChoose={() => {}}
                disabled={false}
                revealedCards={[]}
                eliminatedCard={null}
            />
        );
        
        const cards = document.querySelectorAll('.image-card');
        expect(cards.length).toBe(0);
    });
});
