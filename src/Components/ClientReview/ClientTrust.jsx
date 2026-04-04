import React from 'react'

const ClientTrust = ({Title,Para}) => {
  return (
    <div className='shadow-xl rounded-2xl px-5 py-5'>
        <h2 className='text-xl font-semibold mb-3'>{Title}</h2>
        <p className='text-[#725763]'>{Para}</p>

    </div>
  )
}

export default ClientTrust