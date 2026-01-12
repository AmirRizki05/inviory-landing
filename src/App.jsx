import React, { useState } from 'react';
import { Menu, X, Check, MessageCircle, ChevronDown } from 'lucide-react';

export default function InvioryLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // WhatsApp handler
  const openWhatsApp = (message = '') => {
    const phoneNumber = '6282228740260';
    const defaultMessage = message || 'Halo, saya tertarik dengan jasa undangan digital INVIORY!';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  // Copy to clipboard function
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type} berhasil disalin!`);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Brand Name */}
            <div className="flex items-center gap-3">
              {/* LOGO INVIORY */}
              <img 
                src="/favicon.ico" 
                alt="INVIORY Logo" 
                className="w-8 h-8 object-contain"
              />
              <div className="text-2xl font-bold text-yellow-500">INVIORY</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Beranda', 'Keunggulan', 'Template', 'Cara Pesan', 'Harga', 'Testimoni'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-white hover:text-yellow-500 transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              {['Beranda', 'Keunggulan', 'Template', 'Cara Pesan', 'Harga', 'Testimoni'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left text-white hover:text-yellow-500 transition py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-24 pb-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Undangan Digital<br />
                <span className="text-yellow-500">Elegan & Mudah</span><br />
                Dibagikan
              </h1>
              <p className="text-xl text-gray-300">
                Ciptakan undangan pernikahan, ulang tahun, atau event spesial Anda dengan desain modern dan interaktif. Hemat, cepat, dan ramah lingkungan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Pesan via WhatsApp
                </button>
                <button
                  onClick={() => scrollToSection('template')}
                  className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-4 px-8 rounded-full transition"
                >
                  Lihat Template
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/HeroImage.png" 
                alt="Preview Undangan Digital INVIORY"
                className="rounded-3xl h-[500px] w-full object-cover border-2 border-yellow-600/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-12 animate-bounce">
          <ChevronDown className="mx-auto text-yellow-500" size={32} />
        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Kenapa Pilih <span className="text-yellow-500">INVIORY</span>?
            </h2>
            <p className="text-gray-600 text-lg">Solusi undangan digital terbaik untuk acara spesial Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Proses Cepat', desc: 'Undangan jadi dalam 1-2 hari kerja' },
              { icon: '💰', title: 'Hemat Biaya', desc: 'Lebih murah dari undangan cetak' },
              { icon: '🎨', title: 'Custom Tema', desc: 'Design sesuai keinginan Anda' },
              { icon: '📱', title: 'Interaktif', desc: 'RSVP, lokasi, countdown, musik' },
              { icon: '🌍', title: 'Eco-Friendly', desc: 'Ramah lingkungan tanpa kertas' },
              { icon: '💬', title: 'Support 24/7', desc: 'Tim kami siap membantu kapan saja' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-yellow-500 transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Section */}
      <section id="template" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Contoh <span className="text-yellow-500">Template</span>
            </h2>
            <p className="text-gray-600 text-lg">Pilihan desain untuk berbagai acara</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Wedding Elegant', 
                category: 'Pernikahan', 
                desc: 'Desain klasik & romantis',
                image: '/Wedding.png'
              },
              { 
                title: 'Birthday Party', 
                category: 'Acara Pribadi', 
                desc: 'Fun & colorful theme',
                image: '/UlangTahun.jpeg'
              },
              { 
                title: 'Corporate Event', 
                category: 'Event Perusahaan', 
                desc: 'Professional & modern',
                image: '/CompanyEvent.png'
              }
            ].map((template, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                {/* IMAGE - Pakai foto kalau ada, placeholder kalau tidak */}
                {template.image ? (
                  <img 
                    src={template.image} 
                    alt={template.title} 
                    className="w-full h-80 object-cover border-b-4 border-yellow-500"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-800/10 h-80 flex items-center justify-center border-b-4 border-yellow-500">
                    <div className="text-center text-yellow-600">
                      <div className="text-6xl mb-4">🎴</div>
                      <p className="text-xl font-semibold">{template.title}</p>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {template.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mt-3 mb-2">{template.title}</h3>
                  <p className="text-gray-600 mb-4">{template.desc}</p>
                  <button
                    onClick={() => openWhatsApp(`Halo, saya tertarik dengan template ${template.title}`)}
                    className="w-full bg-black hover:bg-yellow-500 text-white hover:text-black font-bold py-3 rounded-full transition"
                  >
                    Pilih Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara Pemesanan Section */}
      <section id="cara-pesan" className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cara <span className="text-yellow-500">Pemesanan</span>
            </h2>
            <p className="text-gray-400 text-lg">3 langkah mudah untuk undangan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Pilih Template', desc: 'Pilih desain favorit atau request custom' },
              { num: '2', title: 'Kirim Data', desc: 'Kirimkan detail acara via WhatsApp' },
              { num: '3', title: 'Undangan Siap', desc: 'Dapatkan link undangan dalam 1-2 hari' }
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-yellow-500/30"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => openWhatsApp()}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-12 rounded-full inline-flex items-center gap-2 transition transform hover:scale-105"
            >
              <MessageCircle size={20} />
              Mulai Pesan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Harga Section */}
      <section id="harga" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Paket <span className="text-yellow-500">Harga</span>
            </h2>
            <p className="text-gray-600 text-lg">Pilih paket sesuai kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: 'Rp 55.000',
                features: ['1 Template Standar', '1x Revisi', 'Fitur RSVP', 'Musik Background', 'Support via Chat','Maps '],
                popular: false
              },
              {
                name: 'Standard',
                price: 'Rp 75.000',
                features: ['Custom Design', '3x Revisi', 'RSVP + Gallery', 'Countdown Timer', 'Google Maps', 'Support Prioritas'],
                popular: false
              },
              {
                name: 'Premium',
                price: 'Rp 90.000',
                features: ['Design Eksklusif', 'Unlimited Revisi', 'Semua Fitur Lengkap', 'Video Opening', 'Custom Domain', 'Dedicated Support'],
                popular: false
              }
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-8 shadow-lg relative ${
                  pkg.popular ? 'border-4 border-yellow-500 transform scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                      TERPOPULER
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-yellow-500 mb-1">{pkg.price}</div>
                  <p className="text-gray-500 text-sm">per undangan</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-gray-700">
                      <Check className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openWhatsApp(`Halo, saya tertarik dengan paket ${pkg.name}`)}
                  className={`w-full font-bold py-3 rounded-full transition ${
                    pkg.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-black'
                      : 'bg-black hover:bg-yellow-500 text-white hover:text-black'
                  }`}
                >
                  Pesan Paket Ini
                </button>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 border-2 border-yellow-500/20">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Add-ons Tersedia</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Custom Domain', price: '+Rp 100k' },
                { name: 'Desain Eksklusif', price: '+Rp 10k' },
                { name: 'Video Cinematic', price: '+Rp 200k' }
              ].map((addon, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 text-center shadow">
                  <h4 className="font-bold text-black mb-2">{addon.name}</h4>
                  <p className="text-yellow-600 font-bold text-lg">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimoni" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Kata <span className="text-yellow-500">Mereka</span>
            </h2>
            <p className="text-gray-600 text-lg">Testimoni dari pelanggan yang puas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah & Budi',
                role: 'Pernikahan',
                text: 'Undangannya cantik banget! Tamu-tamu kami semua bilang keren dan gampang banget diakses.',
                rating: 5
              },
              {
                name: 'PT. Maju Jaya',
                role: 'Corporate Event',
                text: 'Profesional dan responsif. Undangan untuk launching produk kami jadi sangat elegan.',
                rating: 5
              },
              {
                name: 'Rini Wijaya',
                role: 'Ulang Tahun',
                text: 'Harga terjangkau dengan hasil memuaskan. Proses cepat dan revisi gak ribet!',
                rating: 5
              }
            ].map((testi, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-yellow-500 transition">
                {/* PLACEHOLDER IMAGE - Ganti dengan foto testimoni atau screenshot */}
                <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 rounded-xl h-48 mb-6 flex items-center justify-center border border-yellow-500/20">
                  <div className="text-center text-yellow-600">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-sm">Screenshot Testimoni</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testi.text}"</p>
                <div>
                  <p className="font-bold text-black">{testi.name}</p>
                  <p className="text-sm text-gray-500">{testi.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Pertanyaan <span className="text-yellow-500">Umum</span>
            </h2>
            <p className="text-gray-600 text-lg">Yang sering ditanyakan</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Berapa lama proses pembuatan undangan?',
                a: '1-2 hari kerja setelah data lengkap diterima. Untuk paket Premium bisa lebih cepat.'
              },
              {
                q: 'Apakah bisa revisi desain?',
                a: 'Tentu! Basic 1x, Standard 3x, Premium unlimited revisi.'
              },
              {
                q: 'Bagaimana cara pembayaran?',
                a: 'Transfer bank atau e-wallet. DP 50% di awal, pelunasan setelah undangan jadi.'
              },
              {
                q: 'Apakah ada refund jika tidak puas?',
                a: 'Ada garansi revisi hingga puas. Refund berlaku jika kami gagal deliver sesuai kesepakatan.'
              },
              {
                q: 'Bisa request fitur tambahan?',
                a: 'Bisa! Konsultasikan kebutuhan Anda dengan tim kami via WhatsApp.'
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl shadow-md border-2 border-gray-100 hover:border-yellow-500 transition">
                <summary className="font-bold text-black p-6 cursor-pointer hover:text-yellow-500 transition">
                  {faq.q}
                </summary>
                <p className="px-6 pb-6 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Closing */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Buat Undangan <span className="text-yellow-500">Impian Anda?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Jangan tunggu lagi! Hubungi kami sekarang dan wujudkan undangan digital yang berkesan.
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-5 px-12 rounded-full text-xl inline-flex items-center gap-3 transition transform hover:scale-110 shadow-2xl"
          >
            <MessageCircle size={24} />
            Chat Admin Sekarang
          </button>
          <p className="text-gray-400 mt-6 text-sm">Respons cepat dalam 5 menit! ⚡</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-yellow-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">INVIORY</h3>
              <p className="text-gray-400 text-sm">
                Jasa undangan digital modern untuk acara spesial Anda.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-500">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Undangan Pernikahan</li>
                <li>Undangan Ulang Tahun</li>
                <li>Undangan Corporate</li>
                <li>Custom Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-500">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {/* WhatsApp dengan link */}
                <li className="flex items-center justify-between group">
                  <a 
                    href="https://wa.me/6282228740260" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition flex items-center gap-2 flex-1"
                  >
                    <span>📱</span>
                    <span>WhatsApp: 0822-2874-0260</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('082228740260', 'Nomor WhatsApp')}
                    className="opacity-0 group-hover:opacity-100 transition text-xs text-gray-500 hover:text-yellow-500 ml-2"
                    title="Salin nomor"
                  >
                    📋
                  </button>
                </li>
                
                {/* Email dengan link */}
                <li className="flex items-center justify-between group">
                  <a 
                    href="mailto:info@inviory.com?subject=Konsultasi%20Undangan%20Digital%20INVIORY" 
                    className="hover:text-yellow-500 transition flex items-center gap-2 flex-1"
                  >
                    <span>📧</span>
                    <span>Email: info@inviory.com</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('info@inviory.com', 'Email')}
                    className="opacity-0 group-hover:opacity-100 transition text-xs text-gray-500 hover:text-yellow-500 ml-2"
                    title="Salin email"
                  >
                    📋
                  </button>
                </li>
                
                {/* Lokasi dengan link maps */}
                <li>
                  <a 
                    href="https://maps.google.com/?q=Sidoarjo,East+Java,Indonesia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition flex items-center gap-2"
                  >
                    <span>📍</span>
                    <span>Sidoarjo, Indonesia</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-yellow-500">Ikuti Kami</h4>
              <div className="flex gap-4">
                {/* Facebook Logo */}
                <a 
                  href="https://www.facebook.com/INVIORY/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 transition"
                  aria-label="Facebook INVIORY"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Instagram Logo */}
                <a 
                  href="https://www.instagram.com/invioryofficial" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition"
                  aria-label="Instagram INVIORY"
                >
                  <img 
                    src="/IgLogo.svg" 
                    alt="Instagram" 
                    className="w-5 h-5"
                  />
                </a>
                
                {/* TikTok Logo */}
                <a 
                  href="https://www.tiktok.com/@inviory.official?_r=1&_t=ZS-91aQDnLVKHX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                  aria-label="TikTok INVIORY"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 INVIORY. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-500 transition">Kebijakan Privasi</a>
              <a href="#" className="hover:text-yellow-500 transition">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button - DI KANAN BAWAH TANPA LOGO WA */}
      <button
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition transform hover:scale-110 z-50 animate-pulse"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}