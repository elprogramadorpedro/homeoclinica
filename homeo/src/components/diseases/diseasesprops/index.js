import React, { Fragment } from 'react'

const DiseasesProps =(props)=>{

    return(
        <Fragment>
           <h1>{props.diseases} </h1>   
           <p>{props.descriptionDiseases} </p>   
        </Fragment>
    )
}

export default DiseasesProps