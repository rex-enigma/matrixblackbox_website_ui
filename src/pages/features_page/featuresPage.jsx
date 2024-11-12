import textImage from 'assets/tracker_that_uses_text_gps_hardware_kenya_kevin_muriithi.png';
import gpsImage from 'assets/tracker_that_uses_text_gps_google_maps_hardware_kenya_kevin_muriithi.png';
import gprsImage from 'assets/tracker_that_uses_text_gprs_google_maps_hardware_kenya_kevin_muriithi.png';
import motionImage from 'assets/tracker_that_uses_text_motion_sensors_hardware_kenya_kevin_muriithi.png';
import eavesdropImage from 'assets/tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import wifiImage from 'assets/tracker_that_uses_text_wifi_signals_google_maps_hardware_kenya_kevin_muriithi.png';
import  multiuserImage from 'assets/tracker_uses_text_3_or_users_profile_signals_google_maps_hardware_kenya_kevin_muriithi.png';
import reportLogoImage from 'assets/tracker_that_can_send_email_report_hardware_kenya_kevin_muriithi.png';
import onlineTrackingPortalImage from 'assets/tracker_uses_portal_online_3_or_users_profile_signals_google_maps_hardware_kenya_kevin_muriithi.png';
import facebookImage from 'assets/facebook_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import twitterImage from 'assets/twitter_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import youtubeImage from 'assets/youtube_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import googleMapImage from 'assets/google_plus_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import africanWomanImage from 'assets/promise.jpg';
import trackerImageBoxThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-1-u13329-fr.jpg';
import trackerBlackImageThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-2-u13328-fr.jpg';
import trackerWhiteImageThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-3-u13330-fr.jpg';
import trackerImageBox from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-1.jpg';
import trackerBlackImage from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-2.jpg';
import trackerWhiteImage  from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-3.jpg';

import './style.css';
import {Link} from 'react-router-dom'
import React from 'react';
import ApplicationFeatureBar from 'components/applicationFeatureBar/applicationFeatureBar'

export default function featuresPage(){
    return (
    <div id ='features_page'>
        <div className='f_product_preview_description'>
        <ProductPreview/>
        <div className='f_product_description'>
        <h4 className='f_description_h4'>MATRIX BLACKBOX FOR ASSET TRACKING</h4>
        <p className ='f_first_paragraph'>prototype version : 1.8v</p>
        <p className ='f_last_paragraph'>
            A revolutionary internet of things microchip that doubles
            as a GPS tracker for assets. The Matrix Blackbox is  a 
            one of a kind chip that was specifically designed for 
            tracking most household assets such as laptops, tablets,
            fusion splicers, smart TV, gaming consoles (playstation, 
            xbox etc) Dj mixers/TT, Desktops, imacs, motorbike, 
            vehicles (cars trucks etc) cargo, luggage and so much more.   
        </p>
        <Link className='f_buy_button' to='/'>BUY IT HERE &gt;</Link>
        <SpecsListView/>
        </div>
        </div>
        <ApplicationFeatureBar/>
        <div className='application_feature_list'>
                <div className='first f_feature_row'>
                    <div className='first f_feature_row_wrapper'>
                        <ApplicationFeatureView classname ='feature_text_base' title='TEXT BASED SYSTEM' image={textImage}>
                            No need for installing special apps to use the tracker. All you need 
                            to do is send a text message / Command and wait for a reply. 
                            The Matrix Blackbox integrates with personal email and google maps as well.
                        </ApplicationFeatureView>
                        <ApplicationFeatureView classname='feature_advance_gps' title='ADVANCED GPS' image={gpsImage}>
                            Accurate GPS positioning with A-GPS & GLONASS Integrated with Google
                            maps API for ease of use Speed reporting to eliminate delays in 
                            retrieval process. Incorporates GPS anti-jamming features to
                            eliminate up to 3 jammers
                        </ApplicationFeatureView>
                        <ApplicationFeatureView classname='feature_gprs_triangulation' title='GPRS TRIANGULATION' image={gprsImage}>
                            Fall-back for lost GPS signal Pings nearest 3 cell towers to enhance
                            accuracy Preference on 3g network selection but has fall back on 2g.
                            Uses 4 GSM band selections( 800 / 900 / 1900 / 2100 ) Applicable in most countries
                        </ApplicationFeatureView>
                    </div>
                </div>
                <div className='second f_feature_row'>
                    <div className='second f_feature_row_wrapper'>
                        <ApplicationFeatureView classname='feature_motion_sensing' title='MOTION SENSING' image={motionImage}>
                            Get SMS alert if someone touches, moves or tries to remove the Matrix
                            Blackbox from your asset. This feature can be turned on or off by just 
                            a text command. Motion sensing saves you on tracking time by preventing the theft
                        </ApplicationFeatureView>
                        <ApplicationFeatureView  classname='feature_eavesdropping' title='EAVESDROPPING' image={eavesdropImage}>
                            Listen in to conversations around the device the tracker is installed in.
                            Long range audio tapping of up to 10 meters. Enhanced Audio cleaning for
                            clarity and can be intergrated with voicemail recording for future analysis
                        </ApplicationFeatureView>
                        <ApplicationFeatureView classname='feature_wifi' title='INTEGRATED WI-FI' image={wifiImage}>
                            Incorporates WI-FI 802.11 b/g/n WPA2-PSK encrypted WI-FI for better security.
                            This Wi-Fi can be used for both internet surfing and on the ground proximity
                            tracking.The Stronger the signal strength the closer you are to it.
                        </ApplicationFeatureView>
                    </div>
                </div>
                <div className='third f_feature_row'>
                    <div className='third f_feature_row_wrapper'>
                        <ApplicationFeatureView classname='feature_multiuser' title='MULTIUSER READY' image={multiuserImage}>
                            Register up to 3 users on one Matrix Blackbox chip to use together via the SMS
                            platform to allow collaborative tracking for things such as cargo, packages etc.
                            This allows users to take turns to admin assets.
                        </ApplicationFeatureView>
                        <ApplicationFeatureView classname='feature_report_log' title='24 HOURS REPORT LOG' image={reportLogoImage}>
                            Get your hourly tracking log from the Matrix Blackbox in your email every 24hrs
                            or on demand. Keeps you appraised on all that happened in terms of locations,
                            Wi-Fi encounters among other details recorded by your blackbox.
                        </ApplicationFeatureView>
                        <ApplicationFeatureView classname='feature_tracking_portal' title='ONLINE TRACKING PORTAL' image={onlineTrackingPortalImage}>
                            Now added is the Online portal that allows you to track multiple assets Online without the need of 
                            SMS commands on one portal. Get 7 days free trial to use it with every Blackbox and enjoy IoT at 
                            its best.
                        </ApplicationFeatureView>
                 </div>
            </div>
         </div>
         <ExtraInfoView/>   
    </div>
    );
}


