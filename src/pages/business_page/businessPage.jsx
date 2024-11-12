import matrixTeamImage from 'assets/worlds_first_gps_-_gprs_laptop_tracker-think-big-iot.jpg';
import bFacebookImage from 'assets/facebook_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import bTwitterImage from 'assets/twitter_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import bYoutubeImage from 'assets/youtube_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import bGoogleMapImage from 'assets/google_plus_matrix_blackbox_tracker_that_can eavesdropp_hardware_kenya_kevin_muriithi.png';
import './style.css';
import { Children } from 'react';



export default function businessPage(){
    return(
        <div className='businessPage'>
            <div className='business_teamImage_container'>
              <img className='business_teamImage' src={matrixTeamImage} alt="" />
              <p className='business_invest_para'>#INVESTINIOT</p>
            </div>
            <div className='business_social_media_links_container'>
             <div className='business_social_media_links'>
                 <a href="">
                 <img className='business_facebook_image' src={bFacebookImage} alt="" />
                 </a>
                 <a href="">
                 <img className='business_twitter_image' src={bTwitterImage} alt="" />
                 </a>
                 <a href="">
                 <img className='business_youtube_image' src={bYoutubeImage} alt="" />
                 </a>
                 <a href="">
                 <img className='business_googleMap_image' src={bGoogleMapImage} alt="" />
                 </a>
             </div>
            </div>
             <div className='business_section_info_container'>
                     <BusinessSectionInfo businessSection='business_section_partner' heading='WHO ARE PARTNERS ?'>
                       <p>
                       A partner to us is a business entity or a person willing to work with us on our innovation
                       projects and make the products we develop available to the consumers who rely need it. Partners
                       can come in as Distributors, investors, donors, Sponsors and even friends to cheer us on. 
                       The Matrix Blackbox still has long way to go and we need all these if we are going to succeed 
                       to have users to get access to it.  
                       </p>
                     </BusinessSectionInfo>
                     <BusinessSectionInfo businessSection='business_section_befPartnering' heading='WHAT ARE BENEFITS OF PARTNERING WITH US ?'>
                           <p>
                            1.You can use our products to build a business around you most of our innovations are on products that are hard to come by.
                            By being our Partner you get to be among the first to access them and even sell them.  
                           </p>
                           <p>
                           2.You can use our products to build better communities. We believe in making this world a better place. Our products are centered around the betterment of society.
                           </p>
                           <p>
                           3.Be the first to get new innovations to the market. Unlike most consumer products who get satisfied in selling a product as it is for years, we believe in making them better and better. Experience new innovations as you work with us
                           </p>
                     </BusinessSectionInfo>
                     <BusinessSectionInfo businessSection='business_section_invOpportunity' heading='WHAT INVESTMENT OPPORTUNITIES ARE AVAILABLE ?'>
                       <p>
                       Consumer electronics have been on the rise in terms of production but so has theft and loss. This loss not only affects people 
                       financially but also means they loose important things such as data(in the case of laptops and desktops), privacy, Time as well 
                       as peace of mind.Its estimated on average a laptop is lost every 53 seconds. The problem is rising with rising population and 
                       overcrowding and its no better especially in markets where crime rate is high. We hope to solve not only theft but alot of more
                       IoT related problems as well as improve systems and make them efficient using this chip. To do this we need more funding and
                       thus we are reaching out to interested investors to join us in this journey.If interested request for our investment proposal 
                       by writing to us to info@matrixblackbox.com & we shall get back to you as soon as possible  
                       </p>
                     </BusinessSectionInfo>
                     <BusinessSectionInfo businessSection='business_section_destrOpportunity' heading='WHAT DISTRIBUTORSHIP OPPORTUNITIES ARE AVAILABLE ?'>
                       <p>
                       To partner with us as a distributor is very easy in only Four steps. 
                       </p>
                       <p>1. Purchase at least two or more Matrix Blackboxes for test purpose. This allows you to test the product and get to learn</p>
                       <p>i) How to install and use it.</p>
                       <p>ii) If the product works with your existing network infrastructure</p>
                       <p>iii) If there are any problems in using it before purchasing bulk order – If there are any issues you tell us and will fix it until it works flawlessly as advertised</p>
                       <p>2. Pick a distributorship package that suits you. Each distributors’ story is different. Some want the blackbox to start a business. others want to integrate it in their existing business. we have developed:</p>
                       <p>i) Startup distributorship package (for orders of 100 units or less)</p>
                       <p>ii) Midsize distributorship package (for orders between 100-1000 units)</p>
                       <p>ii) Corporate distributorship package (for orders above 1000 units)</p>
                       <p>3. Sign up a Distributorship contract with us.</p>
                       <p>
                           Once we establish good communication and regular order size you will be taking, we can agree on terms and get you started 
                           as a distributor. This helps you secure your order and work with us. 
                           This also helps us know who to give top priority on orders. You can make special arrangements with us at this point 
                           e.g sole distributorship agreements, shipping arrangements. e.t.c</p>
                       <p>4. Make an order.</p>
                       <p>At this point you can make your bulk order and we shall deliver as soon as possible or as per agreed time.</p>
                     </BusinessSectionInfo>
                     <BusinessSectionInfo businessSection='business_section_benefitDistributor' heading='WHAT ARE THE BENEFITS OF BEING ONE OF OUR DISTRIBUTORS ?'>
                       <p>– Lower Prices per unit on your purchases of our products</p>
                       <p>– You are the first to get info on any new updates, changes or modification on our product</p>
                       <p>– You are the first to get updated manuals on our product</p>
                       <p>– You are the first to test out new changes, updates and modification on the product.</p>
                       <p>– You set their own prices to consumers</p>
                       <p>– You get preferential treatment on orders</p>
                       <p>
                       All these will vary with your package as well. All partners will be listed on our website soon with links to their websites 
                       for clients to find them in their respective clients. We shall put up our terms and conditions for all these up soon as well
                       </p>
                     </BusinessSectionInfo>
             </div>
        </div> 
    );
}


function BusinessSectionInfo(props){
    return(
        <div className={`business_section ${props.businessSection}`} >
            <h4>{props.heading}</h4>
           <div>{props.children}</div>
        </div>
    );
}