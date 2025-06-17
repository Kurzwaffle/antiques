import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gray-900 mt-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="https://images.pexels.com/photos/4338028/pexels-photo-4338028.jpeg" 
            alt="Albanian mountains"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This banner introduces the About Us page, establishing the company's mission at a high level.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This paragraph explains the company's dedication to preserving and sharing Albania's cultural heritage through antiques.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              This section describes how the collection connects collectors with authentic pieces that represent Albania's diverse historical influences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This paragraph explains the authentication and research process, emphasizing the cultural significance of each piece.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5765908/pexels-photo-5765908.jpeg" 
                alt="Our workshop" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                Family Heritage & Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This paragraph explains the company's family history and how the business began generations ago.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                This section describes how the family tradition evolved into the current business model, explaining sourcing methods.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This text explains the expertise of the team in various specialized fields relevant to antique authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-burgundy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sourcing & Selection</h3>
              <p className="text-gray-700">
                This section explains how antiques are sourced directly from families and estates throughout Albania.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-burgundy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentication & Research</h3>
              <p className="text-gray-700">
                This text describes the research and authentication process for each antique piece.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-burgundy-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conservation & Presentation</h3>
              <p className="text-gray-700">
                This explains how items are conserved, preserved and prepared for sale while maintaining historical integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Team Member 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member Name</h3>
              <p className="text-gold-600 mb-3">Founder & Lead Curator</p>
              <p className="text-gray-700">
                This describes the team member's background and expertise in Albanian antiques.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                  alt="Team Member 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member Name</h3>
              <p className="text-gold-600 mb-3">Textile Specialist</p>
              <p className="text-gray-700">
                This describes the specialist's qualifications and area of expertise.
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" 
                  alt="Team Member 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Team Member Name</h3>
              <p className="text-gold-600 mb-3">Metalwork Expert</p>
              <p className="text-gray-700">
                This text explains the expert's training and specialization in metalwork authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-burgundy-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Have Questions About Our Collection?
          </h2>
          <p className="text-lg text-burgundy-100 mb-8 max-w-2xl mx-auto">
            This call-to-action section encourages visitors to get in touch for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;