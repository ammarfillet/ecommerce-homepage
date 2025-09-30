import { Heart, Eye } from 'lucide-react';

const products = [
  { id: 1, name: 'Kentang Gunung Sindur 1kg', price: 20000, image: '/images/kentangsindur.png', rating: 4.8, reviews: 245 },
  { id: 2, name: 'Seledri 1 ikat', price: 10000, image: '/images/seledri.png', rating: 4.7, reviews: 189 },
  { id: 3, name: 'Timun', price: 14000, compareAt: 20000, image: '/images/timun.png', rating: 4.6, reviews: 156 },
  { id: 4, name: 'Dada Ayam 1kg', price: 55000, image: '/images/dadaayam.png', rating: 4.9, reviews: 312 },
];

export default function BestSellingProducts() {
  return (
    <section className="py-12">
      <div className="container-px">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-6 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">This Month</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Best Selling Products</h2>
          </div>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-200">
              {/* Image */}
              <div className="relative bg-gray-100 aspect-square overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                {/* Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50" aria-label="Add to wishlist">
                    <Heart size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50" aria-label="Quick view">
                    <Eye size={16} />
                  </button>
                </div>
                {/* Add to Cart Button */}
                <div className="absolute inset-0">
                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <h3 className="font-medium line-clamp-2 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-bold">Rp{product.price.toLocaleString()}</span>
                  {product.compareAt && (
                    <span className="text-gray-400 line-through text-sm">Rp{product.compareAt.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}