import { Heart, Eye, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function ExploreProducts() {
  const products = [
    { id: 1, name: 'Minyak Bimoli 1L', price: 25000, compareAt: 30000, rating: 4.5, reviews: 120, image: 'public/imagesexplore/bimoli.png', isNew: true },
    { id: 2, name: 'Daging Sapi Cianjur 1kg', price: 120000, rating: 4.8, reviews: 85, image: 'public/imagesexplore/dagingsapi.png' },
    { id: 3, name: 'Bawang Merah 1kg', price: 35000, compareAt: 40000, rating: 4.2, reviews: 200, image: 'public/images/bawangmerah.png' },
    { id: 4, name: 'Kacang Panjang 1 Ikat', price: 15000, rating: 4.0, reviews: 150, image: 'public/imagesexplore/kacangpanjang.png', isNew: true },
    { id: 5, name: 'Wortel 1kg', price: 25000, rating: 4.3, reviews: 90, image: 'public/imagesexplore/wortel.png' },
    { id: 6, name: 'Bawang Bombay 1kg', price: 30000, compareAt: 35000, rating: 4.1, reviews: 110, image: 'public/imagesexplore/bombay.png' },
    { id: 7, name: 'Semangka 1 Buah', price: 45000, rating: 4.6, reviews: 75, image: 'public/imagesexplore/semongko.png', isNew: true },
    { id: 8, name: 'Jeruk Medan 1kg', price: 28000, rating: 4.4, reviews: 130, image: 'public/imagesexplore/jeruk.png' },

  ];

  return (
    <section className="py-10">
      <div className="container-px">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-red-500"></div>
              <span className="text-sm text-gray-600">Our Products</span>
            </div>
            <h2 className="text-3xl font-bold">Explore Our Products</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" aria-label="Previous products">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" aria-label="Next products">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              {/* Image Area */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-t-xl">
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
                    NEW
                  </div>
                )}
                <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                  <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Add to wishlist">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-50 transition-colors" aria-label="Quick view">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:-translate-y-2"
                  loading="lazy"
                />
                {/* Add To Cart Bar */}
                <div className="absolute inset-0 flex items-end">
                  <button
                    className="w-full bg-black text-white py-3 font-medium translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                    aria-label="Add to cart"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-500 font-bold">IDR {product.price.toLocaleString()}</span>
                  {product.compareAt && (
                    <span className="text-gray-500 line-through text-sm">IDR {product.compareAt.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-sm font-medium transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}