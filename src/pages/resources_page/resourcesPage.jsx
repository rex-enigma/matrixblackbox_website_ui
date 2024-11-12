import iotMbImage from 'assets/iot-tarcking-chip-matrix-blackbox-worlds_first_gps_-_gprs_laptop_tracker-car-tracker-motorbike-tracker-tv-tracker-luggage-tracker_hardware_for-student-parents-campus_internet_of_things_1.png';
import mbFlyerImage from 'assets/branding-tracker-for-laptops-gps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey project-u159339-fr.jpg';
import mbZipImage from 'assets/matrix_blackbox_media_tracker_for_assets.png';
import mbFBimage from 'assets/matrix_blackbox_share_fb_internet_of_things.png';
import mbTwitterImage from 'assets/matrix_blackbox_share_twiiter_internet_of_things.png';
import mbGplusImage from 'assets/matrix_blackbox_share_gplus_internet_of_things.png';
import mbYoutubeImage from 'assets/matrix_blackbox_share_you_tube_internet_of_things.png';
import mbDevicesImage from 'assets/matrix_blackbox_tracker_for _everthing-u158476-fr.jpg';

import React from 'react'
import './style.css';
import 'components/slideDownEffectView/style.css';

 export default function resourcesPage(){
    return(
        <div className='resourcesPage'>
            <div className='r_main_section'>
              <img src={mbDevicesImage} width='600px' height='190px' alt="one hardware to track them all" />
              <div className='r_title'>
                  <h5>
                    FREQUENTLY ASKED QUESTIONS ABOUT THE MATRIX BLACKBOX 
                  </h5>
              </div>
              <div>
                 <SlideDownEffectView/>
              </div>
              <img src={mbFlyerImage}  width='600px' height='190px' alt="flyer" />
              <div className='r_title'>
                  <h5>
                     BRANDING / MEDIA MATERIALS  
                  </h5>
              </div>
              <div className='r_brandingMedia_materials'>
                  <ZipView Href='' imageSrc={mbZipImage} title=' Laptop Tracking Brouchure 2018 pdf sample'/>
                  <ZipView Href='' imageSrc={mbZipImage} title='Matrix Blackbox 3D Box PSD'/>
                  <ZipView Href='' imageSrc={mbZipImage} title='Laptop Tracking Poster 2018 pdfs sample'/>
                  <ZipView Href='' imageSrc={mbZipImage} title='Matrix Blackbox Logo 2018 design'/>
                  <ZipView Href='' imageSrc={mbZipImage} title='Matrix Blackbox 2018 Business cards'/>
                  <ZipView Href='' imageSrc={mbZipImage} title='Matrix Blackbox T-shirt 2017'/>
              </div>
              <div className='r_iotmbImageContainer'> 
              <img src={iotMbImage}  width='600px' height='190px' alt="" />
              </div>
              <div className='r_title_manuals'>
                  <h5>MANUALS</h5>
              </div>
              <div className='r_manual_container'>
              <ZipView Href='' imageSrc={mbZipImage} title='Laptop installation Manual 2018.4.4'/>
              <ZipView Href='' imageSrc={mbZipImage} title='Commands Manual 2017.7.8'/>
              <ZipView Href='' imageSrc={mbZipImage} title='Matrix Blackbox product specification and use'/>
              </div>
            </div>
            <div className='r_side_bar'>
              <h5 >FOLLOW US</h5>
              <div className='r_socialLinkImgContainer'>
                <SocialLinkImageView imageSrc={mbFBimage}/>
                <SocialLinkImageView imageSrc={mbGplusImage}/>
                <SocialLinkImageView imageSrc={mbYoutubeImage}/>
                <SocialLinkImageView imageSrc={mbTwitterImage}/>
              </div>
              <h5 >HELP LINKS</h5>
              <div className='r_socialLinkButtonsContainer' >
                  <ButtonView content='FAQ'/>
                  <ButtonView content='Media'/>
                  <ButtonView content='Manuals'/>
                  <ButtonView content='NewsLetter'/>

              </div>
            </div>
        </div>
    );
}


function ZipView(props){
    return(
        <div className='r_zip_container'>
            <a href={props.Href}>
                <img src={props.imageSrc} alt="" />                     
            </a>
            <h5>{props.title}</h5>  
       </div>
    );
}

function SocialLinkImageView(props){
 return(
    <div className='r_socialLinkImg'>
        <a href=''>
            <img src={props.imageSrc} alt="" />
        </a>
    </div>

 );
}

function ButtonView(props){
    return(
     <a  className='r_anchorButton' href="">{props.content}</a>
    );
}


class SlideDownEffectView extends React.Component{

