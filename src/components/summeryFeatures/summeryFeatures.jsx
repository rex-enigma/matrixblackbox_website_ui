import './style.css';


export default function SummeryFeatures(props){
    let textColor = {color:'#79a942'}
  return(
      <>
      <div style ={textColor} className='comp_summery_heading_title'>
          SUMMERY FEATURES
      </div>
        <p>
          Use it as a GPS {props.summeryAssetType} Tracker and get {<span style={textColor}>Location coordinates as a Google Maps</span>} links via SMS for the location of your {props.summeryAssetType}.
        </p> 
        <p>
          It has has {<span style={textColor}>Network Based Location Tracking</span>} as a backup, in-case GPS is inaccurate or has a large margin of error.
        </p> 
        <p>
          Get {<span style={textColor}>Speed</span>} Info to know if its in a moving target.
        </p> 
        <p>
          It has {<span style={textColor}>Motion Sensing</span>}  to prevent theft on unattended {props.summeryAssetType}. eg in-case you leave it somewhere, it will alert you if your {props.summeryAssetType} is touched or moved.
        </p> 
        <p>
          No special apps needed. {<span style={textColor}>Track Using SMS</span>}. It integrates with the existing text system that comes with every smart phone.
        </p> 
        <p>
          Keep{<span style={textColor}> Tracking even when the {props.summeryAssetType} is switched off</span>}.
        </p> 
        <p>
          {<span style={textColor}>Voice surveillance system</span>}. Listen to conversations on your phone in real-time to know what the thief is doing or saying.
        </p> 
        <p>
          Active {<span style={textColor}>Wi-Fi Tracking System </span>} for distance locating on the ground and have {<span style={textColor}>Secure Wi-Fi Internet</span>} Secure Wi-Fi Internet everywhere you go.
        </p> 
        <p>
          It sends an {<span style={textColor}>Email Log</span>} of its whereabouts to your personal email address at the end of the day. (You can also request the log anytime).
        </p> 
        <p>
          And best of all it is {<span style={textColor}>integrated with the Online portal</span>} for Online tracking in real-time.
        </p> 
      </>
  );
}


// you can embed js expression inside jsx 
// also jsx can work as a expression to and you can embed it inside
// another jsx 