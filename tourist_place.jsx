import { useState } from "react";

export default function TravelWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const packages = [
    { title: "Beach Tour", desc: "Enjoy sunny beaches", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { title: "Mountain Tour", desc: "Breathtaking mountains", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { title: "City Tour", desc: "Explore cities", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-gray-700 text-white sticky top-0">
        <h1 className="text-xl font-bold">Explore Everything</h1>

        <nav>
          <ul className={`md:flex gap-6 ${menuOpen ? "block" : "hidden"} md:block`}>
            {['Home','Packages','Services','Gallery','Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* Hero */}
      <section id="home" className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-gray-800" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <h2 className="text-5xl font-bold">Explore The World</h2>
        <p className="mt-2">Discover beautiful destinations</p>
        <button className="mt-4 px-6 py-2 bg-yellow-800 text-white rounded-lg hover:scale-105 transition">Book Now</button>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 text-center">
        <h2 className="text-3xl mb-8">Our Packages</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {packages.map((pkg) => (
            <div key={pkg.title} className="w-72 bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
              <img src={pkg.img} className="h-48 w-full object-cover" />
              <h3 className="text-xl mt-2">{pkg.title}</h3>
              <p className="p-4">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 text-center">
        <h2 className="text-3xl mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {['Hotel Booking','Flight Booking','Travel Guide'].map((s) => (
            <div key={s} className="bg-blue-600 text-white p-6 rounded-lg w-48 hover:scale-105 transition">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 text-center">
        <h2 className="text-3xl mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
          {[1,2,3,4].map((i) => (
            <img key={i} src={`https://source.unsplash.com/400x300/?travel,${i}`} className="rounded-xl hover:scale-105 transition" />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h2 className="text-3xl mb-6">Contact Us</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input className="p-3 border rounded" placeholder="Name" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" placeholder="Message" />
          <button className="bg-blue-600 text-white p-3 rounded">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        © 2026 Travel Website
      </footer>
    </div>
  );
}
