import React from "react";
import "./characterCard.css";

const CharacterCard = props => (
    
    <div className="card">
        <div className="img-container" dataid={props.id} onClick={() => props.randomRender(props.id)}>
            <img alt={props.name} src={props.image} />
        </div>
    </div>
        
);

export default CharacterCard;
