 import Blog_LaptopBagImage from 'assets/worlds_first_gps_-_gprs_laptop_tracker_for_designers_high_end_laptops280x223.jpg';
 import Blog_LaptopGpsImage from 'assets/tracking-your-laptop-using-gps-gprs-matrix-blackbox280x158.jpg';
 import Blog_LaptopWifiImage from 'assets/tracking-your-laptop-using-wifi_wi-fi-matrix-blackbox_2.jpg';
 import Blog_iotImage from 'assets/matrix_blackbox _internet_of_things_michrochip280x223.jpg';
 import Blog_softvsHardImage from 'assets/software-tracker-vs-hardware-tracker-your-laptop-matrix-blackbox280x223.jpg';

 import './style.css';

 export default function blogPage(){
     return(
         <div className='blogPage'>
          <div className='blog_list'>
              <Card title='What drove me to create a hardware tracker[microchip] for Laptops'  author='Kevin M. | 07.12.2017' imageSrc={Blog_LaptopBagImage} buttonContent='READ MORE' >
              Hi, my name is Kevin from Kenya and this is the story of what drove me to create the Matrix Blackbox. The world's first commercially available hardware tracker chip for laptops and other stuff.  
              </Card>
              <Card title='How to track you lost or stollen laptop with GPRS/GPS' author='Kevin M. | 20.08.2018' imageSrc={Blog_LaptopGpsImage} buttonContent='READ MORE' >
              Ever had your Laptop lost or stolen and had no idea how to find it? Here we will cover how to find your stolen or lost laptop step by step like a professional detective using GPS and GPRS surveillance.             
              </Card>
              <Card title='Matrix BlackBox and the Internet of things - Give a voice to things' author='Richard G. | 00.09.2018' imageSrc={Blog_iotImage} buttonContent='READ MORE' >
              Ever wanted to know what this internet of things racket is all about? Well turns out its all about bringing inanimate objects to life by giving them a voice and allowing them to chat with you and each other. Enter the Matrix !
              </Card>
              <Card title='How to find your lost or stolen laptop using Wifi/Hotspot' author='Kevin M. | 21.09.2018' imageSrc={Blog_LaptopWifiImage} buttonContent='READ MORE' >
              Supposing your stolen laptop is in a multi-storey building (or apartment) that happens to have so many people living there. How do you narrow down to a specific apartment it is in? Learn how to use WiFi to do this...
              </Card>
              <Card title='Laptop tracking software vs hardware:Everything you need to know' author='Stella K. | 05.10.2018' imageSrc={Blog_softvsHardImage} buttonContent='READ MORE' >
              Ever wanted to know what is the difference between software laptop trackers and hardware laptop trackers? Get to understand abit how both operate and weigh for yourself what works best for you here...
               </Card>
          </div>
         </div>
     );
 }



 function Card(props) {
    return (
      <div className="card">
        <img className='card_image' src={props.imageSrc} alt=""></img>
        <div className="card_body">
          {props.author ? <h5>{props.author}</h5> : null}
          <h3>{props.title}</h3>
          <p>{props.children}</p>
          <a href='' className="card_btn_read_more">{props.buttonContent}</a>
        </div>
      </div>
    );
  }