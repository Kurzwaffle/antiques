import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gray-900 mt-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="https://images.pexels.com/photos/4466492/pexels-photo-4466492.jpeg" 
            alt="Albanian craftsmanship"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This section introduces the contact page and explains how the company can assist visitors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600 mb-4">
                    This message confirms successful form submission and explains next steps.
                  </p>
                  <Button variant="primary" onClick={() => setFormStatus('idle')}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                    >
                      <option value="">Please select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Authentication Request">Authentication Request</option>
                      <option value="Custom Sourcing">Custom Sourcing</option>
                      <option value="Shipping Question">Shipping Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/3 bg-gray-50 rounded-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin className="text-burgundy-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-700">This displays the physical address of the gallery</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail className="text-burgundy-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-700">This shows email contact information</p>
                    <p className="text-gray-700">This provides alternative email contacts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone className="text-burgundy-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-700">This displays phone contact information</p>
                    <p className="text-gray-700">This shows alternative phone/messaging contacts</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Business Hours</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
            Visit Our Gallery
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
            {/* In a real implementation, this would be a Google Maps or other map integration */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-gray-600 font-medium">This area would display an interactive map showing the gallery location</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;