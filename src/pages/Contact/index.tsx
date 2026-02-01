import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referral: '',
    phoneNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', referral: '', phoneNumber: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="py-8 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Side - Contact Form */}
            <div className="flex flex-col gap-4">

              <div>
                {/* Mobile smaller, desktop stays large */}
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
                  Get in <span className="text-[#E4010C]">Touch</span>
                </h1>

                <p className="text-xs sm:text-sm lg:text-md text-gray-600 mt-1">
                  We'd love to hear from you. Please fill out this form or shoot us an email.
                </p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  placeholder="Name"
                  required
                />

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  placeholder="Email"
                />

                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  placeholder="Phone number"
                  required
                />

                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  value={formData.referral}
                  onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                >
                  <option value="">How did you find us?</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Family</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 cursor-pointer transition font-semibold text-sm sm:text-base"
                >
                  Send
                </button>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="relative">
              <div className="w-full h-[300px] sm:h-[350px] lg:h-[450px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806.056045331756!2d13.13714647457358!3d11.80892422359616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049fe22891c377%3A0xa518a8eba292ea8b!2sMyIT%20Consult%20Ltd!5e1!3m2!1sen!2sng!4v1769878270150!5m2!1sen!2sng"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage