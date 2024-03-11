import React from 'react';
import './Background.css'
import img8 from './assets/img8.png'
import img10 from './assets/img10.jpg'
import sql3 from './assets/sql3.jpg'
import img7 from './assets/img7.jpg'

const Background=({playStatus,heroCount})=>{
    if(playStatus){
        return <img src={img8} className="background" alt="sql_image" />
        
    }else if(heroCount===0){
        return  <img src={img10} className="background" alt="sql1_image" /> 
    }
    else if(heroCount===1){
        return  <img src={sql3} className="background" alt="sql2_image" /> 
    }
    else if(heroCount===2){
        return  <img src={img7} className="background" alt="sql3_image" /> 
    }
}
export default Background;