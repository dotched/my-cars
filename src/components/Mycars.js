import React,{Component} from "react";
import Cars from "./Cars";

class Mycars extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p> Amet elit Lorem voluptate id quis consequat ut minim nostrud nulla.</p>
                <Cars color="red"> Mercedes</Cars> 
                <Cars color="blue"> Porche</Cars> 
                <Cars color="white"> Tesla</Cars> 
            </div>
            
        );

    }
}

export default Mycars;