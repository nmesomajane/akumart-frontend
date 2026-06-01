import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div>
          <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-gray-50 via-white to-green-50/30 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text — comes FIRST on mobile (flex-col-reverse) */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-[#16a34a] px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            Nigeria's #1 Waste B2B Marketplace
          </div>
 
          <h1
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The{" "}
            <span className="text-[#22c55e]">B2B Marketplace</span>
            {" "}for Waste and Recycled Materials
          </h1>
 
          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Connect with trusted buyers and sellers to trade recyclable and reusable waste materials across Nigeria.
          </p>
 
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              to="/seller/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-green-200 text-sm"
            >
              Browse Marketplace
             
              </Link>
            <Link
              to="/seller/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 hover:border-[#22c55e] text-gray-700 font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              Get Started
            </Link>
          </div>
 
         
        </div>
 
        {/* Image — comes SECOND on mobile */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-green-100 to-green-50 border-2 border-green-200/60" />
            <div className="absolute inset-4 rounded-full bg-linear-to-br from-green-50 to-white border border-green-100 flex items-center justify-center">
              <div className="text-center px-6">
                <div className="text-8xl md:text-9xl leading-none">♻️</div>
                <p className="text-[#1a472a] font-semibold text-sm mt-3" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Circular Economy
                </p>
                <p className="text-gray-400 text-xs mt-1">Waste → Resource</p>
              </div>
            </div>
            {/* Floating badges */}
          
          </div>
        </div>
      </div>
    </div>
  </section>
      <section>
        <div className="bg-[#1a472a] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Ready to Turn{" "}
              <span className="text-[#22c55e]">Waste</span>
              <br />
              Into Opportunity?
            </h2>
            <p className="text-green-200 mt-3 text-base">
              Create your free account and start trading smarter today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
              <Link
                to="/seller/register"
                className="px-6 py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold rounded-lg transition-colors duration-200 text-center text-sm"
              >
                Sign Up as Seller
              </Link>
              <Link
                to="/buyer/register"
                className="px-6 py-3 bg-transparent border-2 border-white/40 hover:border-white text-white font-semibold rounded-lg transition-colors duration-200 text-center text-sm"
              >
                Sign Up as Buyer
              </Link>
            </div>
          </div>
          {/* Tree Globe Illustration Placeholder */}
          <div className="hidden md:flex items-center justify-center w-52 h-52 rounded-full bg-white/5 border border-white/10 flex-shrink-0">
            <div className="text-center">
              <div className="text-6xl">🌍</div>
              <p className="text-green-300 text-xs mt-2">Circular Economy</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}


