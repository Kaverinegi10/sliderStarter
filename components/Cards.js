import React from 'react'
import Card from './Card';
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";
import {useState} from 'react';

function Cards(props) {
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);

  function leftHandler(){
    if(index-1 <0 ){
      setIndex=(reviews.length -1);
    }
    else{
      setIndex(index-1);
    }
   }
  function rightHandler(){
    if(index +1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
    
  }
  function supriseHandler(){
   let randomIndex=Math.floor(Math.random()* reviews.length);
    setIndex(randomIndex);
  }
    
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p10 transition-all duration-700 hover:shadow-2xl' >
     <Card review={reviews[index]}></Card>
     <div className='flex text-3xl mt-5 gap-3 text-violet-300 font-bold mx-auto justify-center items-center'>
        <button onClick={leftHandler} className='cursor-pointer hover:text-violet-500 '>
<FiChevronLeft/>
        </button>
        <button onClick={rightHandler} className='cursor-pointer hover:text-violet-500 ' >
<FiChevronRight/>
  </button>
       </div>

       <div >
        <button onClick={supriseHandler} className='bg-violet-400 mt-4 cursor-pointer  hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-lg mx-auto border-radius text-white mb-7'>Suprise Me</button>
       </div>
    </div>

  )
}

export default Cards