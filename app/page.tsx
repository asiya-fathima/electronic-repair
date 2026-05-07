export default function NammaElectronicsWebsite() {
  const services = [
    {
      title: "TV Repair",
      description:
        "Expert LED, LCD, Smart TV and home theatre repairs with doorstep service.",
      icon: "📺",
    },
    {
      title: "Refrigerator Service",
      description:
        "Fast cooling issue fixes, gas refilling, and compressor servicing.",
      icon: "❄️",
    },
    {
      title: "Washing Machine Repair",
      description:
        "Top load and front load washing machine repairs by trained technicians.",
      icon: "🧺",
    },
    {
      title: "AC Installation & Repair",
      description:
        "AC installation, maintenance, cooling repair and annual servicing.",
      icon: "🌬️",
    },
    {
      title: "Microwave & Oven Repair",
      description:
        "Quick microwave oven servicing and spare part replacement.",
      icon: "🍲",
    },
    {
      title: "Mixer & Small Appliances",
      description:
        "Repair services for mixers, grinders, fans, and other home appliances.",
      icon: "🔧",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-extrabold tracking-wide text-cyan-400">
            Namma Electronics
          </h1>

          <nav className="hidden md:flex gap-8 text-white/90 font-medium">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 overflow-hidden text-white"
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#22d3ee,_transparent_35%),radial-gradient(circle_at_bottom_left,#2563eb,_transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-14 items-center py-32">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm mb-6">
              Trusted Home Appliance Repair Experts
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Fast & Reliable{" "}
              <span className="text-cyan-400">Electronics</span> Repair Services
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Professional repair and maintenance for TVs, Refrigerators,
              Washing Machines, ACs, Microwaves, and all home appliances.
            </p>

            <div className="flex flex-wrap gap-5 mb-10">
              <a
                href="#contact"
                className="bg-cyan-400 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition duration-300"
              >
                Book Service
              </a>

              <a
                href="#services"
                className="border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-slate-900 transition duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap gap-8 text-slate-300">
              <div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p>Repairs Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p>Support Service</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-6 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
                alt="Electronics Repair"
                className="rounded-[30px] w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-10 left-10 right-10 bg-slate-900/70 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Same Day Service</h3>
                    <p className="text-slate-300 mt-1">
                      Affordable & Trusted Repairs
                    </p>
                  </div>

                  <div className="bg-cyan-400 text-slate-950 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                    ⚡
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide professional repair and maintenance services for all
              major electronic home appliances.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-slate-100"
              >
                <div className="text-5xl mb-5">{service.icon}</div>

                <h3 className="text-2xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop"
              alt="Technician"
              className="rounded-3xl shadow-xl object-cover h-[420px] w-full"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Namma Electronics?
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="text-2xl">✔️</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Certified Technicians
                  </h4>

                  <p className="text-slate-600">
                    Experienced experts for all brands and appliances.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">⚡</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Quick Doorstep Service
                  </h4>

                  <p className="text-slate-600">
                    Fast response and same-day service availability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🛠️</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Genuine Spare Parts
                  </h4>

                  <p className="text-slate-600">
                    High-quality replacement parts with warranty support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">💰</div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Affordable Pricing
                  </h4>

                  <p className="text-slate-600">
                    Transparent pricing with no hidden charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-r from-cyan-600 to-blue-800 py-24 px-6 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-5">
            Need Appliance Repair?
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Contact Namma Electronics today for fast and reliable home appliance
            repair services.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">📞 Call Us</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">📧 Email</h3>
              <p>support@nammaelectronics.com</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-semibold text-xl mb-2">📍 Location</h3>
              <p>Bangalore, Karnataka</p>
            </div>
          </div>

          <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
            Schedule Service Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-2xl font-bold text-white">
            Namma Electronics
          </h3>

          <p>© 2026 Namma Electronics. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}