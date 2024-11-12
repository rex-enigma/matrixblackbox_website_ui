import transBlackMatrixLogo from "assets/matrix blackbox-iot-tracker-system.png";
import yellowBlackMatrixLogo from "assets/matrix-blackbox-iot-tracking-solution-logo-hover2.png";
import './style.css';
export default function formSection() {
    return(
        <div className ='form_section'>
            <div className='form_section_text'>
            <p>TALK TO US, WE LISTEN</p>
            </div>
            <div className='matrix_details'>
            <a className = 'matrix_logo_form' href="">
                <img className ='default_transparent mb_logo' src={transBlackMatrixLogo} alt="" />
                <img className ='yellow_hover mb_logo' src={yellowBlackMatrixLogo} alt="" />
            </a>
            <div className=' m_detail'>
            <h2>MATRIX BLACKBOX</h2>
                <p >
                Telephone / Call / Text / whatsapp
                </p >
                <p >
                +254 72536 1287 / +254 78052 3807
                </p>
                <p >
                Open From : 0500hrs – 1700hrs (GMT)
                </p>
                <p>
                Office HQ @ Ground Floor Suite 2,
            </p>
                <p>
                Mabuli House Muhoho Avenue, 
                </p>
                <p>
                Nairobi P.O.Box 1122 – 00511 Ongata Rongai, Kenya.
                </p>
                <p>
                www.matrixblackbox.com
                </p>
            </div>
            </div>
            <div className = 'matrix_form'>
             <form action="" className='form'>
                 <input type="text" name='name' className='form_input' id='input_name' placeholder='Your name' />
                 <input type="email" name="email" className='form_input' id="input_email" placeholder='Your Email' />
                 <input type="tel" name="phone" className='form_input' id="input_phone" placeholder='Your phone Number'/>
                 <input type="text" name="country" className='form_input' id="input_country" placeholder='Enter state/ Country' />
                 <textarea name="text"    cols="30" rows="10" id="input_text" placeholder='Tel us more...'></textarea>
                 <button type='submit' className='form_btn'> Send Email</button>
             </form>
            </div>
        </div>
    );
}

