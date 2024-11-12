import mbTvImg from 'assets/hardware-tracker-for-samsung-lg-smart-tv-gps_tracking_device_for_tv-prey-micro gps tracking chip-assets-2.jpg';
import mbTvImgThumbnail from 'assets/hardware-tracker-for-samsung-lg-smart-tv-gps_tracking_device_for_tv-prey-micro gps tracking chip-assets-2-u201466-fr.jpg';
import mbLaptopImg from 'assets/hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-2.jpg';
import mbLaptopImgThumbnail from 'assets/hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-2-u15224-fr.jpg';
import mbDesktopImg from 'assets/hardware-tracker-for-desktop-imac-tracking software-mini pcie gps-prey-micro gps tracking chip-assets-2.jpg';
import mbDesktopImgThumbnail from 'assets/hardware-tracker-for-desktop-imac-tracking software-mini pcie gps-prey-micro gps tracking chip-assets-2-u203596-fr.jpg';

import mbWifiLaptopFeatureImg from 'assets/tracker-matrix-blackbox-features-infographic-2018_02.jpg'
import mbWifiTvFeatureImg from 'assets/tracker-matrix-blackbox-features-infographic-2018_gps_device_to_track_tv_02.jpg'
import mbGpsFeatureImg from 'assets/tracker-matrix-blackbox-features-infographic-2018_01.jpg';
import mbMotionLaptopFeatureImg from 'assets/tracker-matrix-blackbox-features-infographic-2018_03.jpg';
import mbMotionTvFeatureImg from 'assets/tracker-matrix-blackbox-features-infographic-2018_gps_device_to_track_tv_03.jpg';

import mbBoxImgThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-1-u13329-fr.jpg';
import mbBlackImgThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-2-u13328-fr.jpg';
import mbWhiteImgThumbnail from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-3-u13330-fr.jpg';
import mbBoxImg from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro gps tracking chip-assets-1.jpg';
import mbBlackImg from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-2.jpg';
import mbWhiteImg  from 'assets/custom-hardware-tracker-for-laptops-lg-tv-smart-tv-bike-samsunggps for laptop-lockittight-free laptop tracking software-mini pcie gps-prey-micro front-tracking chip-assets-3.jpg';
import mbIcon from 'assets/how_to_track_a_stolen_matrix_blackbox_tracker_that_can eavesdropp_hardwarei.png';