     constructor(props){
      super(props);
      this.state = {
          h4CssClass:'h4_closed',
          contentHeight:'0px'
      };
      this.h4One = React.createRef();
      this.h4Two = React.createRef();
      this.h4Three = React.createRef(); 
      this.h4Four = React.createRef();
      this.h4Five = React.createRef();
      this.h4Six = React.createRef();
      this.h4Seven = React.createRef();
      this.h4Eight = React.createRef();
      this.h4Nine = React.createRef();
      this.h4Ten = React.createRef();
      this.h4Eleven = React.createRef();
      this.h4Twelve = React.createRef();
      this.h4Thirteen = React.createRef();
      this.h4Fourteen = React.createRef();
    }

    

     currentClickedH4 = null;

     handleH4Click(e){
        
         let target = e.target;
         if(target.tagName !== 'H4') return;
          
         this.currentClickedH4 = target;
         let contentHeight = this.getContentHeight(target) + 'px';


         if(target.className === 'h4_closed'){
             this.setState({
                 h4CssClass:'h4_opened',
                 contentHeight:contentHeight,
             });
         }else{
             this.setState({
                 h4CssClass:'h4_closed',
                 contentHeight:'0px',
             });
         }
      
     }


     
     getContentHeight(tittleElement){
       let h4Parent = tittleElement.parentElement;
       let contentElement = h4Parent.querySelector('[data-number]');
       return contentElement.offsetHeight;
     }







