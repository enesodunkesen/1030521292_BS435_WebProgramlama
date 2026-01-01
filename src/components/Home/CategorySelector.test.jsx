import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CategorySelector from './CategorySelector';

describe('CategorySelector', () => {
    it('renders the title', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="faces" />);
        expect(screen.getByText('Select Category Mode')).toBeInTheDocument();
    });

    it('renders all category options', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="faces" />);
        expect(screen.getByText('Faces')).toBeInTheDocument();
        expect(screen.getByText('Cities')).toBeInTheDocument();
        expect(screen.getByText('Cats')).toBeInTheDocument();
    });

    it('shows faces as selected when selectedCategory is faces', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="faces" />);
        const facesRadio = screen.getByRole('radio', { name: /faces/i });
        
        expect(facesRadio).toBeChecked();
    });

    it('shows cities as selected when selectedCategory is cities', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="cities" />);
        const citiesRadio = screen.getByRole('radio', { name: /cities/i });
        
        expect(citiesRadio).toBeChecked();
    });

    it('shows cats as selected when selectedCategory is cats', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="cats" />);
        const catsRadio = screen.getByRole('radio', { name: /cats/i });
        
        expect(catsRadio).toBeChecked();
    });

    it('calls onCategorySelect with "faces" when Faces is clicked', () => {
        const handleSelect = vi.fn();
        render(<CategorySelector onCategorySelect={handleSelect} selectedCategory="cities" />);
        
        const facesRadio = screen.getByRole('radio', { name: /faces/i });
        fireEvent.click(facesRadio);
        
        expect(handleSelect).toHaveBeenCalledWith('faces');
    });

    it('calls onCategorySelect with "cities" when Cities is clicked', () => {
        const handleSelect = vi.fn();
        render(<CategorySelector onCategorySelect={handleSelect} selectedCategory="faces" />);
        
        const citiesRadio = screen.getByRole('radio', { name: /cities/i });
        fireEvent.click(citiesRadio);
        
        expect(handleSelect).toHaveBeenCalledWith('cities');
    });

    it('calls onCategorySelect with "cats" when Cats is clicked', () => {
        const handleSelect = vi.fn();
        render(<CategorySelector onCategorySelect={handleSelect} selectedCategory="faces" />);
        
        const catsRadio = screen.getByRole('radio', { name: /cats/i });
        fireEvent.click(catsRadio);
        
        expect(handleSelect).toHaveBeenCalledWith('cats');
    });

    it('has the correct container class', () => {
        render(<CategorySelector onCategorySelect={() => {}} selectedCategory="faces" />);
        expect(document.querySelector('.CategorySelector')).toBeInTheDocument();
    });
});