import React from 'react';
import './style.css';
import ApplicationFeatureBar from 'components/applicationFeatureBar/applicationFeatureBar';
import SummeryFeatures from 'components/summeryFeatures/summeryFeatures'
import {ExtraInfoView} from 'pages/features_page/featuresPage'

 function BuyNowReadMorePage(props){
    return(
        <div className='buyNowReadMorePage'>
            <div className='bn_preview_Description_container'>
              <ProductPreview 
                defaultPreviewImgSrc = {props.dPreviewImgSrc}
                defaultPreviewImgThumbSrc = {props.dPreviewImgThumbSrc } 
              >
              </ProductPreview> 
              <BuyInfoDescriptionView
                mbPrice = {props.mbPrice}
                mbPreviewTitle = {`MATRIX BLACKBOX ${props.previewTitle} TRACKING`} 
                mbBoxItemsInside = {props.itemsInsideTheBox}
              >
                This sleek dark chip can be installed in most {props.previewMiniContent}. 
                Purchase with your preferred shipping method below to get your Matrix Blackbox
                Units today. If you would like to organize your own delivery e.g through a 
                friend, write to us to help facilitate. Thank you.`
                  
              </BuyInfoDescriptionView>
            </div>
            <div className='bn_rulerContainer'>
                <div className='bn_ruler'></div>
            </div>
            <div className='bn_extra_info_container'>
              <div className='bn_extra_info'>
                <div className='bn_extra_info_title'>
                    {`WE KNOW THE PAIN OF LOOSING A ${props.extraInfoTitle} ...`}
                </div>
                {/* expecting 2 paragraphs here as children */}
                {props.children}
                <p>
                  The best chance you have for recovering your {props.extraInfoAssetType} is by having 
                  a microchip installed in your {props.extraInfoAssetType} that you can use to track it
                  down when its on or off and is not easily removed. The GPS and GPRS 
                  location on the blackbox will get you close to at least 5 meters radius 
                  of your {props.extraInfoAssetType} and deploy other awesome features such as eavesdropping
                  and Wi-Fi scanning to get you right to the spot of where your {props.extraInfoAssetType} is 
                  helping you uncover even details of the actual identity of the thief.
                 
                </p>
              </div>
            </div>
            <ApplicationFeatureBar/>
            <div className='bn_mb_feature_containerWrapper'>
                <div className='bn_mb_features_container'>
                    <div className='bn_mb_features_imgDesc bn_mb_features_gps' >
                     <img src={mbGpsFeatureImg} alt="" />
                     <FeatureDescView id = 'mb_feature_gps' title='GPS /GPRS TRACKING'>
                      Text ‘ Find ’ and the blackbox will reply back to you details of the {props.featureSectionAssetType}'s coordinates, bearing, speed (if it’s in a moving vehicle) and Google maps link. Additionaly in the event GPS is unavailable it will reply with network based location with accuracy range.
                     </FeatureDescView>
                    </div>
                    <div className='bn_mb_features_imgDesc bn_mb_features_motionSensing'>
                     <img src={props.motionAssetTypeImg} alt="" />
                     <FeatureDescView id = 'mb_feature_mSensing' title = 'MOTION SENSING - ANTI THEFT'>
                       Protect your {props.featureSectionAssetType} before it’s stolen by getting alerts if it’s touched or moved. The Matrix Blackbox comes with gyro sensors that enable it to detect 3 axis movements in real-time and texts you if orientation changes on the device. This is useful to alert you if your {props.featureSectionAssetType} is moved , touched or is being vandalized.
                       <br /><br />
                       The feature is activated by sending a text to your Matrix Blackbox ‘ motion on ’  and deactivated by texting it ‘ motion off ’.
                     </FeatureDescView>
                     <FeatureDescView id ='mb_feature_reportLog' title = 'REPORT & PLATFORM USE'>
                        The blackbox also sends a report of where {props.featureSectionAssetType} has been for the last 24Hours via email.You can also get all these via the online portal to track it realtime with other assets as well.
                     </FeatureDescView>
                    </div>
                    <div className='bn_mb_features_imgDesc bn_mb_features_wifi'>
                     <img src={props.wifiAssetTypeImg} alt="" />
                     <FeatureDescView id = 'mb_feature_hotspot' title = 'HOTSPOT / WI-FI TRACKING'>
                       Works by creating a Wi-Fi hotspot around the {props.featureSectionAssetType}  by texting the blackbox ‘ hotspot on ’ to turn it on and ‘ hotspot off ’ to turn it off. Useful in estimating the distance one is from the asset and can also be used as an internet hotspot to connect other devices such as tablets and phones  to the Wi-Fi as well.
                     </FeatureDescView>
                     <FeatureDescView id = 'mb_feature_wifi' title = 'WI-FI SCANNING'>
                       You can also scan the hotspots around with the Matrix blackbox, by texting it ‘ scan wifi ’ to get all the wi-fi’s names/ SSID's around your {props.featureSectionAssetType}.
                     </FeatureDescView>
                    </div>
                    <div  className='bn_mb_features_imgDesc bn_mb_features_summery'>
                     <SummeryFeatures summeryAssetType = {props.summerySectionAssetType}></SummeryFeatures>                  
                    </div>
                </div>
            </div>
             <SearchTagsView classname = 'bn_mb_searchTagsTitleDescptn'/>
            <MbAdvantageView/>
            <ExtraInfoView/>
        </div>
    )
}


export let BuyNowReadMoreLaptopPage = ()=>{
    let title = 'LAPTOP'
    return(
        <BuyNowReadMorePage 
          dPreviewImgSrc = {mbLaptopImg} 
          dPreviewImgThumbSrc = {mbLaptopImgThumbnail}
          previewTitle = {title}
          itemsInsideTheBox = 'Inside : 1 blackbox Chip and a battery.' 
          mbPrice = '84'
          previewMiniContent= {title.toLowerCase()}
          extraInfoTitle = {title}
          extraInfoAssetType = {title.toLowerCase()}
          wifiAssetTypeImg = {mbWifiLaptopFeatureImg}
          motionAssetTypeImg ={mbMotionLaptopFeatureImg}
          summerySectionAssetType ={title.toLowerCase()}
          featureSectionAssetType ={title.toLowerCase()}
        >
         <p>
          If you have ever been a victim of laptop theft or loss then you understand pain. Statistically, every 53 second someone undergoes this pain worldwide. This pain has been our drive to develop a smart microchip that helps you track and recover your stolen laptop with over 97% success rate.
        </p>  
         <p>
          Software trackers fail to work since they only work when the laptop is connected to the internet and powered on. Since thieves normally wipe the laptop clean (via formatting), recovery rate drops to almost zero. Mythical ways of recovering laptops such as use of mac address, web cookies, cryptographic keys and passwords are a joke since all these depend on luck that the laptop is not formatted or moved from the local area network   
        </p>  
        </BuyNowReadMorePage>
    );
}

export let BuyNowReadMoreDesktopPage = ()=> {
    let title = 'DESKTOP';

    return(
        <BuyNowReadMorePage
          dPreviewImgSrc = {mbDesktopImg} 
          dPreviewImgThumbSrc = {mbDesktopImgThumbnail}
          previewTitle = {title}
          itemsInsideTheBox = 'Inside : 1 blackbox Chip and a battery.' 
          mbPrice = '84'
          previewMiniContent= {title.toLowerCase()}
          extraInfoTitle = {title}
          extraInfoAssetType = {title.toLowerCase()}
          wifiAssetTypeImg = {mbWifiLaptopFeatureImg}
          motionAssetTypeImg ={mbMotionLaptopFeatureImg}
          summerySectionAssetType ={title.toLowerCase()}
          featureSectionAssetType ={title.toLowerCase()}
        >
         <p>
          If you have ever been a victim of {title.toLowerCase()} theft or loss then you understand pain. Statistically, every 53 second someone undergoes this pain worldwide. This pain has been our drive to develop a smart microchip that helps you track and recover your stolen {title.toLowerCase()} with over 97% success rate.
        </p>  
         <p>
         Software trackers fail to work since they only work when the {title.toLowerCase()} is connected to the internet and powered on. Since thieves normally wipe the {title.toLowerCase()} clean (via formatting), recovery rate drops to almost zero. Mythical ways of recovering {title.toLowerCase()} such as use of mac address, web cookies, cryptographic keys and passwords are a joke since all these depend on luck that the {title.toLowerCase()} is not formatted or moved from the local area network.   
        </p>  
        </BuyNowReadMorePage>
    );
}

export let BuyNowReadMoreTvPage = ()=>{
    let title = 'TV';
    return(
        <BuyNowReadMorePage
          dPreviewImgSrc = {mbTvImg} 
          dPreviewImgThumbSrc = {mbTvImgThumbnail}
          previewTitle = {title}
          itemsInsideTheBox = 'Inside : 1 Blackbox Chip, 1 converter and Battery.' 
          mbPrice = '93'
          previewMiniContent= {title.toLowerCase()}
          extraInfoTitle = {title}
          extraInfoAssetType = {title.toLowerCase()}
          wifiAssetTypeImg = {mbWifiTvFeatureImg}
          motionAssetTypeImg ={mbMotionTvFeatureImg}
          summerySectionAssetType ={title.toLowerCase()}
          featureSectionAssetType ={title.toLowerCase()}
        >
         <p>
           Have you ever bought a brand new TV from either a local store or Online  and as you were going home someone decided to smash through your rear window and steal your TV and maybe plus your car stereo, or worse you got home and found your beloved telly missing? Have you ever got home and you found someone looted your entire home and its like a hall with only echoes and memories of what you once had?. Have you ever rented out your fully furnished apartments (maybe on airbnb) only to have thieves disguised as guest move in and leave in the middle of the night with your electronics?
         </p>  
         <p>
           For years now thieves have found new creative ways of taking what does not belong to them. We heard your problem and we have decided to answer it with a smart tracking hardware to embed in your TV to help you prevent theft as well as make your tv a bit smarter.
         </p>  
        </BuyNowReadMorePage>
    );
}


//should have made productPreview in featurespage reusable component and reuse it in this page
class ProductPreview extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentPreviewImage:this.props.defaultPreviewImgSrc,
        };
    }

 handleImageChange(e) {
    let target = e.target;
    //need refactoring quite,its a bad 'if' technique for the solution but it works heh
    if(target.className === 'bn_previewImg' || target.className === 'bn_previewImgContainer' || target.className === 'bn_previewContainer') return;
    let currentImage;

    switch (target.dataset.thumb) {
        case 'thumb1':  
            currentImage = this.props.defaultPreviewImgSrc;
            break;
        case 'thumb2':
            currentImage =  mbBoxImg;
            break;   
        case 'thumb3':
            currentImage = mbBlackImg;
            break;   
        case 'thumb4':
            currentImage = mbWhiteImg;
            break;        

        default:
            break;
    }

    this.setState({
        currentPreviewImage:currentImage,
        });

}

    render(){
      return(
        <div className='bn_previewContainer' onClick={(e)=>{this.handleImageChange(e)}}>
            <div className='bn_previewImgContainer'>
                <img className='bn_previewImg' src={this.state.currentPreviewImage} alt="" />
            </div>
            <div className='bn_thumbnail' data-thumb = 'thumb1'>
                <img src={this.props.defaultPreviewImgThumbSrc} alt="" data-thumb = 'thumb1'/>
            </div>
            <div className='bn_thumbnail' data-thumb = 'thumb2'>
                <img src={mbBoxImgThumbnail} alt="" data-thumb = 'thumb2' />
            </div>
            <div className='bn_thumbnail' data-thumb = 'thumb3'>
                <img src={mbBlackImgThumbnail} alt="" data-thumb = 'thumb3'/>
            </div>
            <div className='bn_thumbnail' data-thumb = 'thumb4'>
                <img src={mbWhiteImgThumbnail} alt="" data-thumb = 'thumb4' />
            </div>
        </div>
      );
    }

}



function BuyInfoDescriptionView(props){
    return(
        <div className='bn_description_container'>
            <div className='bn_previewTitle'>
                {props.mbPreviewTitle}
            </div>
            <div className ='bn_mbPreviewMiniDescription'>
              <p data-mbversion='1.8v'> Prototype version : 1.8v</p>
              <p >{props.mbBoxItemsInside}</p>
              <p>{props.children}</p>
            </div>
            <ShippingTypeView shippingType ='EXPRESS SHIPPING WITH DHL' mbPrice={props.mbPrice}>
              This is our recommended shipping courier of choice. It may cost you more but will deliver in 3-5 days & is the most reliable.
            </ShippingTypeView>
            <ShippingTypeView shippingType ='EXPRESS SHIPPING WITH AIRMAIL' mbPrice={props.mbPrice}>
              This is a secondary cheaper option of using registered mail. It may cost you less but will deliver in 21-35 days.
            </ShippingTypeView>
            <a className='bn_downloadManualBtn' href=""> Download manual &gt;</a>
        </div>
    );

}

function ShippingTypeView(props){
    return(
        <div className='bn_purchaseContainer'>
         <div className='bn_shippingType' >{props.shippingType}</div>
         <div className='bn_priceInfo_buyBtn_container'>
             <div className='bn_price_info'>{`price: $${props.mbPrice} USD`}</div>
            <a  className='bn_buyNowBtn' href="">BUY NOW &gt;</a>
         </div>
         <div className = 'bn_shipping_info'>
             {props.children}
         </div>
        </div>
    );
}

function FeatureDescView(props){
    return(
        <div id = {props.id} className='bn_mb_featureDescriptionContainer'>
            <div className='bn_mb_featureTitle'>
             {props.title}
            </div>
            <p className='bn_mb_featureDescription'>
             {props.children}
            </p>
        </div>
    );
}



function SearchTagsView(props){
 return(
    <div className={props.classname}>
        <div className='bn_mb_searchTagTitle'>
         TAG:
        </div>
        <div className='bn_mb_searchTags'>
        <div className='bn_mb_searchTag'>Matrix Blackbox</div>
        <div className='bn_mb_searchTag'>Hardware</div>
        <div className='bn_mb_searchTag'>email log tracking</div>
        <div className='bn_mb_searchTag'>computer Tracker</div>
        <div className='bn_mb_searchTag'>GPS</div>
        <div className='bn_mb_searchTag'>GPRS</div>
        <div className='bn_mb_searchTag'>WI-FI tracking system</div>
        <div className='bn_mb_searchTag'>SMS Based Tracker</div>
        <div className='bn_mb_searchTag'>Voice surveillance system</div>
        <div className='bn_mb_searchTag'>No Annual or Monthly Cost For Tracking</div>
        </div>
    </div>
 );
}


function MbAdvantageView(){
    let textHighlightGreen = {color:'#79A942'};

    return(
      <div className = 'bn_mb_advantagesContainer'>
        <h3 className='bn_mb_advTitle'>
            TAKE ADVANTAGE OF THE MATRIX BLACKBOX
        </h3>
        <div className='bn_mb_advantagesDescptnCon'>
          <AdvDescView title = "IT'S A HARDWARE">
             You can track your computer even when its formatted. This is because the tracker is a separate from your computer operating system and operates independently. It does not interfere with how your computer functions in anyway.
          </AdvDescView>
          <AdvDescView title = "IT'S RELIABLE & CONVENIENT">
            You can track the computer even when it’s switched off. You can do this two ways; One is by relying on the computer's internal power supply which is normally active even when its on or Two you can incorporate an extra battery for the tracker to keep it alive even when the internal power of the laptop is off. This battery self recharges every time when the computer is on by default.
          </AdvDescView>
          <AdvDescView title = "Wi-FI EVERYWHERE YOU GO">
            You can use the Blackbox’s Wi-Fi for internet connectivity saving you cost on buying modems. The Wi-Fi can connect to unlimited number of devices around your computer making it even extra cool and saving you time on networking multiple devices via Wi-Fi.
          </AdvDescView>
          <AdvDescView title = "AFFORDABLE / COST EFFECTIVE">
         The hardware is affordable to buy. {<span style={textHighlightGreen}>NO ANNUAL OR MONTHLY COST FOR TRACKING</span>} on the SMS platform. You also get to choose which mobile subscriber's airtime and data plan works for you.
          </AdvDescView>
        </div>
      </div>  
    );
}

function AdvDescView(props){
    let tittleColorRed = {color:'#E40613'};

    return(
        <div className='bn_mb_mbAdvantageContainer'>
            <div className='bn_mb_mbAdvantageImgContainer'>
                <img src={mbIcon} alt="" />
            </div>
            <div className='bn_mb_mbAdvantage'>
                <h5 style = {tittleColorRed}>{props.title}</h5>
                <p>{props.children}</p>
            </div>
        </div>
    );
}