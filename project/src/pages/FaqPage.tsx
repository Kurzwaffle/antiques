import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  category: string;
}

export const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: 'FAQ Question #1 about authentication',
      answer: (
        <p>
          This is a placeholder answer that would explain the authentication process for antiques.
        </p>
      ),
      category: 'authentication'
    },
    {
      question: 'FAQ Question #2 about regions',
      answer: (
        <p>
          This answer would explain which regions of Albania the antiques come from.
        </p>
      ),
      category: 'general'
    },
    {
      question: 'FAQ Question #3 about shipping',
      answer: (
        <p>
          This answer would provide information about international shipping policies and timeframes.
        </p>
      ),
      category: 'shipping'
    },
    {
      question: 'FAQ Question #4 about returns',
      answer: (
        <p>
          This text would explain the return policy for antique purchases.
        </p>
      ),
      category: 'policies'
    },
    {
      question: 'FAQ Question #5 about sourcing',
      answer: (
        <p>
          This answer would describe custom sourcing services for specific types of antiques.
        </p>
      ),
      category: 'services'
    },
    {
      question: 'FAQ Question #6 about pricing',
      answer: (
        <div>
          <p>
            This answer would explain how prices are determined:
          </p>
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>Factor that affects pricing #1</li>
            <li>Factor that affects pricing #2</li>
            <li>Factor that affects pricing #3</li>
            <li>Factor that affects pricing #4</li>
            <li>Factor that affects pricing #5</li>
          </ul>
          <p>
            This concluding statement would summarize the pricing approach.
          </p>
        </div>
      ),
      category: 'general'
    },
    {
      question: 'FAQ Question #7 about restoration',
      answer: (
        <p>
          This text would explain restoration services offered for antique pieces.
        </p>
      ),
      category: 'services'
    },
    {
      question: 'FAQ Question #8 about payment methods',
      answer: (
        <p>
          This answer would list the accepted payment methods and payment plan options.
        </p>
      ),
      category: 'payment'
    },
    {
      question: 'FAQ Question #9 about everyday use',
      answer: (
        <p>
          This answer would explain whether antiques can be used or are for display only.
        </p>
      ),
      category: 'general'
    },
    {
      question: 'FAQ Question #10 about appraisal',
      answer: (
        <p>
          This text would describe the appraisal services offered for Albanian antiques.
        </p>
      ),
      category: 'services'
    },
    {
      question: 'FAQ Question #11 about care',
      answer: (
        <div>
          <p>
            This answer would provide care instructions for different types of antiques:
          </p>
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>Care instruction for textiles</li>
            <li>Care instruction for wooden items</li>
            <li>Care instruction for metal objects</li>
            <li>Care instruction for ceramics</li>
          </ul>
          <p>
            This concluding statement would mention that detailed care instructions come with each purchase.
          </p>
        </div>
      ),
      category: 'care'
    },
    {
      question: 'FAQ Question #12 about visiting',
      answer: (
        <p>
          This answer would provide information about visiting the gallery in person.
        </p>
      ),
      category: 'general'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Information' },
    { id: 'authentication', name: 'Authentication' },
    { id: 'shipping', name: 'Shipping & Delivery' },
    { id: 'payment', name: 'Payment & Pricing' },
    { id: 'policies', name: 'Policies & Returns' },
    { id: 'services', name: 'Services' },
    { id: 'care', name: 'Care & Maintenance' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gray-900 mt-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="https://images.pexels.com/photos/4466461/pexels-photo-4466461.jpeg" 
            alt="Albanian antiques detail"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This section introduces the FAQ page and explains what visitors can find here.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex flex-wrap md:flex-nowrap gap-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-burgundy-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'border-burgundy-300 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-burgundy-700 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 mb-6">
              This call-to-action encourages visitors to contact the company if they need more information.
            </p>
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;