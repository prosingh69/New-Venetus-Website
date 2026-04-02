import React from 'react'
import TeamCard from './TeamCard'

const MeetTeam = () => {
    const TeamMemberData = [
        {
            id:1,
            Profile:"https://randomuser.me/api/portraits/men/32.jpg",
            Name:"Abhinay Singh",
            Profession:"Designer",
            Detail:"15+ years of experience in luxury interior design. Specializes in modern and contemporary designs."
        },
        {
            id:2,
            Profile:"https://randomuser.me/api/portraits/men/32.jpg",
            Name:"Abhinay Singh",
            Profession:"Project Manager",
            Detail:"15+ years of experience in luxury interior design. Specializes in modern and contemporary designs."
        },
        {
            id:3,
            Profile:"https://randomuser.me/api/portraits/men/32.jpg",
            Name:"Abhinay Singh",
            Profession:"Design Planar",
            Detail:"15+ years of experience in luxury interior design. Specializes in modern and contemporary designs."
        }
    ]
  return (
    <section className='flex flex-col justify-center items-center bg-white py-10 md:py-20'>
        <h2 className='text-4xl font-bold lg:mb-3 '>Meet Our Team</h2>
        <p className='text-[#6E4C40] text-lg lg:mb-4 text-center '>Expert designers with years of experience in Bangalore interior design</p>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            {TeamMemberData.map((data,index)=>{
                return <TeamCard key={index} data={data}/>
            })}
        </div>
    </section>
  )
}

export default MeetTeam