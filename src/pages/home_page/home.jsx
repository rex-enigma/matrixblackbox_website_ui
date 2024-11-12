import Carousel from "./carousel/carousel";
import laptopImage from "assets/custom-hardware-tracker-for-laptops-pcie gps-prey-micro gps tracking chip-project.jpg";
import consoleImage from "assets/custom-hardware-tracker-for-gaming-console-playstation-gps-prey-micro gps-xbox-chip-project.jpg";
import fusionSplicerImage from "assets/custom-hardware-tracker-forpro-810-fusion-splicer-fitel-gps-prey-micro-chip-project.jpg";
import djMixerImage from "assets/custom-hardware-tracker-for-pioneer-dj-mixer-turn-table-desk-console-gps-prey-micro- tracking chip-project.jpg";
import smartTvImage from "assets/custom-hardware-tracker-for-smart-tv--pcie-gps-prey-micro- tracking chip-project.jpg";
import gamingPcImage from "assets/custom-hardware-tracker-for-gaming-graphic-design_server_gps-prey-tracking-project.jpg";
import motorbikeImage from "assets/custom-hardware-tracker-for-motorbike-pcie gps-prey-micro gps-bike-chip-project.jpg";
import vehicleImage from "assets/custom-hardware-tracker-for-laptops-pcie gps-prey-micro gps-car-chip-project.jpg";

import CustomBar from 'pages/home_page/customBar/customBar'
import {Link} from 'react-router-dom'
import "./style.css";

export default function Home() {
  return (
    <>
      <Carousel />
      <CustomBar/>
      <div className='product_grid'>
          <ProductItem to='/laptopBuyPage' productName='laptop' imageSrc={laptopImage}>
            <h4 className='product_title'>
            MB FOR TRACKING GENERAL LAPTOPS
            </h4>
            <p className='product_description'>
            Matrix Blackbox Ltd is a design an innovation consulting IoT firm based in Kenya.
            Our goal is to create impressions through innovative IoT technologies.  We build
            creative high-tech products for the betterment of individuals, society and the 
            world as a whole..
            </p>
          </ProductItem>
          <ProductItem to='/consoleBuyPage' productName='console'  imageSrc={consoleImage}>
            <h4 className='product_title'>
            MB FOR TRACKING GAMING CONSOLES/PS/X-BOX
            </h4>
            <p className='product_description'>
            If you are a gamer or run a gaming arcade you may want to consider having the 
            Matrix Blackbox installed in your consoles/ PS4 / Xbox to protect them from 
            vandalism and theft. With the Matrix Blackbox you can track a stolen
            console / PS4 / Xbox and recover it.
            </p>
          </ProductItem>
          <ProductItem to='/splicerBuyPage' productName='fusion_splicer' imageSrc={fusionSplicerImage}>
            <h4 className='product_title'>
            MB FOR TRACKING GENERAL FUSION SPLICERS
            </h4>
            <p className='product_description'>
            Fusion splicers can be quite costly to procure and loosing one can cost you a 
            fortune in terms of replacement and time lost. Using the Matrix Blackbox you 
            can track this asset when you lease it or use it to know if the people on the 
            ground are at the site they are supposed to be.
            </p>
          </ProductItem>
          <ProductItem to='/djMixerBuyPage' productName='dj_mixer'  imageSrc={djMixerImage}>
            <h4 className='product_title'>
            MB FOR TRACKING GENERAL DJ MIXERS/TT/GEAR
            </h4>
            <p className='product_description'>
            If you are a DJ you may want to keep your mixer/Turn Table/ gear safe as it is your
            livelihood asset of choice for the work you do. With the help of the Matrix Blackbox 
            you will be able to geo-fence, track it down incase of theft and so much more.
            </p>
          </ProductItem>
          <ProductItem to='/tvBuyPage' productName='smart_tv'  imageSrc={smartTvImage}>
            <h4 className='product_title'>
            MB FOR TRACKING SMART T.V / LARGESCREENS
            </h4>
            <p className='product_description'>
            If you ever lease fully furnished apartments or have a very costly giant wall screen 
            smart T.V in one of them or at your home you may want to have the Matrix Blackbox 
            installed in them so that if someone tries to steal your smart T.V you will be able
            to track it down and recover it.
            </p>
          </ProductItem>
          <ProductItem to='/desktopBuyPage' productName='gaming_pc'  imageSrc={gamingPcImage}>
            <h4 className='product_title'>
            MB FOR TRACKING GAMING PC / SERVER PC
            </h4>
            <p className='product_description'>
            If you have ever lost a gaming or server desktop then you know true pain as they 
            are normally  the most expensive computers money can buy and can carry a lot of 
            information. The Matrix Blackbox can help you secure, track and keep tabs on and 
            much more.
            </p>
          </ProductItem>
          <ProductItem to='/motorbikeBuyPage' productName='motorbike'  imageSrc={motorbikeImage}>
            <h4 className='product_title'>
            MB FOR TRACKING MOTORBIKES
            </h4>
            <p className='product_description'>
            Bikes are very efficient vehicles especially when avoiding traffic. That makes 
            them a target for thieves. If your motorcycle is ever stolen you can track 
            it using the Matrix Blackbox chip. Track your bike in real time and get the 
            chance to recover with this chip.
            </p>
          </ProductItem>
          <ProductItem to='/vehicleBuyPage' productName='vehicle'  imageSrc={vehicleImage}>
            <h4 className='product_title'>
            MB FOR TRACKING VEHICLES
            </h4>
            <p className='product_description'>
            Your vehicle is very important to you. That is why installing an internal 
            car GPS tracker and an anti theft system is important. The Matrix Blackbox 
            can be used for this and help you recover it in the event it is stolen. It 
            can also help keep tabs or how it is being driven an where it has been.
            </p>
          </ProductItem>
      </div>
    </>
  );
}

function ProductItem(props) {
  return(
    <div className = 'product_card' id = {props.productName}>
      <div className ='product_image'>
        <img src = {props.imageSrc} alt="" />
      </div>
      <div className = 'product_body'>
        {props.children}
        <a className ='read_more' href="">READ MORE &gt;</a>
        {/* <a className ='buy_btn' href="">BUY NOW</a> */}
        <Link className = 'buy_btn' to={props.to}>BUY NOW</Link>
      </div>
    </div>
  );
}
