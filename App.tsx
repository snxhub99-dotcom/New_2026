import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Chatbot } from './components/Chatbot';
import { ContactForm } from './components/ContactForm'; // Import the new ContactForm
import { APP_TITLE, COMPANY_NAME } from './constants';

const App: React.FC = () => {
  // Function to smoothly scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 md:py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Optional background pattern */}
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
              Your Premier Partner in Restaurant Recruitment
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">
              Resto Jobs delivers end-to-end staffing solutions for restaurants and cafés.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('contact')} className="bg-white text-blue-600 hover:bg-gray-100">
                Request a Free Consultation
              </Button>
              <Button size="lg" variant="primary" onClick={() => scrollToSection('services')}>
                Learn More About Our Services
              </Button>
            </div>
          </div>
          {/* Tailwind animation classes - defined via JIT or custom CSS */ }
          {/* Removed `jsx` prop as it's not standard HTML and causes a TypeScript error in a plain React app. */}
          <style>{`
            @keyframes fadeInDown {
              from { opacity: 0; transform: translateY(-20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in-down { animation: fadeInDown 1s ease-out forwards; }
            .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards 0.3s; }
            .animate-scale-in { animation: scaleIn 1s ease-out forwards 0.6s; }
            .bg-pattern {
              background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 60L60 0H0zM60 60L0 0h60z'/%3E%3C/g%3E%3C/svg%3E");
              background-size: 30px 30px;
            }
          `}</style>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Our Comprehensive Services</h2>
            <p className="text-lg text-center text-gray-700 mb-10 max-w-4xl mx-auto">
              We provide unparalleled end-to-end staffing solutions, ensuring your restaurant or café operates with the perfect team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Search, Screen & Shortlist"
                description="We manage the entire recruitment cycle, meticulously identifying, screening, and shortlisting candidates who perfectly match your unique needs. This saves you valuable time and effort, allowing you to focus on your core business."
                icon="🔍"
              />
              <ServiceCard
                title="Quality Talent Sourcing"
                description="Our rigorous process ensures we source only the most suitable and qualified candidates, tailored specifically to your requirements. We prioritize individuals who not only have the right skills but also fit your team's culture."
                icon="✨"
              />
              <ServiceCard
                title="Customized Needs Assessment"
                description="Upon agreement, we provide a detailed, customized requirement checklist. This ensures a deep understanding of your operational needs and desired candidate profiles, allowing us to serve you with unmatched precision."
                icon="📝"
              />
            </div>
          </div>
        </section>

        {/* Service Modules Section */}
        <section id="modules" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Flexible Service Modules</h2>
            <p className="text-lg text-center text-gray-700 mb-10 max-w-4xl mx-auto">
              Choose the module that best fits your business model and risk tolerance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <ModuleCard
                title="Module 1: Standard Replacement"
                charges="50% of the candidate's first month's salary."
                replacementPolicy="Free replacement if the candidate leaves within 45 days, provided payment is made on time."
                color="blue"
              />
              <ModuleCard
                title="Module 2: Extended Replacement"
                charges="100% of the candidate's first month's salary."
                replacementPolicy="Free replacement if the candidate leaves within 90 days, provided payment is made on time."
                color="green"
              />
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section id="next-steps" className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Your Path to a Stellar Team</h2>
            <p className="text-lg text-center text-gray-700 mb-10 max-w-4xl mx-auto">
              Getting started with Resto Jobs is simple and straightforward. Follow these steps:
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              <StepCard
                step="Step 1"
                title="Complete Our Requirement Checklist"
                description="Fill out our comprehensive Recruitment Requirement Checklist to help us understand your specific needs and preferences."
              />
              <StepCard
                step="Step 2"
                title="Sign the Agreement"
                description="Formalize our partnership by signing and stamping the agreement (to be executed on stamp paper)."
              />
              <StepCard
                step="Step 3"
                title="Share Documents"
                description="Easily share the completed documents with us via email or WhatsApp for quick processing."
              />
              <StepCard
                step="Step 4"
                title="Candidate Sourcing Commences"
                description="Once all formalities are complete, we will immediately begin sourcing top-tier candidates for your roles."
              />
            </div>
             <div className="text-center mt-12">
              <Button size="lg" onClick={() => alert('Download Checklist clicked!')}>
                Download Requirement Checklist
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action / Contact Section */}
        <section id="contact" className="bg-blue-600 text-white py-16 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Top Talent?</h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Let {APP_TITLE} connect you with the best professionals in the restaurant and café industry.
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Reach out to us directly or send us a message below:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.href = 'mailto:restojobs@hariganautomation.digital'}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Email Us
              </Button>
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/919980856523', '_blank')}
                className="bg-green-500 text-white hover:bg-green-600 focus:ring-green-400"
              >
                Chat on WhatsApp
              </Button>
            </div>


            {/* Embed the ContactForm */}
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

// Helper Components for App.tsx (defined outside to avoid re-rendering issues)

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition duration-300 ease-in-out border-t-4 border-blue-500">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
);

interface ModuleCardProps {
  title: string;
  charges: string;
  replacementPolicy: string;
  color: 'blue' | 'green';
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, charges, replacementPolicy, color }) => {
  const bgColor = color === 'blue' ? 'bg-blue-50' : 'bg-green-50';
  const borderColor = color === 'blue' ? 'border-blue-500' : 'border-green-500';
  const textColor = color === 'blue' ? 'text-blue-800' : 'text-green-800';

  return (
    <div className={`${bgColor} rounded-lg shadow-md p-6 border-l-8 ${borderColor}`}>
      <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h3>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Charges:</span> {charges}</p>
        <p><span className="font-semibold">Free Replacement:</span> {replacementPolicy}</p>
      </div>
    </div>
  );
};

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg mr-4">
      {step.split(' ')[1]}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default App;