import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8380D] rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🍴</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none text-gray-900">Sarab</p>
                <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Fast Food &amp; Restaurant
                </p>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              {["Home", "About", "Menu", "Chefs", "Reservation", "Reviews", "Contact"].map(
                (item, i) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`hover:text-[#E8380D] transition-colors relative pb-1 ${
                        i === 0
                          ? "text-[#E8380D] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E8380D] after:rounded-full"
                          : ""
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-gray-600 hover:text-[#E8380D] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <a
                href="#"
                className="hidden md:flex items-center gap-2 bg-[#E8380D] hover:bg-[#c42e09] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                🛒 Order Now
              </a>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-[#FDF5EE] pt-16">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md text-sm font-medium text-gray-700">
              <span className="w-6 h-6 bg-[#E8380D] rounded-full flex items-center justify-center text-white text-xs">
                ★
              </span>
              #1 Rated Fast Food Restaurant in New York
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Delicious
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#E8380D] leading-tight">
                Fast Food
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                for Every
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                Moment
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              Experience bold flavors crafted from premium ingredients. From crispy burgers to
              gourmet pizzas – every bite is an adventure worth savoring.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#"
                className="flex items-center gap-2 bg-[#E8380D] hover:bg-[#c42e09] text-white font-bold px-8 py-4 rounded-full transition-colors text-sm"
              >
                🍽️ Explore Menu
              </a>
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#E8380D] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-700 group-hover:text-[#E8380D] transition-colors"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-800 text-sm">Watch Our Story</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-200">
              {[
                { value: "850+", label: "HAPPY CUSTOMERS" },
                { value: "120+", label: "MENU ITEMS" },
                { value: "15+", label: "EXPERT CHEFS" },
                { value: "12yr", label: "EXPERIENCE" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-[11px] text-gray-400 tracking-wider font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Large background "00" text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-[220px] font-black text-gray-100 leading-none">00</span>
            </div>

            {/* Circular Image */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-800 shadow-2xl z-10">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
                alt="Delicious Burger"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card - Hot Deal */}
            <div className="absolute top-4 left-0 lg:-left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20 animate-bounce-slow">
              <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center">
                🔥
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Hot Deal</p>
                <p className="text-xs text-gray-400">30% off today</p>
              </div>
            </div>

            {/* Floating Card - Delivery */}
            <div className="absolute right-0 lg:-right-4 top-1/2 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
              <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center">
                🕐
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">20 min</p>
                <p className="text-xs text-gray-400">Fast delivery</p>
              </div>
            </div>

            {/* Floating Card - Rating */}
            <div className="absolute bottom-8 right-0 lg:-right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
              <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center">
                ⭐
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-400">2k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* MARQUEE TICKER */}
      <div className="bg-[#E8380D] py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, gi) => (
            <div key={gi} className="flex items-center">
              {[
                "Ice Cream Shakes",
                "Grilled Sandwiches",
                "Crispy Fried Chicken",
                "Gourmet Burgers",
                "Artisan Pizzas",
                "Fresh Wraps & Rolls",
                "Loaded Fries",
              ].map((item) => (
                <span
                  key={item + gi}
                  className="flex items-center gap-2 text-white text-sm font-medium mx-6"
                >
                  <span className="w-2 h-2 rounded-full bg-white opacity-70 inline-block"></span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BROWSE BY CATEGORY */}
      <section className="bg-[#FDF5EE] py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#E8380D] font-semibold text-lg italic mb-2" style={{fontFamily: 'Georgia, serif'}}>What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
            Browse by <span className="text-[#E8380D]">Category</span>
          </h2>
          <div className="w-16 h-1 bg-[#E8380D] mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
            From sizzling burgers to exotic world cuisines - find your favourite in our menu
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: "All Items", count: "99 Items", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80", active: true },
            { name: "Burgers", count: "24 Items", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&q=80", active: false },
            { name: "Pizza", count: "18 Items", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80", active: false },
            { name: "Fried Chicken", count: "15 Items", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=200&q=80", active: false },
            { name: "Wraps", count: "12 Items", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=200&q=80", active: false },
            { name: "Desserts", count: "20 Items", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80", active: false },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`bg-white rounded-2xl p-4 flex flex-col items-center gap-3 cursor-pointer transition-all hover:shadow-lg ${
                cat.active ? "border-2 border-[#E8380D] shadow-md" : "border border-gray-100"
              }`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-sm">{cat.name}</p>
                <p className="text-xs text-gray-400">{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}