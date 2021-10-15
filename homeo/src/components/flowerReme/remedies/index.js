import React, { Fragment } from "react";

const Remedies = (props) => {
  return (
    <div>
        <Fragment> 
      <h2>{props.sintoma} </h2>
      <p> {props.nameTratamento}</p>
      <ol >{props.lista}
        <li>{props.item}</li>
      </ol>
      </Fragment>
      
    </div>
  );
};

export default Remedies;
