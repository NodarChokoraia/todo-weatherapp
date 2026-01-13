import React, { useState} from "react";
import './list.css'
//images{
import check from '../../images/icon-check.svg'
import cross from '../../images/icon-cross.svg'
//}
export default function List(props){
    let setcomplated = props.setcomps
    let ligth = props.ligth
    let key = props.index
    let {text,complated} = props.items
    return(
        <>
            <div className={!complated?'list'+ligth:'list-active'+ligth}>
                <button className='list-check' onClick={()=> {
                   
                   
                   setcomplated(val => val.map((value,i) => 
                    ({
                        ...value,
                        ...(key == i?{complated:!value.complated}:{})
                    })
                    
            
                   
                    
                        
                   ))


                   
                    
                    
                    
                }}><img src={check} alt="" /></button>
                <div className="list-div"><p className="list-p">{text}</p></div>
                <button className="list-cross" onClick={() => setcomplated(val => val.filter((value,i) => i != key))}> <img src={cross} alt="" /></button>
            </div>
            
        </>
    )
}