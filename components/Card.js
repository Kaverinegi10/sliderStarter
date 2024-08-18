import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
//import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";


function Card(props) {

    let review=props.review;

    if (!review) {
        return <div>.</div>;
    }
  return (
    <div>

    <div>
    <img src={review.image}/>

    </div>

        <div>
        <p>{review.name}</p>
        </div> 

        <div>
        <p>{review.job}</p>
        </div>

        <div>
            <FaQuoteLeft/>
            </div>

            <div>
            <p>{review.text}</p>
            </div>
            
            <div>
          <FaQuoteRight/>
            </div>

       <div>
        <button>
prv
        </button>
        <button>
next
        </button>
       </div>

       <div>
        Suprise Me
       </div>


       

    </div>
  )
}

export default Card