import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [signupError, setSignupError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // For demo, just navigate to login or home
      navigate('/login');
    }
  };

  return (
    <main className="py-10">
      <div className="container-px">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Image */}
            <div className="bg-[#E3F0F3] rounded-sm p-8 flex items-center justify-center order-2 lg:order-1">
              <img
                src="public/images/spinach.png"
                alt="Fresh spinach"
                className="w-full h-auto object-contain max-w-md"
              />
            </div>

            {/* Right: Form */}
            <div className="order-1 lg:order-2">
              <div className="max-w-lg mx-auto px-8 py-10">
                <h1 className="text-4xl font-bold text-slate-900">Sign up to Qonnectiq</h1>
                <p className="text-base text-gray-500 mt-2 mb-6">Enter your details below</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full h-12 bg-transparent border-0 border-b border-slate-300 focus:border-red-500 focus:ring-0 focus:outline-none placeholder-gray-400"
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full h-12 bg-transparent border-0 border-b border-slate-300 focus:border-red-500 focus:ring-0 focus:outline-none placeholder-gray-400"
                      required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full h-12 bg-transparent border-0 border-b border-slate-300 focus:border-red-500 focus:ring-0 focus:outline-none placeholder-gray-400"
                      required
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  {/* Button and Link Row */}
                  <div className="flex justify-between items-center mt-6">
                    <button
                      type="submit"
                      className="min-w-44 h-11 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
                    >
                      Sign Up
                    </button>
                    <Link to="/login" className="text-red-500 font-medium hover:underline">
                      Already have account? Log in
                    </Link>
                  </div>
                </form>

                {signupError && <p className="text-red-500 text-center mt-4">{signupError}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}