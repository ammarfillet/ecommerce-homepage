import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan loading state
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart.items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Load from sessionStorage on mount
    const session = sessionStorage.getItem('auth.session');
    
    if (session) {
      try {
        const parsed = JSON.parse(session);
        setUser(parsed);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing session:', error);
        sessionStorage.removeItem('auth.session');
      }
    }
    
    setIsLoading(false); // Set loading selesai
  }, []);

  const login = (credentials) => {
    // For demo, hardcoded check
    if (credentials.email === 'user@admin.com' && credentials.password === 'admin1') {
      const session = {
        email: 'user@admin.com',
        name: 'Admin',
        role: 'admin',
        loggedInAt: new Date().toISOString()
      };
      sessionStorage.setItem('auth.session', JSON.stringify(session));
      setUser(session);
      setIsAuthenticated(true);
      return { success: true };
    }
    return { success: false, error: 'Email atau password salah' };
  };

  const logout = () => {
    sessionStorage.removeItem('auth.session');
    localStorage.removeItem('auth.session');
    setUser(null);
    setIsAuthenticated(false);
  };

  const getCurrentUser = () => {
    return user;
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        const updated = prev.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
        localStorage.setItem('cart.items', JSON.stringify(updated));
        return updated;
      } else {
        const updated = [...prev, item];
        localStorage.setItem('cart.items', JSON.stringify(updated));
        return updated;
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      const updated = prev.filter(i => i.id !== id);
      localStorage.setItem('cart.items', JSON.stringify(updated));
      return updated;
    });
  };

  const updateCartItem = (id, qty) => {
    setCart(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, qty } : i);
      localStorage.setItem('cart.items', JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart.items');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.qty, 0);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading, // Export loading state
    login,
    logout,
    getCurrentUser,
    cart,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};