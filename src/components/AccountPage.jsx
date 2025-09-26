import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ChevronRight } from 'lucide-react';

export default function AccountPage() {
  const { user } = useAuth();
  const [activeMenu, setActiveMenu] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const menuSections = [
    {
      title: 'Manage My Account',
      items: [
        { id: 'profile', label: 'My Profile', active: true },
        { id: 'address', label: 'Address Book' },
        { id: 'payment', label: 'My Payment Options' }
      ]
    },
    {
      title: 'My Orders',
      items: [
        { id: 'orders', label: 'My Orders' },
        { id: 'returns', label: 'My Returns' },
        { id: 'cancellations', label: 'My Cancellations' }
      ]
    },
    {
      title: 'My Wishlist',
      items: [
        { id: 'wishlist', label: 'My Wishlist' }
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Saving profile:', formData);
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      firstName: user?.name?.split(' ')[0] || '',
      lastName: user?.name?.split(' ').slice(1).join(' ') || '',
      email: user?.email || '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Welcome */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end">
            <p className="text-gray-600">Welcome! <span className="font-medium text-red-500">{user?.name}</span></p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <nav className="p-6">
                {menuSections.map((section, sectionIndex) => (
                  <div key={section.title} className={sectionIndex > 0 ? 'mt-8' : ''}>
                    <h3 className="text-lg font-bold text-black mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveMenu(item.id)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                              activeMenu === item.id
                                ? 'text-red-500 font-bold'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-red-500">Edit Your Profile</h1>
              </div>
              <div className="p-6">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-black mb-3">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-bold text-black mb-3">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-black mb-3">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-bold text-black mb-3">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-black mb-6">Password Changes</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-base font-bold text-black mb-3">Current Password</label>
                        <input
                          type="password"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          placeholder="Enter current password"
                          className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-bold text-black mb-3">New Password</label>
                        <input
                          type="password"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                          className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-base font-bold text-black mb-3">Confirm New Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm new password"
                          className="w-full h-11 px-4 py-3 bg-white border border-gray-300 rounded text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-4 pt-8">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 text-black hover:text-gray-600 transition-colors font-bold bg-transparent"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-700 transition-colors font-bold"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}