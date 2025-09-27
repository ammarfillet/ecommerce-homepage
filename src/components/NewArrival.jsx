export default function NewArrival() {
  return (
    <section className="py-10">
      <div className="container-px">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-6 bg-red-500"></div>
            <span className="text-sm text-gray-600">Featured</span>
          </div>
          <h2 className="text-3xl font-bold">New Arrival</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Big Card - Olive Oil */}
          <div className="relative bg-black rounded-xl overflow-hidden h-96">
            <img
              src="ecommerce-homepage/imagesNA/zaitun.png"
              alt="Minyak Zaitun"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3 className="text-2xl font-bold mb-2">Minyak Zaitun</h3>
              <p className="text-gray-300 text-sm mb-4">
                Minyak zaitun extra virgin berkualitas tinggi untuk masakan sehat.
              </p>
              <a
                href="#"
                className="text-white underline hover:no-underline hover:text-gray-300 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-rows-2 gap-6">
            {/* Small Card 1 - Animal Protein */}
            <div className="relative bg-black rounded-xl overflow-hidden h-48">
              <div className="grid grid-cols-2 h-full">
                <div className="p-5 text-white flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">Protein Hewani</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Daging sapi segar dari peternakan lokal.
                  </p>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors">
                    Shop Now
                  </a>
                </div>
                <div className="relative">
                  <img
                    src="ecommerce-homepage/imagesNA/sirlo.png"
                    alt="Daging Sapi"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Small Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Small Card 2 - Sugar */}
              <div className="relative bg-black rounded-xl overflow-hidden h-48">
                <div className="grid grid-cols-2 h-full">
                  <div className="p-5 text-white flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-2">Gula</h3>
                    <p className="text-gray-300 text-xs mb-4">
                      Gula pasir halus merk Gulaku.
                    </p>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                      Shop Now
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src="ecommerce-homepage/imagesNA/gulaku.png"
                      alt="Gula Gulaku"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Small Card 3 - Vegetables */}
              <div className="relative bg-black rounded-xl overflow-hidden h-48">
                <div className="grid grid-cols-2 h-full">
                  <div className="p-5 text-white flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-2">Sayur</h3>
                    <p className="text-gray-300 text-xs mb-4">
                      Terong segar organik.
                    </p>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                      Shop Now
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src="ecommerce-homepage/imagesNA/terongbg.png"
                      alt="Terong"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}