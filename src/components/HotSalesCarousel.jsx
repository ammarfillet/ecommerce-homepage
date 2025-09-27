import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import { Heart, Eye } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { id: 1, name: 'Bawang Putih Cimahi 1kg', price: 48000, compareAt: 60000, discount: 20, rating: 4.8, reviews: 245, image: 'ecommerce-homepage/public/images/bawangputih.png' },
  { id: 2, name: 'Terong Sukabumi 1kg', price: 9000, compareAt: 10000, discount: 10, rating: 4.7, reviews: 189, image: 'ecommerce-homepage/public/images/terong.jpg' },
  { id: 3, name: 'Bayam Bandung 1 ikat', price: 7000, compareAt: 10000, discount: 30, rating: 4.6, reviews: 156, image: 'ecommerce-homepage/public/images/spinach.png' },
  { id: 4, name: 'Garam Meja 500g', price: 18000, compareAt: 20000, discount: 10, rating: 4.9, reviews: 312, image: 'ecommerce-homepage/public/images/garammeja.png' },
  { id: 5, name: 'Bawang Merah Brebes 500g', price: 22000, compareAt: 26000, discount: 15, rating: 4.8, reviews: 278, image: 'ecommerce-homepage/public/images/bawangmerah.png' },
  { id: 6, name: 'Tomat Lokal 1kg', price: 11000, compareAt: 12500, discount: 12, rating: 4.7, reviews: 198, image: 'ecommerce-homepage/public/images/tomat.png' },
  { id: 7, name: 'Cabai Merah Keriting 250g', price: 15000, compareAt: 18500, discount: 18, rating: 4.5, reviews: 134, image: 'ecommerce-homepage/public/images/cabai.png' },
  { id: 8, name: 'Minyak Goreng Sawit 1L', price: 16500, compareAt: 18500, discount: 10, rating: 4.6, reviews: 167, image: 'ecommerce-homepage/public/images/minyakgoreng.png' },
  { id: 9, name: 'Beras Pandan Wangi 5kg', price: 78000, compareAt: 85000, discount: 8, rating: 4.8, reviews: 223, image: 'ecommerce-homepage/public/images/beras.png' },
  { id: 10, name: 'Kentang Dieng 1kg', price: 22500, compareAt: 25000, discount: 10, rating: 4.7, reviews: 189, image: 'ecommerce-homepage/public/images/kentang.png' },
];

export default function HotSalesCarousel() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <section className="py-12">
      <div className="container-px">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-6 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-600">Today's</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold">Hot Sales</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Previous products"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Next products"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Keyboard]}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          loop={true}
          keyboard={{ enabled: true }}
          className="pb-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden group">
                {/* Image */}
                <div className="relative bg-gray-100 aspect-square overflow-hidden transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    -{product.discount}%
                  </div>
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
                    <span className="text-gray-400 line-through text-sm">Rp{product.compareAt.toLocaleString()}</span>
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="bg-red-500 text-white px-8 py-3 rounded-sm font-semibold hover:bg-red-600 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}