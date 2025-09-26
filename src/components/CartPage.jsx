import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { X, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

const defaultItems = [
  {
    id: 'semangka-cimahi',
    name: 'Semangka Cimahi',
    unit: '1 Buah',
    price: 20000,
    qty: 1,
    image: 'public/imagesexplore/semongko.png'
  },
  {
    id: 'jeruk-medan',
    name: 'Jeruk Medan',
    unit: '1 Kg',
    price: 20000,
    qty: 2,
    image: 'public/imagesexplore/jeruk.png'
  }
];

export default function CartPage() {
  const { cart, removeFromCart, updateCartItem, getCartTotal, setCart } = useAuth();
  const navigate = useNavigate();
  const isDefault = cart.length === 0;
  const displayItems = isDefault ? defaultItems : cart;
  const [quantities, setQuantities] = useState(
    displayItems.reduce((acc, item) => ({ ...acc, [item.id]: item.qty }), {})
  );
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleQuantityChange = (id, qty) => {
    setQuantities(prev => ({ ...prev, [id]: parseInt(qty) }));
  };

  const handleIncrease = (id) => {
    const current = quantities[id] || displayItems.find(item => item.id === id)?.qty || 1;
    const newQty = Math.min(current + 1, 99);
    setQuantities(prev => ({ ...prev, [id]: newQty }));
  };

  const handleDecrease = (id) => {
    const current = quantities[id] || displayItems.find(item => item.id === id)?.qty || 1;
    const newQty = Math.max(current - 1, 1);
    setQuantities(prev => ({ ...prev, [id]: newQty }));
  };


  const handleUpdateCart = () => {
    if (isDefault) {
      // Set cart to updated default items
      const updatedItems = displayItems.map(item => ({
        ...item,
        qty: quantities[item.id] || item.qty
      })).filter(item => (quantities[item.id] || item.qty) > 0);
      setCart(updatedItems);
    } else {
      Object.entries(quantities).forEach(([id, qty]) => {
        if (qty === 0) {
          removeFromCart(id);
        } else {
          updateCartItem(id, qty);
        }
      });
      // Refresh quantities from updated cart
      const updatedQuantities = cart.reduce((acc, item) => ({ ...acc, [item.id]: item.qty }), {});
      setQuantities(updatedQuantities);
    }
  };

  const handleRemoveItem = (id) => {
    if (!isDefault) {
      removeFromCart(id);
      setQuantities(prev => {
        const newQuantities = { ...prev };
        delete newQuantities[id];
        return newQuantities;
      });
    }
    // For default items, do nothing (disabled)
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'HEMAT10') {
      setAppliedCoupon({ code: 'HEMAT10', discount: 0.1 });
      setCouponError('');
    } else {
      setAppliedCoupon(null);
      setCouponError('Invalid coupon code');
    }
  };

  const subtotal = isDefault ? displayItems.reduce((sum, item) => sum + item.price * (quantities[item.id] || item.qty), 0) : getCartTotal();
  const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-red-500">Home</Link></li>
            <li><ChevronRight className="w-4 h-4" /></li>
            <li className="text-gray-900">Cart</li>
          </ol>
        </nav>

        {/* Cart Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Subtotal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {displayItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          disabled={isDefault}
                          className={`transition-colors ${isDefault ? 'text-gray-300 cursor-not-allowed' : 'hover:opacity-80'}`}
                          style={{ color: isDefault ? undefined : '#DB4444' }}
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.unit}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {formatCurrency(item.price)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="inline-flex border rounded" style={{ width: '72px', height: '44px', borderWidth: '1.5px', borderColor: '#DDD', borderRadius: '4px' }}>
                        <input
                          type="text"
                          value={(quantities[item.id] || item.qty).toString().padStart(2, '0')}
                          readOnly
                          className="text-center border-0 bg-transparent"
                          style={{ width: '48px', padding: '0 6px', fontSize: '14px', color: '#333', lineHeight: '44px' }}
                        />
                        <div className="border-l" style={{ borderWidth: '1.5px', borderColor: '#DDD', width: '24px' }}>
                          <button
                            onClick={() => handleIncrease(item.id)}
                            className="w-full text-gray-800 hover:text-red-500 flex items-center justify-center"
                            style={{ height: '22px' }}
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDecrease(item.id)}
                            className="w-full text-gray-800 hover:text-red-500 flex items-center justify-center border-t"
                            style={{ height: '22px', borderWidth: '1.5px', borderColor: '#DDD' }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {formatCurrency(item.price * (quantities[item.id] || item.qty))}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="px-6 py-4">
                    <Link
                      to="/"
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Return To Shop
                    </Link>
                  </td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-start">
                    <button
                      onClick={handleUpdateCart}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Update Cart
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coupon */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Coupon Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-6 py-3 text-white rounded-md hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#DB4444' }}
                >
                  Apply Coupon
                </button>
              </div>
              {couponError && <p className="text-red-500 text-sm mt-2">{couponError}</p>}
              {appliedCoupon && (
                <p className="text-green-600 text-sm mt-2">Coupon {appliedCoupon.code} applied! {appliedCoupon.discount * 100}% discount</p>
              )}
            </div>
          </div>

          {/* Cart Total */}
          <div className='flex items-center ml-5'>
            <div className="bg-white border" style={{ width: '470px', height: '324px', borderWidth: '1.5px', borderColor: '#222', borderRadius: '4px', padding: '24px' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '18px' }}>Cart Total</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-gray-900">{formatCurrency(subtotal)}</span>
                </div>
                <hr style={{ borderColor: '#E5E5E5' }} />
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
                {appliedCoupon && (
                  <>
                    <hr style={{ borderColor: '#E5E5E5' }} />
                    <div className="flex justify-between text-red-600 text-sm">
                      <span>Discount ({appliedCoupon.code}):</span>
                      <span>-{formatCurrency(discount)}</span>
                    </div>
                  </>
                )}
                <hr style={{ borderColor: '#E5E5E5' }} />
                <div className="flex justify-between text-base font-medium">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-gray-900">{formatCurrency(total)}</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-5 text-white font-bold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#DB4444', height: '46px', borderRadius: '8px' }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}