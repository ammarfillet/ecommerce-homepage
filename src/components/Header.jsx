import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Search, ShoppingCart, User, LogOut, UserCog, PackageCheck, PackageX, Star } from "lucide-react";

export default function Header() {
  const { isAuthenticated, user, logout, getCartCount } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [dropdownOpen]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setFocusedIndex(-1);
    navigate("/");
  };

  const handleKeyDown = (event) => {
    if (!dropdownOpen) return;
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % menuItems.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        break;
      case "Enter":
        event.preventDefault();
        const item = menuItems[focusedIndex];
        if (item.action) {
          item.action();
        } else {
          navigate(item.path);
          setDropdownOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case "Escape":
        setDropdownOpen(false);
        setFocusedIndex(-1);
        break;
      default:
        break;
    }
  };

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: "Manage My Account", icon: UserCog, path: "/account" },
    { label: "My Order", icon: PackageCheck, path: "/orders" },
    { label: "My Cancellations", icon: PackageX, path: "/cancellations" },
    { label: "My Reviews", icon: Star, path: "/reviews" },
    { label: "Logout", icon: LogOut, action: handleLogout },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight">
            Qonnectiq
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link to="/" className={`hover:text-black ${isActive("/") ? "text-black font-medium" : ""}`}>
              Home
            </Link>
            <a href="#Category" className="hover:text-black">
              Category
            </a>
            <a href="#About" className="hover:text-black">
              About
            </a>
            {isAuthenticated ? (
              <Link to="/orders" className={`hover:text-black ${isActive("/orders") ? "text-black font-medium" : ""}`}>
                Order
              </Link>
            ) : (
              <Link to={location.pathname === "/signup" ? "/login" : "/signup"} className="hover:text-black">
                {location.pathname === "/signup" ? "Login" : "Sign up"}
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-full bg-gray-100 px-3 py-2 w-72">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button className="text-gray-500 hover:text-black">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {isAuthenticated && (
              <>
                <Link to="/cart" className="relative text-gray-700 hover:text-black">
                  <ShoppingCart className="w-6 h-6" />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="relative text-gray-700 hover:text-black"
                  >
                    <User className="w-6 h-6" />
                  </button>
                  {dropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-50"
                      role="menu"
                      onKeyDown={handleKeyDown}
                      tabIndex={-1}
                    >
                      {menuItems.map((item, index) => (
                        <div key={item.label}>
                          {item.action ? (
                            <button
                              onClick={item.action}
                              className={`flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                                index === focusedIndex ? "bg-gray-100" : ""
                              }`}
                              role="menuitem"
                            >
                              <item.icon className="w-4 h-4" />
                              {item.label}
                            </button>
                          ) : (
                            <Link
                              to={item.path}
                              onClick={() => {
                                setDropdownOpen(false);
                                setFocusedIndex(-1);
                              }}
                              className={`flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                                index === focusedIndex ? "bg-gray-100" : ""
                              }`}
                              role="menuitem"
                            >
                              <item.icon className="w-4 h-4" />
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