function SpecsListView(){
    return(
        <div className="specs_container">
            <div className="hardware_specs_table">
                <h3 className='f_spec_title'>
                    HARDWARE SPECS
                </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Technology :</td>
                           
                            <td>GSM / HSPA</td>
                        </tr>
                        <tr>
                            <td>2G bands :</td>
                            <td>850 / 900 / 1800 / 1900</td>
                        </tr>
                        <tr>
                            <td>3G bands :</td>
                            <td>HSDPA 900 / 2100</td>
                        </tr>
                        <tr>
                            <td>Speed :</td>
                            <td>HSPA 7.2/5.76 Mbps</td>
                        </tr>
                        <tr>
                            <td>WLAN :</td>
                            <td>Wi-Fi 802.11 b/g/n</td>
                        </tr>
                        <tr>
                            <td>Sensors :</td>
                            <td>GPS / GPRS / Accelerometer</td>
                        </tr>
                        <tr>
                            <td>Size :</td>
                            <td>12.5cm x 6cm x 0.2cm</td>
                        </tr>
                        <tr>
                            <td>Weight :</td>
                            <td>25g</td>
                        </tr>
                        <tr>
                            <td>Charging Voltage :</td>
                            <td>3.7 – 5V DC</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>

    );
}

function ApplicationFeatureView(props){
   return(
      <div className={`f_feature_card ${props.classname}`}>
          <img src={props.image} alt="" />
          <h4 className='f_feature_title'>
             {props.title} 
          </h4>
          <p>
              {props.children}
          </p>
      </div> 
   );
}

//should be in the component folder to reused in this page and buynow page
export function ExtraInfoView(){
    return(
        <>
              <div className='f_feature_extra_info' >
                  <h2>We Guarantee Your</h2>
                  <h1>PEACE OF MIND</h1>
                  <h3> 24/7 Technical Advice</h3>
                  <h3> Quality Assurance</h3>
                  <h3> 95%+ Recovery Rate</h3>
                  <div className='f_feature_social_media_links'>
                      <a className='f_feature_social_media_link facebook' href="">
                          <img src={facebookImage} alt="fb" />
                      </a>
                      <a className='f_feature_social_media_link twitter' href="">
                          <img src={twitterImage} alt="twitter" />
                      </a>
                      <a className='f_feature_social_media_link youtube' href="">
                          <img src={youtubeImage} alt="youtube" />
                      </a>
                      <a className='f_feature_social_media_link googlemap' href="">
                          <img src={googleMapImage} alt="googlemap" />
                      </a>
                  </div>
              </div>
          <div className='f_feature_african_woman_matrix_image_container'>
              <img src={africanWomanImage} alt="africanWoman" />
          </div>
        </>
    );
}


class ProductPreview extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentImage:trackerImageBox,
        };
    }
 
 handleImageChange(e){
     let target = e.target;
     //need refactoring quite,its a bad 'if' technique for the solution but it works heh
    if(target.className === 'f_previewImage' || target.className === 'f_product_preview' || target.className === 'f_previewImage_container') return;
    let currentImage;

    switch (e.target.dataset.thumb) {
        case 'thumb1':
            currentImage = trackerImageBox;
            break;
        case 'thumb2':
           currentImage = trackerBlackImage;
            break;   
        case 'thumb3':
         currentImage = trackerWhiteImage;
            break;        
 
        default:
            break;
    }

    this.setState((previousState)=>{
        return{
            currentImage:currentImage,
           }
    });


 }


    render(){
        return(
        <div className='f_product_preview'  onClick={(e)=>{this.handleImageChange(e)}}>
            <div className='f_previewImage_container'>
                <img className='f_previewImage' src={this.state.currentImage} alt="matrix tracker image" />
            </div>
            <div className='f_thumbnail' data-thumb='thumb1'>
               <img src={trackerImageBoxThumbnail} data-thumb='thumb1'alt="" />
            </div>
            <div className='f_thumbnail' data-thumb='thumb2'>
              <img src={trackerBlackImageThumbnail} data-thumb='thumb2' alt="" />
            </div>
            <div className='f_thumbnail' data-thumb='thumb3'>
              <img src={trackerWhiteImageThumbnail} data-thumb='thumb3' alt="" />
            </div>
      </div>
        );
    }
}