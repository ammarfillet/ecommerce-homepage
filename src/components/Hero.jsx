import CategoryList from './CategoryList';

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container-px grid grid-cols-1 lg:grid-cols-[400px,1fr] gap-8">
        <div className="order-1">
          <CategoryList />
        </div>
        <div className="order-2 bg-black text-white h-[280px] lg:h-[344px] hero-card">
          <div className="p-6 lg:pl-12 lg:pr-6 h-full flex flex-col justify-center">
            <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-left mb-4">
              Up to 10%<br />off Voucher
            </h2>
            <button className="text-white border-b border-white/50 hover:border-white text-left w-fit">
              Shop Now →
            </button>
          </div>
          {/* Positioned image on the right */}
          <img
            src="ecommerce-homepage/images/spinach.png"
            alt="Bayam segar"
            className="hero-img"
          />
          {/* Slider dots centered at bottom */}
          <div className="hero-dots flex space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

