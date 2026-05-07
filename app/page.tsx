export default function Page() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-orange-400">
            HomeCare Repairs
          </h1>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#services" className="hover:text-orange-400 transition">Services</a>
            <a href="#gallery" className="hover:text-orange-400 transition">Gallery</a>
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
          alt="Home Appliance Repair"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Professional Home Appliance Repair Services
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            AC • Refrigerator • Washing Machine • Microwave • TV Repair
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="bg-orange-400 text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
              Book Service
            </button>

            <button className="border border-orange-400 px-8 py-4 rounded-2xl text-lg hover:bg-orange-400 hover:text-black transition">
              Call Technician
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-orange-400">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1200&auto=format&fit=crop"
                alt="AC Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">AC Repair</h4>
                <p className="text-gray-300 leading-7">
                  Fast and professional air conditioner installation,
                  gas refilling and cooling issue repair services.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop"
                alt="Refrigerator Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">Refrigerator Repair</h4>
                <p className="text-gray-300 leading-7">
                  Compressor issues, cooling problems and complete fridge
                  maintenance by experienced technicians.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop"
                alt="Washing Machine Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">Washing Machine</h4>
                <p className="text-gray-300 leading-7">
                  Drum repair, water leakage fixes, motor replacement and
                  full washing machine servicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-orange-400">
            Service Gallery
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Technician"
            />

            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Appliance Repair"
            />

            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Home Service"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold mb-8 text-orange-400">
            Why Choose Us
          </h3>

          <p className="text-xl text-gray-300 leading-9">
            We provide trusted home appliance repair services with certified
            technicians, affordable pricing and quick doorstep support.
            Customer satisfaction and quality service are our priorities.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold mb-10 text-orange-400">
            Contact Us
          </h3>

          <div className="space-y-4 text-xl text-gray-300 mb-10">
            <p>📍 Bangalore, Karnataka</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@homecarerepairs.com</p>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="inline-block bg-green-500 text-black px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 text-center py-6 text-gray-400">
        © 2026 HomeCare Repairs. All Rights Reserved.
      </footer>
    </main>
  );
}
