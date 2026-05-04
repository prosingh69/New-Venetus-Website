import React from 'react'
import TeamCard from './TeamCard'

const MeetTeam = () => {
    const TeamMemberData = [
        {
            id: 1,
            Profile: "https://randomuser.me/api/portraits/men/32.jpg",
            Name: "Abhinay Singh",
            Profession: "Designer",
            Detail: "15+ years of experience in luxury interior design. Specializes in modern and contemporary designs."
        },
        {
            id: 2,
            Profile: "https://randomuser.me/api/portraits/men/45.jpg", // Thoda variety ke liye change kiya
            Name: "Rahul Sharma", 
            Profession: "Project Manager",
            Detail: "10+ years managing high-end residential projects. Ensures timely and seamless execution."
        },
        {
            id: 3,
            Profile: "https://randomuser.me/api/portraits/women/44.jpg", // Thoda variety ke liye change kiya
            Name: "Priya Patel", 
            Profession: "Design Planner",
            Detail: "Expert in spatial planning and functional layouts. Maximizes utility without compromising style."
        }
    ]
    
  return (
    <section className='flex flex-col justify-center items-center bg-white py-10 md:py-20 px-5 md:px-10'>
        
        
        <h2 className='text-3xl md:text-4xl font-bold mb-3 md:mb-4 lg:mb-3 text-center'>
            Meet Our Team
        </h2>
        
        <p className='text-[#6E4C40] text-base md:text-lg mb-8 md:mb-10 lg:mb-12 text-center max-w-2xl'>
            Expert designers with years of experience in Bangalore interior design
        </p>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 w-full max-w-6xl'>
            {TeamMemberData.map((data) => {
                return <TeamCard key={data.id} data={data}/>
            })}
        </div>
    </section>
  )
}

export default MeetTeam