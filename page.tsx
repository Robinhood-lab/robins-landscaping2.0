'use client';

import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">Robin’s Landscaping</h1>
        <p className="text-center text-lg md:text-xl">Natural landscape design, planting, tree care & water-wise solutions</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-lg max-w-3xl">
          Based in Brandon, Manitoba, Robin’s Landscaping offers thoughtful, regenerative landscaping services that bring beauty, biodiversity, and resilience to your outdoor space. From planting native trees to designing rain gardens, I help people reconnect with the land through practical, ecological design. Service area includes Saskatchewan and Manitoba.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-2xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Garden & Landscape Design</h3>
            <ul className="list-disc list-inside">
              <li>Native & pollinator-friendly planting plans</li>
              <li>Edible and low-maintenance landscapes</li>
              <li>Site-specific design with seasonal interest</li>
            </ul>
          </div>
          <div className="p-4 border rounded-2xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Tree Planting & Pruning</h3>
            <ul className="list-disc list-inside">
              <li>Young tree training & structural pruning</li>
              <li>Species selection & proper planting</li>
              <li>Shrub and small tree shaping</li>
            </ul>
          </div>
          <div className="p-4 border rounded-2xl shadow bg-white">
            <h3 className="text-xl font-bold mb-2">Rain Gardens & Water Features</h3>
            <ul className="list-disc list-inside">
              <li>Rain garden design & installation</li>
              <li>Small wildlife ponds & water features</li>
              <li>Soil building & water infiltration improvements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg mb-4">Reach out to book a consultation or ask about your project idea:</p>
        <form className="grid gap-4 max-w-xl">
          <input type="text" placeholder="Your name" required className="p-2 border rounded" />
          <input type="email" placeholder="Your email" required className="p-2 border rounded" />
          <textarea placeholder="Your message" rows={5} required className="p-2 border rounded" />
          <button type="submit" className="w-fit bg-emerald-800 text-white px-4 py-2 rounded">Send Message</button>
        </form>
        <div className="flex items-center space-x-4 text-lg mt-6">
          <Mail className="w-5 h-5" />
          <a href="mailto:robinshaneroberts.rr@gmail.com" className="underline">
            robinshaneroberts.rr@gmail.com
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-emerald-800 mt-12">
        &copy; {new Date().getFullYear()} Robin’s Landscaping. All rights reserved.
      </footer>
    </div>
  );
}