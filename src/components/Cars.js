import React from "react";

const Cars = (props)=>{
    console.log(props)
    return (
        <div className="cars">
            <p>Marque : {props.children}</p>
            <p>Couleur : {props.color}</p>
        </div>
    )
}

export default Cars;