import React from 'react'

const FAQ = () => {
  const FAQData = [
    {
      id: 1,
      Question: "How long does a typical project take?",
      Answer: "Kitchen or bedroom projects typically take 4-8 weeks. Full home designs may take 8-12 weeks depending on scope."
    },
    {
      id: 2,
      Question: "Do you provide a warranty?",
      Answer: "Yes! We provide a comprehensive 10-year warranty on all work and materials."
    },
    {
      id: 3,
      Question: "What is your consultation fee?",
      Answer: "Initial consultation is completely free. We discuss your vision, requirements, and provide a detailed quote."
    },
    {
      id: 4,
      Question: "Do you work within a specific budget?",
      Answer: "Absolutely. We work with budgets ranging from modest to luxury. Transparent pricing ensures no hidden costs."
    },
    {
      id: 5,
      Question: "Are you available for emergency repairs?",
      Answer: "Yes. Our warranty includes post-project support for any maintenance or adjustments needed."
    },
    {
      id: 6,
      Question: "How do I get started?",
      Answer: "Contact us via phone, email, or WhatsApp. We'll schedule a free consultation at your convenience."
    }
  ];

  return (
    <section className='bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
      <div className="max-w-6xl mx-auto">
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900 text-balance'>
          Frequently Asked Questions
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
          {FAQData.map((Data) => (
            <div
              key={Data.id}
              className='rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all p-5 sm:p-6 flex flex-col justify-start w-full'
            >
              <h3 className='font-bold text-base sm:text-lg mb-2 text-gray-900'>
                {Data.Question}
              </h3>
              <p className='text-[#6E4C40] text-sm sm:text-base leading-relaxed'>
                {Data.Answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
