import React from "react";
import './ElementSelectionComponent.css'

function ElementSelectionComponent({ name, pic, callback }) {
  return (
    <div className="container" >
      <div className="card" >
        <div className="box" onClick={callback}>
          <div className="content">
            <h3>{name}</h3>
            <img src={pic}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElementSelectionComponent;
