import React from 'react';
import './Hero.css'
// import arrow_btn from '../../images/arrow_btn.png'
import play_icon from '../../images/play_icon.png'
import pause_icon from '../../images/pause_icon.png'

const Hero=({playStatus,heroCount,setPlayStatus,setHeroCount,heroData})=>{
    return(
        <div className='hero' style={{marginLeft:'40px',marginRight:'40px'}}>
            <div className="hero-text" style={{textAlign:'left'}}>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore Us!</p>
                <a href="https://atlan.com/">
                <button className='arrow-button'>
                <i class="fa-solid fa-arrow-right fa-lg	" style={{color:'black'}}></i>
                </button>
                </a>
                
                {/* <a href="https://atlan.com/">
                <img src={arrow_btn} alt="arrow" />
                
                </a> */}
                
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="image" />
                    <p>See the image</p>
                </div>
            </div>
        </div>
    )
}
export default Hero;