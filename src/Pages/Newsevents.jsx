import React from 'react'
import NewsEventsCard from '../Components/NewsEventsCard'

function Newsevents() {
  return (
    <>
    <div>
    <div className='flex-col' style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/seamless-pattern-abstract-outline-silhouette-human-face-modern-avant-garde-poster-white-grey-background-trendy-144736736.jpg")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2'><b>News & Events</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-full text-white'><b>Home - News & Events</b>
    </h1>
    </div>

    <div className='p-24'>
      
      <NewsEventsCard/>
      
    </div>
    

    </div>
    </>
  )
}

export default Newsevents