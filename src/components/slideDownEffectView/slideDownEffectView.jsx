import React from 'react';


class SlideDownEffectView extends React.Component{

















    render(){
        return(
       <div className='c_container_wrapper'>
          <div className='c_container'>
           <h4 id='h4_title' className='h4_title_closed' >{this.props.title}</h4>
           <div className='content_container'>
            <div data-number="5">
           {this.props.content}
            </div>
         </div> 
        </div>
        {this.props.children}
       </div>
         
        );
    }
}


function SlideDownElementView(props){
return(
    <div className='c_container'>
      <h4 id='h4_title' className='h4_title_closed' >{props.title}</h4>
       <div className='content_container'>
        <div data-number="5">
          {props.content}
        </div>
      </div> 
 </div>
);
}

//hard to find better names for css classes