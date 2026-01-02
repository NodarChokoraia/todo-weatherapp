import React, { useState} from "react";
import './list.css'
export default function List(props){
    let [count,setcount] = useState(0)
    let handleclick = (e) => {
        e.target.parentElement.parentElement.remove()
        setcount(val => val+1)
       
    }
    let handleclick2 = (e) => {
        if(e.target.className == 'list-check'){




            if(e.target.parentElement.className == 'list' ||e.target.parentElement.className == 'list-ligth'){
                if(document.body.className == 'white'){
                     e.target.parentElement.className = 'list-active-ligth'
                }else {
                    e.target.parentElement.className = 'list-active'
                }
                
            }else if (e.target.parentElement.className != 'list'){
                if(document.body.className == 'white'){
                    e.target.parentElement.className = 'list-ligth'
                }else {
                    e.target.parentElement.className = 'list'
                }
                
            }
        }else{
            if(e.target.parentElement.parentElement.className == 'list' ||e.target.parentElement.parentElement.className == 'list-ligth'){
                if(document.body.className == 'white'){
                     e.target.parentElement.className = 'list-active-ligth'
                }else {
                    e.target.parentElement.className = 'list-active'
                }
            }else if (e.target.parentElement.parentElement.className != 'list'){
                if(document.body.className == 'white'){
                    e.target.parentElement.parentElement.className = 'list-ligth'
                }else {
                    e.target.parentElement.parentElement.className = 'list'
                }
                
            }
        }
        
        
        
    }

    
    
    return(
        <>
            <div className={'list'}>
                <button className="list-check" onClick={handleclick2}><img src="src/assets/images/icon-check.svg" alt="" /></button>
                <div className="list-div"><p className="list-p">{props.text}</p></div>
                <button className="list-cross" onClick={handleclick}> <img src="src/assets/images/icon-cross.svg" alt="" /></button>
            </div>
            
        </>
    )
}