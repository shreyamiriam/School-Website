import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from '../Components/Card';
import { CircularProgress } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import Card2 from '../Components/Card2';
import Rating from '../Components/Rating';
import { Autoplay } from 'swiper/modules';



function Home() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: .5,
      });

      const ratingData = [
        { rating: 5, review: 'Great service!', user: 'User 1', location: 'Germany', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 4, review: 'Very satisfied!', user: 'User 2', location: 'USA', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 3, review: 'Good experience.', user: 'User 3', location: 'UK', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 5, review: 'Excellent!', user: 'User 4', location: 'France', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 4, review: 'Very good!', user: 'User 5', location: 'Italy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 3, review: 'Satisfied.', user: 'User 6', location: 'Spain', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 5, review: 'Highly recommended!', user: 'User 7', location: 'Netherlands', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
        { rating: 4, review: 'Good job!', user: 'User 8', location: 'Belgium', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmHWOrhVKm7uFEO5hu3PkWEes7agIDe2gbA&s' },
      ];

  return (
  <div> 





<div className='w-full flex flex-wrap items-center justify-around' style={{backgroundColor:"white"}}>

    <div className='text-center p-3 mt-20 sm:w-[600px] sm:text-left sm:ps-24'>
        <p className='text-xl'><span className='text-green-500 font-semibold'>PLAY.</span><span className='text-blue-500'>LEARN</span><span className='text-green-500'>.GROW</span></p>
        <h2 style={{lineHeight:"1.4"}} className='text-4xl capitalize font-semibold'>global learning experience at <span className='text-blue-500'>kids & kindergarden school</span></h2>
        <p className='text-center mt-2  sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores culpa quae officiis, alias adipisci dolorum facere quos dicta eveniet, repudiandae consectetur? Dolor eos delectus debitis repudiandae optio nobis sequi</p>
       <div className='flex items-center justify-center gap-5 mt-7 sm:justify-start'>
            <div>
                <button className='p-2 w-28 bg-white rounded-3xl shadow-xl text-blue-500 font-semibold'>Enroll Now</button>
            </div>
            <div>
                <button className='p-2 w-28  bg-blue-500 shadow-xl text-white rounded-3xl font-semibold'>Careers</button >
            </div>
       </div>
    </div>
    <div className='mx-auto  sm:w-1/2'>
     <img src="https://cutesolution.com/html/rainbow2/assets/img/home-font.png" alt="" srcset="" />
    </div>

</div>
 
 
  <div className='flex flex-wrap w-full p-10 row'>
     <div className="md:w-1/2 p-5 col">
    <img 
        className="" 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>

      <div className='md:w-1/2 p-5 text-center col'>
        <h1 className='pt-10 pb-8 text-4xl  text-[#404040] font-semibold'>About Our KidsAcademy</h1>
        <p className='text-justify'>Hello Kids Maruthankuzhi is a renowned Montessori-based educational school, where children can experience the joy of learning. Our classrooms and equipment are designed to make children curious, independent, and love discovering new things. We have qualified teachers who create a supportive and interesting environment. They help children feel confident and think critically. We understand that every child develops at their own pace , so we allow them to learn at their own speed. Our education focuses on academics, social and emotional development, and practical life skills. We believe in keeping strong communication with parents and involving them in their child's education. Our campus is colourful, safe, and exciting for children to explore and learn. We provide age-appropriate materials, outdoor play areas, and activities that match each child's interests and needs. Come and see how Montessori education at Hello Kids Maruthankuzhi Montessori School can transform your child's future.</p>
      </div>
  </div>

 
  <div className='p-14'>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-1xl pb-5 text-green-400'>ON GOING CLASSES</h1>
    <h1 className=' text-center sm:text-left text-3xl pb-5 text-[#404040] font-semibold'style={{fontSize:'33px'}}>Popular Classes</h1>
    </div>
  <Card/>
</div>



  {/* <div className='flex flex-wrap w-full'>
    <div className=' lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>
    <div className='lg:w-1/4   p-5'>

        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>   

    <div className='lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>

    <div className=' lg:w-1/4   p-5'>
        <h1 className='text-center pb-9'>Active Learning</h1>
        <p className='text-center'>At Hello Kids Montessori, we believe in promoting active learning through entertaining and interactive activities, enabling children to actively learn , discover, and form meaningful connections with the world around them.</p>
    </div>

  </div> */}

  
{/* <div className=''>
    <h1 className='text-center tex'>Our Popular Classes</h1>
      <div className='flex flex-wrap w-full '>
        
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
        <div className=' lg:w-1/4   p-5'>
           <div style={{backgroundColor:"red"}}> <img className='p-5'  src="https://hellokidsmaruthankuzhi.com/images/Pre-NurseryPlay%20Group.png" alt=""  /></div>
           <div className='flex items-center justify-around'>
            <p className='text-sm p-3'>Years Old1.5</p>
            <p className='text-sm  p-3'>Affordable & <br /> Nominal Fees</p>
           </div>
           <div className='text-base text-center'>Pre-Nursery/Play Group</div>
            
        </div>
    
      </div>
    
</div> */}
{/* 
 <div>
    <h1 className='text-center text-5xl pt-5'>What Parents Say</h1>
     <Swiper
        // modules={[ Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        // pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5"> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
        <SwiperSlide className="p-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus officia corrupti quisquam modi amet a, explicabo voluptatem praesentium vero. Molestiae, consequuntur. Recusandae similique accusamus explicabo quae velit placeat quidem.</p>
            <h4 className='text-red-700 text-xl'>Jolly Smith</h4>
        </SwiperSlide>
    
     </Swiper>
 </div> */}


 


  <div 
      ref={ref} 
      className='w-full shadow-inner p-10 text-white font-medium text-center bg-blue-400 flex flex-wrap items-center justify-evenly h-[800px] md:h-[350px]'
    >
      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress duration={4} variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}} className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <MilitaryTechIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={20} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Years of <br />Excellence</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }}  className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <SchoolIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={50} duration={4}/></em>}
            </p>
            <p style={{fontSize:"12px"}}>Qualified <br /> Teachers </p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full  relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'}}  className='rounded-full shadow-2xl'/>
          <div className='absolute flex flex-col items-center'>
            <PersonIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={500} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Students <br /> Enrolled</p>
          </div>
        </div>
      </div>

      <div className='w-full sm:w-1/2 md:w-1/4 p-2'>
        <div className='mx-auto rounded-full relative flex items-center justify-center' style={{backgroundColor:"lightskyblue",height:"150px",width:"150px"}}>
          <CircularProgress variant="determinate" value={inView ? 100 : 0} size={170} thickness={3} style={{ position: 'absolute', color: 'lavender'  }} className='rounded-full shadow-2xl' />
          <div className='absolute flex flex-col items-center'>
            <EmojiEventsIcon style={{color:"white"}}/>
            <p className='text-5xl'>
              {inView && <em><CountUp end={15} duration={4} /></em>}
            </p>
            <p style={{fontSize:"12px"}}>Total <br /> Award</p>
          </div>
        </div>
      </div>
  </div>

