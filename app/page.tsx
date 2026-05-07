export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-5 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FixTech Repair Center</h1>

          <nav className="space-x-5">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h2 className="text-5xl font-bold mb-5">
          Electronic Device Repair
        </h2>

        <p className="text-xl mb-8">
          Mobile, Laptop, TV & Electronics Repair Services
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
          Book Repair
        </button>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-6xl mx-auto py-20 px-5"
      >
        <h3 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              Mobile Repair
            </h4>

            <p>
              Screen replacement, battery issues,
              charging problems and software fixes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              Laptop Repair
            </h4>

            <p>
              Hardware upgrades, keyboard replacement,
              motherboard repair and virus removal.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h4 className="text-2xl font-bold mb-4">
              TV & Electronics
            </h4>

            <p>
              Smart TV, printer, router and home
              electronic repair solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white py-20 px-5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            About Us
          </h3>

          <p className="text-lg leading-8">
            FixTech Repair Center provides trusted
            repair services with expert technicians,
            affordable pricing and fast delivery.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-blue-900 text-white py-20 px-5"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Contact Us
          </h3>

          <p className="mb-3">
            📍 Bangalore, Karnataka
          </p>

          <p className="mb-3">
            📞 +91 98765 43210
          </p>

          <p className="mb-8">
            📧 support@fixtechrepair.com
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
            Contact Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-5">
        © 2026 FixTech Repair Center
      </footer>
    </main>
  );
}