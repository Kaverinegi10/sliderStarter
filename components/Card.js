import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

function Card(props) {

    let review=props.review;

    if (!review) {
        return <div>.</div>;
    }

        return (
    <div className='flex flex-wrap flex-col md:relative  '>
    <div className='absolute top-[-7rem] z-[10] mx-auto'>

    <img
     className="aspect-square rounded-full w-[140px] h-[140px] z-40 relative"
      src={review.image}/>

     <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] z-[20] left-[10px]'></div>

    </div>

        <div className='text-center mt-7'>
        <p className='font-bold  text-2xl captialize '>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div> 

       <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            <p>{review.text}</p>
        </div>
            
        <div className='text-violet-400 mx-auto mt-5'>
          <FaQuoteRight/>
            </div>
    </div>
  )
}

export default Card

       


       
