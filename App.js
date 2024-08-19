import React from "react";
import Cards from "./components/Cards"
import Card from "./components/Card"

import reviews from "./data";

const App = () => {
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center bg-gray-300 items-center">
  <div className="text-center bg-gray-300">
  <h1 className="text-4xl font-bold ">Our Testimonals</h1>
  <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
  <Cards reviews={reviews}/>
  </div>
  </div>
};

export default App;
  
  
  
  
