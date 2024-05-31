
import React from 'react'
const dummyData = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '6 Mindfulness Craft Activities for Kids',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '6 Mindfulness Craft Activities for Kids',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
     
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '6 Mindfulness Craft Activities for Kids',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/6991094/pexels-photo-6991094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: '6 Mindfulness Craft Activities for Kids',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      
    },
    // Add more dummy data as needed
  ];




function Newsevents() {
  return (
    <>
         <div className='flex-col' style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/seamless-pattern-abstract-outline-silhouette-human-face-modern-avant-garde-poster-white-grey-background-trendy-144736736.jpg")',height:"400px",backgroundSize:"cover",display:"flex",justifyContent:"center",alignItems:'center'}}>
    <h1 
    className='text-4xl uppercase mb-2'><b>News and Events</b>
    </h1>
  
    <h1
    className='text-xl p-3 bg-yellow-500 rounded-full text-white'><b>Home - News and Events</b>
    </h1>
    </div>


    <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-1xl pb-5 text-green-400'>Team Member</h1>
    <h1 className=' text-center sm:text-left text-3xl pb-5 text-black'>Expert Teacher</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dummyData.map((data) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image */}
        <div className="relative h-56">
          <img
            // className="object-cover w-full h-full"
              className="w-full h-auto rounded-lg shadow-lg"
            src={data.imageUrl}
            alt={data.title}
          />
        </div>
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h1>
          {/* Description */}
          <p className="text-gray-700 mb-4">{data.description}</p>
          {/* Author */}
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={data.authorImageUrl}
              alt={data.author}
            />
            <p className="text-sm text-gray-600">{data.author}</p>
          </div>
        </div>
      </div>
      ))}
    </div>




    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Newsevents