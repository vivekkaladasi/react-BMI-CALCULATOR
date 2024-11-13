import "./App.css";
import { useState , useMemo } from "react";

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onHeightChange (event){
    setHeight(event.target.value)

  }
  function onWeightChange(event){
    setWeight(event.target.value)

  }
   const output = useMemo(()=>{
    const calculateHeight = height /100;
    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
   },[weight , height ])

  return (
    <main>
      <h1>BMI calculator</h1>
      <div className="input-section">
        <p className="slider-output">weight:{weight}kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />

        <p className="slider-output">Height: {height} cm</p>
        <input className="input-slider" type="range" step="1" min="10" max = "250"   onChange={onHeightChange}/>
      </div>

      <div className="output - section ">
        <p> your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
