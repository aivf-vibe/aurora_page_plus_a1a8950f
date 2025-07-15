export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-cream/80 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-primary">Serenity Tea House</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-primary hover:text-secondary transition-colors">About</a>
              <a href="#teas" className="text-primary hover:text-secondary transition-colors">Our Teas</a>
              <a href="#experience" className="text-primary hover:text-secondary transition-colors">Experience</a>
              <a href="#contact" className="text-primary hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Discover the Art of Fine Tea
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Immerse yourself in the world of premium teas, carefully curated for the most discerning tea enthusiasts.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors">
                Explore Our Collection
              </button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
                <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 50C150 50 110 90 110 140C110 190 150 230 200 230C250 230 290 190 290 140C290 90 250 50 200 50Z" fill="#2A5A3B"/>
                  <path d="M200 80C170 80 145 105 145 135C145 165 170 190 200 190C230 190 255 165 255 135C255 105 230 80 200 80Z" fill="#8B593E"/>
                  <path d="M180 120C180 110 190 100 200 100C210 100 220 110 220 120C220 130 210 140 200 140C190 140 180 130 180 120Z" fill="#E6B17E"/>
                  <path d="M150 200L250 200C250 200 240 220 200 220C160 220 150 200 150 200Z" fill="#2A5A3B"/>
                  <path d="M180 230L220 230C220 230 215 240 200 240C185 240 180 230 180 230Z" fill="#8B593E"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teas Section */}
      <section className="py-16 bg-white/50" id="teas">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-playfair font-bold text-primary text-center mb-12">
            Our Signature Collection
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Imperial Oolong",
                description: "A delicate blend with floral notes and a smooth finish",
                price: "$18.99"
              },
              {
                name: "Jasmine Pearl Green",
                description: "Hand-rolled tea leaves scented with fresh jasmine",
                price: "$22.99"
              },
              {
                name: "Golden Tips Black",
                description: "Rich, malty flavor with honey undertones",
                price: "$24.99"
              },
            ].map((tea) => (
              <div key={tea.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 mb-4 bg-primary/5 rounded-lg p-4">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" className="fill-primary/20"/>
                    <path d="M60 80C60 60 80 40 100 40C120 40 140 60 140 80C140 100 120 120 100 120C80 120 60 100 60 80Z" className="fill-primary"/>
                    <path d="M80 140L120 140C120 140 115 160 100 160C85 160 80 140 80 140Z" className="fill-secondary"/>
                  </svg>
                </div>
                <h4 className="text-xl font-playfair font-bold text-primary mb-2">{tea.name}</h4>
                <p className="text-gray-600 mb-4">{tea.description}</p>
                <p className="text-secondary font-semibold">{tea.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16" id="experience">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-3xl font-playfair font-bold text-primary mb-6">
                A Journey Through Tradition
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the centuries-old art of tea preparation in our serene tea house. 
                Each visit is a journey through time, connecting you with ancient traditions 
                and modern refinement.
              </p>
              <ul className="space-y-4">
                {[
                  "Traditional Tea Ceremonies",
                  "Expert Tea Sommeliers",
                  "Seasonal Tea Tastings",
                  "Private Tea Events",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-primary/10 rounded-lg p-4 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 100C40 60 70 30 110 30C150 30 180 60 180 100" className="stroke-primary stroke-[8]" strokeLinecap="round"/>
                    <path d="M60 120C60 90 80 70 110 70C140 70 160 90 160 120" className="stroke-secondary stroke-[6]" strokeLinecap="round"/>
                    <circle cx="110" cy="140" r="20" className="fill-accent"/>
                  </svg>
                </div>
                <div className="aspect-square bg-secondary/10 rounded-lg p-4 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 80L140 80C160 80 180 100 180 120C180 140 160 160 140 160L60 160C40 160 20 140 20 120C20 100 40 80 60 80Z" className="fill-secondary"/>
                    <path d="M70 60L130 60L140 80L60 80L70 60Z" className="fill-primary"/>
                    <circle cx="100" cy="120" r="20" className="fill-accent"/>
                  </svg>
                </div>
                <div className="aspect-square bg-accent/10 rounded-lg p-4 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 40C60 40 40 70 40 100C40 130 60 160 100 160C140 160 160 130 160 100C160 70 140 40 100 40Z" className="fill-accent"/>
                    <path d="M100 60C80 60 70 80 70 100C70 120 80 140 100 140C120 140 130 120 130 100C130 80 120 60 100 60Z" className="fill-primary"/>
                    <circle cx="100" cy="100" r="15" className="fill-secondary"/>
                  </svg>
                </div>
                <div className="aspect-square bg-primary/10 rounded-lg p-4 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="60" width="120" height="80" rx="10" className="fill-primary"/>
                    <rect x="60" y="80" width="80" height="40" rx="5" className="fill-accent"/>
                    <circle cx="140" cy="100" r="10" className="fill-secondary"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-white" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-playfair font-bold mb-6">Visit Us Today</h3>
          <p className="mb-8">
            123 Tea Garden Lane, Serenity Valley<br />
            Open Daily: 9:00 AM - 8:00 PM
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-cream transition-colors">
            Make a Reservation
          </button>
        </div>
      </section>
    </div>
  );
}
