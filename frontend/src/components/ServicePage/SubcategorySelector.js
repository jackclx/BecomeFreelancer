import React from 'react';

function SubcategorySelector({ subcategories, selectedSubcategory, onSelectSubcategory }) {
    return (
        <div className="subcategory-selector">
            <label htmlFor="subcategory">Choose a Subcategory:</label>
            <select
                id="subcategory"
                value={selectedSubcategory}
                onChange={(e) => onSelectSubcategory(e.target.value)}
            >
                <option value="">All Subcategories</option>
                {subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                        {subcategory}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SubcategorySelector;