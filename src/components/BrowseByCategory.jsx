import { useState } from 'react';


// Category data
const categories = [
  { id: 'vegetables', name: 'Sayur-sayuran', image: 'ecommerce-homepage/icons/sayur.png' },
  { id: 'drinks', name: 'Minuman dan Susu', image: 'ecommerce-homepage/icons/minuman.png' },
  { id: 'oils', name: 'Minyak dan bumbu', image: 'ecommerce-homepage/icons/bumbu.png' },
  { id: 'fruits', name: 'Buah-buahan', image: 'ecommerce-homepage/icons/buah.png' },
  { id: 'meat', name: 'Protein hewani', image: 'ecommerce-homepage/icons/hewan.png' },
  { id: 'grains', name: 'Beras dan Bijian', image: 'ecommerce-homepage/icons/bijian.png' },
];

export default function BrowseByCategory({ onSelect }) {
  const [selected, setSelected] = useState('Protein hewani');

  const handleSelect = (name) => {
    setSelected(name);
    if (onSelect) onSelect(name);
  };

  return (
    <section className="py-8">
      <div className="container-px">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-6 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Categories</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Browse By Category</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const isSelected = selected === category.name;
            return (
              <button
                key={category.id}
                onClick={() => handleSelect(category.name)}
                className={`group min-h-[120px] p-4 rounded-sm border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  isSelected
                    ? 'bg-red-500 border-transparent text-white'
                    : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    <img
                      src={category.image}
                      alt=""
                      className="w-8 h-8"
                      aria-hidden="true"
                    />
                  </div>
                  <span className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {category.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}