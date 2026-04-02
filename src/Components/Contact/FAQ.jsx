import React from 'react'

const FAQ = () => {
    const FAQData= [
        {
            id:1,
            Question:"How long does a typical project take?",
            Answer:"Kitchen or bedroom projects typically take 4-8 weeks. Full home designs may take 8-12 weeks depending on scope."
        },
        {
            id:2,
            Question:"Do you provide a warranty?",
            Answer:"Yes! We provide a comprehensive 10-year warranty on all work and materials."
        },
        {
            id:3,
            Question:"What is your consultation fee?",
            Answer:"Initial consultation is completely free. We discuss your vision, requirements, and provide a detailed quote"
        },
        {
            id:4,
            Question:"Do you work within a specific budget?",
            Answer:"Absolutely. We work with budgets ranging from modest to luxury. Transparent pricing ensures no hidden costs."
        },
        {
            id:5,
            Question:"Are you available for emergency repairs?",
            Answer:"Yes. Our warranty includes post-project support for any maintenance or adjustments needed."
        },
        {
            id:6,
            Question:"How do I get started?",
            Answer:"Contact us via phone, email, or WhatsApp. We'll schedule a free consultation at your convenience."
        }
    ]
  return (
    <section className='bg-white py-12'>
        <h2 className='text-3xl font-bold text-center mb-6'>Frequently Asked Questions</h2>
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {FAQData.map((Data)=>(
                    <div key={Data.id} className='rounded-2xl shadow-xl hover:shadow-2xl flex flex-col w-90 md:w-150 lg:w-120 p-4' >
                        <h2 className='font-medium mb-3'>{Data.Question}</h2>
                        <p className='text-[#6E4C40]'>{Data.Answer}</p>
                    </div>
                ))}

            </div>
        </div>
    </section>
  )
}

export default FAQ