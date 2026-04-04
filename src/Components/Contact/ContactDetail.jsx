import React from 'react'

const ContactDetail = ({Icon,Title,Method,Detail,Para}) => {
    const Symbols = Icon;
    const generateLink = () => {
    if (Method === "tel") return `tel:${Detail}`;
    if (Method === "mailto") return `mailto:${Detail}`;
    if (Method === "map") return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(Detail)}`;
    return "#";
  };
  return (
    <a href={generateLink()} className='flex flex-col justify-center items-center text-center bg-white py-9 rounded-2xl shadow-xl hover:shadow-2xl'>
        <Symbols size={40} color="#B74B21" strokeWidth={2} />
        <h1 className='text-2xl mb-2 font-medium mt-4'>{Title}</h1>
        <span className='block mb-3 text-[#6E4C40] '>{Detail}</span>
        <span className='block text-[#6E4C40]'>{Para}</span>
    </a>
  )
}

export default ContactDetail