import profileImage from 'assets/matrix blackbox-iot-tracker-system_customer_care.png';
import yellowTrngleCloseChat from 'assets/close_chat.png';
import yellowTrngleOpenChat from 'assets/open_chat.png'
import whiteTrngle from 'assets/matrix blackbox-iot-tracker-system_customer_care_chat.png';
import whtsapImg from 'assets/matrix-blackbox-iot-tracking-solutions-logo-whatsapp_2020.png';
import telegramImg from 'assets/matrix-blackbox-iot-tracking-solution-telegram-hover_2020.png';

import backgroundChatImg from 'assets/172356_whatsapp-wallpaper-u12990-fr.png';
import React from 'react';
import './style.css';


export default class ChatView extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           accordion:'closed',
           toggleTitleBarIcon: yellowTrngleOpenChat,
           toggleTitleBarCssColor:'comp_closedChat',
           accordionBodyHeight:'0px'
       };
   }

   chatBodyWrapperHeight;

   componentDidMount(){
    this.chatBodyWrapperHeight = this.getChatBodyWrapperHeight();
   } 
   
   getChatBodyWrapperHeight(){
    let chatBodyWrapper = document.querySelector('.comp_chatBody_wrapper');
    return chatBodyWrapper.offsetHeight + 'px';

   }

   handleClick(e){
    let target = e.target;
    
    //make sure the target is always the bar with yellow logo and txt
    if(target.classList[1] !== 'comp_chatTitle_img'){
        target = target.parentElement;
    }

    this.setState((previousState)=>{
        if(previousState.accordion === 'closed'){
            return {
                accordion:'opened',
                toggleTitleBarIcon: yellowTrngleCloseChat,
                toggleTitleBarCssColor:'comp_openedChat',
                accordionBodyHeight:this.chatBodyWrapperHeight,
            }
        }else{
            return {
                accordion:'closed',
                toggleTitleBarIcon: yellowTrngleOpenChat,
                toggleTitleBarCssColor:'comp_closedChat',
                accordionBodyHeight:'0px'
            }
        }
    })

    
   }


 
    render(){
        return(
            <div className = 'comp_chatContainer'>
             <div  className = {`${this.state.toggleTitleBarCssColor} comp_chatTitle_img`} onClick ={(e)=>{this.handleClick(e)}}>
                 <img  src={this.state.toggleTitleBarIcon} alt="" />
                 <h5>Chat with us</h5>
             </div>
             <div style = {{height: this.state.accordionBodyHeight}} className = 'comp_chatBody'>
                 <div className ='comp_chatBody_wrapper'>
                    <div className='comp_chatProfile'>
                        <img src={profileImage} alt="" />
                        <div>
                            <h6>Kevin M.</h6>
                            <p>Typically replies as soon as possible</p>
                        </div>
                   </div>
                   <div className='comp_chatArea'>
                        <div className='comp_chatTextContainer'>
                            <img src={whiteTrngle} alt="" />
                            <div className='comp_chatText'>
                                <p>
                                Hi there,<br />Kevin here from Matrix BlackBox team,how can i help you today?
                                </p>
                            </div>
                        </div>
                    </div>
                   <div className='comp_socialMediaContainer'>
                     <SocialMediaLinkView imgSrc ={whtsapImg} css_socialMediaType = 'whatsap'>
                       Start WhatsApp Chat
                     </SocialMediaLinkView>
                     <SocialMediaLinkView imgSrc = {telegramImg} css_socialMediaType = 'telegram'>
                       Start Telegram Chat
                     </SocialMediaLinkView>
                    </div>
                 </div>
             </div>
            </div>
        );
    }
}

function SocialMediaLinkView(props){
 return(
     <a className = {`comp_sm_linkContainer comp_sm_${props.css_socialMediaType}`} href = ''>
      <img className='comp_smImg' src= {props.imgSrc} alt="" />
      <div className='comp_sm_link'>
         {props.children} 
      </div>
     </a>
 );   
}


