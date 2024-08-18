import React from "react";
import Cards from "./components/Cards"
import Card from "./components/Card"
import Button from "./components/Button"
import reviews from "./data";

const App = () => {
  return <div>
  <div>
  <h>Our <u className="underline">Testimonal</u></h>
  </div>

  <div>
<Cards reviews={reviews}/>
  </div>
  <div>
    <Card></Card>
  </div>
  
  
  </div>;
};

export default App;
