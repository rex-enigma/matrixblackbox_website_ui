import matrixLogoWhite from 'assets/matrix-blackbox-iot-tracking-solutions-logo-hover_2020.png';
import matrixLogoYellow from 'assets/matrix-blackbox-iot-tracking-solution-logo-hover.png';
import "./style.css";

export default function Footer(props){
    return(
      <div className='footer'>
          <FooterItem class_name='f_download' f_name='DOWNLOADS' f_nav1="Media" f_nav2="Manuals" f_nav3="Specifications" />
          <FooterItem class_name='f_support' f_name='SUPPORT' f_nav1="FAQ" f_nav2="Team"f_nav3="Contact us" />
          <FooterItem class_name='f_business' f_name='BUSINESS' f_nav1="Distributorship" f_nav2="Reseller Inquiry" f_nav3="Terms and condition" />
          <FooterItem class_name='f_policies' f_name='POLICIES' f_nav1="Return Policy" f_nav2="Privacy Policy"  f_nav3="Warranty Policy" />
          <div className="footer_navbar_brand">
            <a className="footer_logo" href=""> 
                <img className='f_matrixLogo_white' width='80px' height='80px' src={matrixLogoWhite}  alt=""></img>
                <img className='f_matrixLogo_yellow' width='80px' height='80px' src={matrixLogoYellow} alt="" />
                <h5>MATRIX BLACKBOX</h5>
                <h5>All right & trademarks Reserved 2020&copy; </h5>
            </a>
    </div>
      </div>
    );
}

//should have reused the navbrand component


function FooterItem(props){
    return(
     <div className={`${props.class_name} f_item`}>
         <p ><a href="">{props.f_name}</a></p>
        <a href="" className={`${props.class_name}_item`}>{props.f_nav1}</a>
        <a href="" className={`${props.class_name}_item`} >{props.f_nav2}</a>
        <a href="" className={`${props.class_name}_item`} >{props.f_nav3}</a>
     </div>
    );
}