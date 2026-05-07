export default function Page() {
  return (
    <main className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-cyan-400">
            FixTech Repair
          </h1>

          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#gallery" className="hover:text-cyan-400 transition">Gallery</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
          alt="Repair Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Professional Electronic Device Repair
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Mobile • Laptop • TV • Printer • Smart Devices
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition">
              Book Repair
            </button>

            <button className="border border-cyan-400 px-8 py-4 rounded-2xl text-lg hover:bg-cyan-400 hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-cyan-400">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
                alt="Mobile Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">Mobile Repair</h4>
                <p className="text-gray-300 leading-7">
                  Screen replacement, battery issues, charging problems,
                  speaker repair and software troubleshooting.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1200&auto=format&fit=crop"
                alt="Laptop Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">Laptop Repair</h4>
                <p className="text-gray-300 leading-7">
                  Keyboard replacement, SSD upgrades, motherboard repair,
                  virus removal and performance optimization.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200&auto=format&fit=crop"
                alt="Electronics Repair"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">
                <h4 className="text-3xl font-bold mb-4">TV & Electronics</h4>
                <p className="text-gray-300 leading-7">
                  Smart TVs, printers, routers, gaming consoles and home
                  electronics repair services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 text-cyan-400">
            Repair Gallery
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Repair"
            />

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Repair"
            />

            <img
              src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition"
              alt="Repair"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold mb-8 text-cyan-400">
            Why Choose Us
          </h3>

          <p className="text-xl text-gray-300 leading-9">
            We provide high-quality electronic repair services with fast
            turnaround time, experienced technicians and affordable pricing.
            Our mission is to restore your devices quickly and professionally.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl font-bold mb-10 text-cyan-400">
            Contact Us
          </h3>

          <div className="space-y-4 text-xl text-gray-300 mb-10">
            <p>📍 Bangalore, Karnataka</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@fixtechrepair.com</p>
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
        © 2026 FixTech Repair Center. All Rights Reserved.
      </footer>
    </main>
  );
}
