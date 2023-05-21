import next from '../images/icon-next.svg'
import previous from '../images/icon-previous.svg'


function Hero(props) {
  return (
    <div>
        <div className='mobileHero'>
            <img src={props.Image} alt="" className="product" onClick={props.open}/>
            <img src={previous} alt="" className='previous' onClick={props.Prev}/>
            <img src={next} alt="" className='next' onClick={props.Next}/> 
        </div>
        
        <div className='thumbnails'>
          {props.thumbnails}     
        </div>
    </div>
  )
}

export default Hero