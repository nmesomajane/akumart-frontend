import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const [, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    return () => {
      setIsMenuOpen(false);
    };
  }, [location]);

 

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-[#1a472a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base leading-none">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#1a472a] font-bold text-xl tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Aku<span className="text-[#22c55e]">Mart</span>
              </span>
              <span className="text-gray-400 text-[9px] tracking-wide">Waste Today. Resource Tomorrow.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
         

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/signin"
              className="text-sm font-semibold text-gray-700 hover:text-[#1a472a] transition-colors px-4 py-2"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold text-white bg-[#22c55e] hover:bg-[#16a34a] px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>

       
        </div>
      </div>

   
    </header>
  );
};

export default Header;