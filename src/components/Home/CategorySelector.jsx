import React from "react";
import './CategorySelector.css'

function CategorySelector({ onCategorySelect, selectedCategory }) {
    const handleSelect = (category) => {
        onCategorySelect(category);
    };

    return (
        <div className="CategorySelector">
            <h3>Select Category Mode</h3>
            <div className="category-radio-input">
                <label>
                    <input 
                        onChange={() => handleSelect("faces")} 
                        type="radio" 
                        name="category-radio" 
                        checked={selectedCategory === 'faces'} 
                    />
                    <span>Faces</span>
                </label>
                <label>
                    <input 
                        onChange={() => handleSelect("cities")} 
                        type="radio" 
                        name="category-radio" 
                        checked={selectedCategory === 'cities'} 
                    />
                    <span>Cities</span>
                </label>
                <label>
                    <input 
                        onChange={() => handleSelect("cats")} 
                        type="radio" 
                        name="category-radio" 
                        checked={selectedCategory === 'cats'} 
                    />
                    <span>Cats</span>
                </label>
                <span className="category-selection"></span>
            </div>
        </div>
    );
}

export default CategorySelector;
