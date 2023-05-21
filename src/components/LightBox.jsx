import React from 'react'
import close from "../images/icon-close.svg"
import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'

function LightBox(props) {
  return (
    <div>
         { props.lightBox && 
        <div className="lightbox">
              <img src={close} alt="close" className='close' onClick={props.close}/>
              <img src={props.Image} alt="" className="product"/>
              <img src={previous} alt="" className='previous' onClick={props.Prev}/>
              <img src={next} alt="" className='next' onClick={props.Next}/> 
              
              <div className='thumbnails'>
                {props.thumbnails}     
              </div>
          </div>
        }
    </div>
  )
}

export default LightBox