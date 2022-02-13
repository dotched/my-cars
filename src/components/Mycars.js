import React,{Component} from "react";
import Cars from "./Cars";

class Mycars extends Component{
    render(){
        return (
            <div>
                <h1>Hello React</h1>
                <Cars color="red"> Mercedes</Cars> 
                <Cars color="blue"> Porche</Cars> 
                <Cars color="white"> Tesla</Cars> 
            </div>
            
        );

    }
}

export default Mycars;