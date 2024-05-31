import React from 'react';
import StarIcon from '@mui/icons-material/Star';

function Rating({ rating, review, user, location, image }) {
  return (
    <div className='w-[340px] h-[350px] rounded-2xl text-center p-6 mx-auto m-5'style={{backgroundColor:"wheat"}}>
        <div style={{ color: "goldenrod" }}>
            {Array.from({ length: rating }, (_, index) => (
                <StarIcon key={index} />
            ))}
        </div>
        <div>
            <p style={{ lineHeight: 1.5, marginTop: "10px", fontWeight: "lighter" }}>
                {review}
            </p>
        </div>
        <div className='mt-2'>
            <img className='rounded-full w-10 h-10 mx-auto' src={image} alt={user} />
            <p>{user}</p>
            <p>{location}</p>
        </div>
    </div>
  );
}

export default Rating;