import React from "react";
import "./gameInstructions.css";

const GameInstructions = props => (
    <div className="col-md=-12">
       <div className="gameInstructions">
        <h1>Game Instructions:</h1>
        <h2>Click on the images...but don't click on the same one twice!</h2>
        <h2>Or you will LOSE and become a Dr. Wiley experiment!</h2>
       </div> 
    </div>
);

export default GameInstructions;