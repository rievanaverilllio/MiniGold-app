"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ContactUsSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', agree: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') return;
    setForm((s) => ({ ...s, [name]: value }));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
  <h1 className="text-5xl md:text-6xl font-light mb-12 text-gray-900">Let&#39;s Connect</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="relative w-full h-[520px] overflow-hidden rounded-sm">
              <Image src="/hero-bg.jpg" alt="contact" fill className="object-cover" />
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700">First Name*</label>
                  <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full border-t border-b py-3 text-black placeholder-gray-400" placeholder="Enter your first name" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Last Name*</label>
                  <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full border-t border-b py-3 text-black placeholder-gray-400" placeholder="Enter your last name" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Email*</label>
                  <input name="email" value={form.email} onChange={handleChange} className="w-full border-t border-b py-3 text-black placeholder-gray-400" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm text-gray-700">Phone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="w-full border-t border-b py-3 text-black placeholder-gray-400" placeholder="Enter your phone number" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700">Message*</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full border-t border-b mt-2 p-2 text-black placeholder-gray-400" placeholder="Enter your message here..." />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-gray-700 flex items-center gap-2 text-sm">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={() => setForm((s) => ({ ...s, agree: !s.agree }))} />
                  <span>I here by agree to the <a href="/terms-conditions" className="underline">Terms &amp; Conditions</a> of MiniGold</span>
                </label>

                <button className="text-gray-700 border px-6 py-3">SUBMIT NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