<div className='mt-9'>
  <h1 className='text-center capitalize text-4xl text-[#404040] font-semibold '>parents are saying</h1>
  <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000 }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {ratingData.map((data, index) => (
        <SwiperSlide key={index}>
          <Rating
            rating={data.rating}
            review={data.review}
            user={data.user}
            location={data.location}
            image={data.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
</div>

  <div className='flex flex-wrap w-full p-10 row'>
    

      <div className='md:w-1/2 p-5 text-center col'>
        <h2 className='pt-10 pb-10 text-4xl  text-[#404040] font-semibold '>Why Choose Us</h2>
        <h1 className='justify-start text-2xl mb-4'>We Are Here to Help Parents Raise Happy and Healthy Children</h1>
        <p className='justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4"></h1>

      <div className='flex flex-wrap gap-6'>
      <div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6 mb-6'><p>Daily Creativity</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6 mb-6'><p>Outdoor Classroom</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6'><p>Qualified Teachers</p></div>
      </div>
      <div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6 mb-6'><p>Trusted Education</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6 mb-6'><p>Caring Community</p></div>
        <div className='w-50 h-15 font-semibold ms-9 sm:ms-0 rounded-lg shadow-inner border-l-green-500 border-l-4 bg-blue-100 p-6'><p>Language Immersion</p></div>
      </div>
      </div>
    </div>
      
      </div>

      <div className="md:w-1/2 p-5 col">
    <img 
        className="" 
        src="https://hellokidsmaruthankuzhi.com/images/about/about.png" 
        alt="About"
    />
     </div>
    


  </div>

  <div className='p-10'>
  <div className='flex flex-col justify-center items-center'>
    <h1 className=' text-center sm:text-left text-2xl pb-5 text-green-400 mt-1'>Team Member</h1>
    <h1 className=' text-center sm:text-left text-3xl pb-5 text-[#404040] font-semibold'>Expert Teacher</h1>
    </div>
  <Card2/>
  </div>




  </div>
  )
}

export default Home