"use client";

import { useState } from "react";

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const services = [
    "TV Repair",
    "Washing Machine Repair",
    "Refrigerator Repair",
    "Microwave Oven Repair",
    "Water Purifier Repair",
    "Air Conditioner Repair",
  ];

  const handleBooking = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const service = formData.get("service");
    const issue = formData.get("issue");

    const whatsappNumber = "919876543210";

    const message = `Hello, I would like to book a service.%0A%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📧 Email: ${email}%0A🛠 Service: ${service}%0A📝 Issue: ${issue}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );

    setShowForm(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen font-sans">
      {/* Booking Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-5 text-3xl font-bold"
            >
              ×
            </button>

            <h2 className="text-3xl font-black text-blue-700 mb-6">
              Book a Service
            </h2>

            <form
              onSubmit={handleBooking}
              className="grid md:grid-cols-2 gap-5"
            >
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="border p-4 rounded-xl"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="border p-4 rounded-xl"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="border p-4 rounded-xl"
              />

              <select
                name="service"
                required
                className="border p-4 rounded-xl"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <textarea
                name="issue"
                placeholder="Describe your issue"
                rows="5"
                required
                className="border p-4 rounded-xl md:col-span-2"
              />

              <button
                type="submit"
                className="bg-blue-700 text-white py-4 rounded-xl font-bold md:col-span-2"
              >
                Book on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-blue-700">NAMMA</h1>
            <p className="text-xs text-gray-500">
              ELECTRONICS SERVICE BASE
            </p>
          </div>

          <nav className="hidden md:flex gap-8 font-semibold text-sm">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("about")}>About Us</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Book a Service
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="bg-[#031b3d] text-white py-20 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight mb-6">
              Reliable Repairs.
              <br />
              Trusted Service.
            </h2>

            <p className="text-lg text-gray-300 leading-8 mb-8">
              Fast and trusted home appliance repair services at your doorstep.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 px-7 py-4 rounded-xl font-bold"
              >
                Book a Service
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white px-7 py-4 rounded-xl font-bold"
              >
                Contact Us
              </button>
            </div>
          </div>

          <img
            src="/technician.png"
            alt="Technician"
            className="rounded-3xl w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black">Our Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-3xl p-8 shadow-md"
            >
              <div className="text-5xl mb-5">🔧</div>
              <h3 className="text-2xl font-bold mb-3">{service}</h3>
              <p className="text-gray-600 mb-5">
                Professional and affordable repair service.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="text-blue-700 font-bold"
              >
                Book Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">About Us</h2>

          <p className="text-gray-600 text-lg leading-8">
            We provide reliable appliance repair services with experienced
            technicians and genuine spare parts.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#031b3d] text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Contact Us</h2>

          <div className="space-y-4 text-lg">
            <p>📞 +91 98765 43210</p>
            <p>📍 Bangalore, Karnataka</p>
            <p>✉ support@nammaelectronics.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
