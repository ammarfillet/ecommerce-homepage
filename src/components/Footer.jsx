import { Facebook, Twitter, Instagram, Linkedin, SendHorizontal } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isAccountPage = location.pathname.startsWith('/account');
  return (
    <footer className="mt-10 bg-black text-white">
      <div className="container-px py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand + Subscribe */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-semibold">Exclusive</div>
            <div className="mt-6">
              <div className="text-lg font-semibold">Subscribe</div>
              <p className="mt-2 text-sm text-white/70">Get 10% off your first order</p>

              <form className="mt-4 relative max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-11 bg-transparent border border-gray-500/60 rounded-md px-4 pr-12 text-white placeholder:text-gray-400 focus:border-white focus:outline-none"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition" aria-label="Subscribe">
                  <SendHorizontal className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-lg font-semibold">Support</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>Madison Park, Kiosk E-06, Jakarta Barat, Indonesia</li>
              <li><a href="mailto:admin@groupisa.com" className="hover:underline">admin@groupisa.com</a></li>
              <li><a href="tel:+6281380804008" className="hover:underline">+6281380804008</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <div className="text-lg font-semibold">Account</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:underline">My Account</a></li>
              <li><a href="/login" className="hover:underline">Login</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
              <li><a href="#" className="hover:underline">Wishlist</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <div className="text-lg font-semibold">Quick Link</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Download App or Connect with us */}
          <div>
            {isAccountPage ? (
              <>
                <div className="text-lg font-semibold">Download App</div>
                <p className="mt-2 text-sm text-white/70">Save $3 with App New User Only</p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                  <img
                    src="ecommerce-homepage/imagesfooter/qrcodee.png"
                    alt="QR Code"
                    className="w-32 h-32 rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="block hover:opacity-80 transition"
                      aria-label="Get it on Google Play"
                    >
                      <img
                        src="ecommerce-homepage/imagesfooter/getitgp.png"
                        alt="Get it on Google Play"
                        className="h-11 w-auto"
                      />
                    </a>
                    <a
                      href="#"
                      className="block hover:opacity-80 transition"
                      aria-label="Download on the App Store"
                    >
                      <img
                        src="ecommerce-homepage/imagesfooter/dwappstore.png"
                        alt="Download on the App Store"
                        className="h-11 w-auto"
                      />
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-lg font-semibold">Connect with us</div>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px py-4 text-center text-xs text-white/70">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
}
