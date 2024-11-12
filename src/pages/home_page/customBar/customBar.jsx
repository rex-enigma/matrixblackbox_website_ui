import anchorImage from "assets/matrix blackbox-iot-tracker-for-laptops-tv-suitcase-car-splicer-imac-electronics.png";

import React from "react";
import './style.css';


//am adding scrolling ability on the second customBar
export default class CustomBar extends React.Component{
   constructor(props){
       super(props);
    this.secndCustomBar = React.createRef();

   }



componentDidMount(){
    window.addEventListener('scroll',(e)=>{
        //dom element is dereferenced in ref.current when the element is removed from the dom(so navigating from one page to another means  that we can no longer access the element we were referencing since it might not exit on other pages)[have spoted a behaviour in refs]
        if(this.secndCustomBar.current === null) return;
        this.secndBarHeightRelativeToWindow = this.secndCustomBar.current.getBoundingClientRect().top;
    });
}
 
secndBarHeightRelativeToWindow;

scrollDocument(){
 window.scrollBy({
     top: this.secndBarHeightRelativeToWindow-40,
     behavior: "smooth"
 });
}


   render(){
       return(
        <div className="customBar_wrapper">
            <Custom_Bar  id='custom_info1'>
                <h6>- THE -</h6>
                <h1>MATRIX BLACKBOX</h1>
                <h6>HAS A WIDER RANGE OF TRACKING APPLICATIONS</h6>
            </Custom_Bar>
            <Custom_Bar ref={this.secndCustomBar} id='custom_info2'>
                <h2>SELECT</h2>
                <h5>WHAT YOU WOULD LIKE TO</h5>
                <h1>TRACK / SECURE</h1>
                <div className="anchor_button_container">
                    <img id ="anchor_button" src={anchorImage} onClick={()=>{this.scrollDocument()}} alt="" />
                </div>
            </Custom_Bar>
      </div>
     
       );
   }
}



 const Custom_Bar = React.forwardRef((props,ref)=>(
    <div ref={ref} id={props.id} className = 'custom_container'>
     <div className='info'>
     {props.children}
     </div>
  </div>
 ));