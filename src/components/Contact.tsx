import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';
import { sendEmail } from '../utils/emailService';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await sendEmail(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#FFE169]">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-white mb-2">
                <User size={20} className="mr-2" />
                <span>Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#FFE169] focus:ring-1 focus:ring-[#FFE169] text-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="flex items-center text-white mb-2">
                <Mail size={20} className="mr-2" />
                <span>Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#FFE169] focus:ring-1 focus:ring-[#FFE169] text-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="flex items-center text-white mb-2">
                <MessageSquare size={20} className="mr-2" />
                <span>Message</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#FFE169] focus:ring-1 focus:ring-[#FFE169] text-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-[#FFE169] text-gray-900 rounded-lg font-semibold hover:bg-[#FFD93D] transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}