   // these elements need a serious refactoring,too much repitition( still practicing react aug26 2021)
    render(){
        return(
       <div className='c_container_wrapper' onClick={(e)=>{
        this.handleH4Click(e);}} >
          <div className='c_container'>
           <h4 data-h4title='1' ref={this.h4One} className={this.currentClickedH4 === this.h4One.current ? this.state.h4CssClass : 'h4_closed'} >
             1. What are the  dimensions of the Matrix Blackbox & its battery?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4One.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="1">
              <p className='c_paragraph'>
                  Current exact dimensions of the tracker on its own is 12.5cm x 6cm x 0.2cm (LxWxH). As for the battery its 7cm x 6.2cm x 0.2cm. Please note that the battery is ordered as a separate unit from the Blackbox
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='2' ref={this.h4Two}  className={this.currentClickedH4 === this.h4Two.current ? this.state.h4CssClass: 'h4_closed'} >
             2.Is this item compatible with Apple Mac (desktop) computers?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Two.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="2">
              <p className='c_paragraph' >
                The Matrix Blackbox is compatible with all and any electronic as long as it has some internal space available.Most laptops and desktop have a lot of space (see install manual). The Blackbox will fit into most Mac Book’s with exception of the Mac Book Air & 2016 macbook models and later due to their compactness and lack of USB ports.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='3' ref={this.h4Three}  className={this.currentClickedH4 === this.h4Three.current ? this.state.h4CssClass: 'h4_closed'} >
             3. How long does the backup battery last when device is switched off?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Three.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="3">
              <p className='c_paragraph' >
               Current Lithium polymer battery is 2,300 mah battery can last for 2-4 days once the electronic is off and the power source disconnected. If the installation is on an electronic with lots of free space, more batteries can be installed in parallel to increase discharge time. You can customize with longer lasting batteries like 3,600 mah, 10,400 mah or even higher.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='4' ref={this.h4Four}  className={this.currentClickedH4 === this.h4Four.current ? this.state.h4CssClass: 'h4_closed'} >
              4. Can it track in an underground space or building?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Four.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="4">
              <p className='c_paragraph' >
                Yes. You can still track the lost electronic or luggage underground. GPS would fail since it relies on a direct line of sight with a satellite, and GPRS tracking via triangulation would give you a location. This is works by pinging the three cell towers and gets a rough coordinate and gives you a margin of error on the same. From there use the other features such as Wi-Fi scanning and eavesdropping to gather more intel.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='5' ref={this.h4Five}  className={this.currentClickedH4 === this.h4Five.current ? this.state.h4CssClass: 'h4_closed'} >
             5. Do you have manuals on how to install the Matrix Blackbox?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Five.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="5">
              <p className='c_paragraph' >
                Yes we do please visit our website and go to the Manuals section to find the related installation manuals. You can also write to us to send you directly via email.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='6' ref={this.h4Six}  className={this.currentClickedH4 === this.h4Six.current ? this.state.h4CssClass: 'h4_closed'} >
             6. Does the price include transportation?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Six.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="6">
              <p className='c_paragraph' >
               Yes , the price of the Matrix Blackbox is inclusive of the transportation cost. Click on express delivery if you want to use DHL or FedEX which can take 3-4 days and is charged higher. We also support custom delivery where a friend or a relative can come pick up your order from our offices. In such circumstances just give us their local phone number and we will pick it from there.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='7' ref={this.h4Seven}  className={this.currentClickedH4 === this.h4Seven.current ? this.state.h4CssClass: 'h4_closed'} >
              7. Do you (Matrix Blackbox Ltd) install the Blackbox for clients?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Seven.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="7">
              <p className='c_paragraph' >
                  Yes, we do install for local client here in Kenya. Just drop your device at our office and we will have it installed in less than an hour. We also charge a service fee for this depending on what we are installing the Blackbox in.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='8' ref={this.h4Eight}  className={this.currentClickedH4 === this.h4Eight.current ? this.state.h4CssClass: 'h4_closed'} >
              8. Will it work even if my laptop/device is turned off?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Eight.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="8">
              <p className='c_paragraph' >
                The Matrix Blackbox will continue working even when the electronic is shutdown under two conditions.   
              </p>
              <p className='c_paragraph' >
                1. If you installed it with a battery – The battery is there to ensure that even when the laptop is turned off the tracker can still function independently and therefore ensures that even if your laptop/desktop/electronic has been stolen you can still track it as long as the battery is still charged
              </p>
              <p className='c_paragraph' >
                2. If your configured your USB to stay awake – Alternatively keeping the USB on your device alive (wake on S3) on the bios settings ensures your Matrix Blackbox stays on even after shutdown by continuously supplying the power needed to the blackbox.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='9' ref={this.h4Nine}  className={this.currentClickedH4 === this.h4Nine.current ? this.state.h4CssClass: 'h4_closed'} >
             9. Is the battery rechargeable? If so, how will it charge?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Nine.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="9">
              <p className='c_paragraph' >
                The Matrix Blackbox battery is rechargeable and this happens when your electronic is on. It charges itself with one of the USBs or the power source its drawing power from at the back end. see installation manuals for more
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='10' ref={this.h4Ten}  className={this.currentClickedH4 === this.h4Ten.current ? this.state.h4CssClass: 'h4_closed'} >
             10. Do you do shipping to other countries?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Ten.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="10">
              <p className='c_paragraph' >
               We do shipping to any country in the world. No restrictions
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='11' ref={this.h4Eleven}  className={this.currentClickedH4 === this.h4Eleven.current ? this.state.h4CssClass: 'h4_closed'} >
             11. Does it come with a SIM Card?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Eleven.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="11">
              <p className='c_paragraph' >
                No. The Matrix Blackbox DOES NOT come with a SIM card. The buyer needs to purchase & secure the number of the tracker and limit its accessibility to others. Please remember to check with the mobile network provider first if the network allows remote top up of Airtime/Credit/Data and uses the recommended 2G and 3G frequencies.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='12' ref={this.h4Twelve}  className={this.currentClickedH4 === this.h4Twelve.current ? this.state.h4CssClass: 'h4_closed'} >
             12. Is there a monthly / yearly fee?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Twelve.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="12">
              <p className='c_paragraph' >
                 There is no monthly charges while using the SMS tracking features. This is a one off price for the Matrix Blackbox. However you will require to regularly recharge your SIM card with airtime / Data. We  (Matrix Blackbox Ltd) do not influence the rates your mobile network provider charges you.
              </p>
              <p className='c_paragraph' >
               As for the Online Platform, we do charge a yearly subscription fee. These funds go to help us maintain server cost for the email Online platform system.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='13' ref={this.h4Thirteen}  className={this.currentClickedH4 === this.h4Thirteen.current ? this.state.h4CssClass: 'h4_closed'} >
             13. Can I pay through PayPal?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Thirteen.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="13">
              <p className='c_paragraph' >
                Yes, we have set up a PayPal account system on the website. Please find the link written “buy now” on our website. Also note that it takes 7-14 days for paypal payments to process with our local banks thus be patient on delivery.
              </p>
            </div>
         </div> 
        </div>
        <div className='c_container'>
           <h4  data-h4title='14' ref={this.h4Fourteen}  className={this.currentClickedH4 === this.h4Fourteen.current ? this.state.h4CssClass: 'h4_closed'} >
             14. Is distributorship available for everyone?
           </h4>
           <div style={{height:this.currentClickedH4 === this.h4Fourteen.current ? this.state.contentHeight:'0px'}} className='content_container'>
            <div data-number="14">
              <p className='c_paragraph' >
                We welcome distributors and partners from any part of the world without any discrimination.To become a distributor download the partnership information from the Business section and see all the benefits and levels which you can join us at. Also download the pricing document to see the discounts you are likely to enjoy at wholesaler and partnership prices.
              </p>
            </div>
         </div> 
        </div>
       </div>
         
        );
    }

}


