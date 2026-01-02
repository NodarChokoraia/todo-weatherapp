import { useState } from 'react'
import './assets/components/search/search.css'
import List from './assets/components/list/list'


function App() {
    let [src,setsrc] = useState("src/assets/images/icon-sun.svg")
    let [walpaper,setwalpaper] = useState('src/assets/images/bg-desktop-dark.jpg')
    let [inputval,setinputval] = useState('')
    let [placeholder,setplaceholder] = useState('Create a new todo...')
    let [list,setlist] = useState([])
    let [completed,setcomplated] = useState([])
    let [uncomplated,setuncomplated] = useState([])
    let [ligththem,setligththem] = useState('')
    let [count,setcount] = useState(0)
    let handleclick6 = (e) => {
        setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))
        setligththem(val => val== '' ? '-ligth': '')
        let darkcomp = document.querySelectorAll('list-active')
    let ligthcomp = document.querySelectorAll('list-active-ligth')
    if(e.target.className == 'dark-ligth'){
        setsrc(val => val =='src/assets/images/icon-sun.svg' ? e.target.firstElementChild.src ='src/assets/images/icon-moon.svg':e.target.firstElementChild.src ='src/assets/images/icon-sun.svg')
        
    }else{
         
        setsrc(val => val == 'src/assets/images/icon-sun.svg' ?'src/assets/images/icon-moon.svg':'src/assets/images/icon-sun.svg')
    }
    if(src != 'src/assets/images/icon-moon.svg'){
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
        document.body.className = 'white'
        
        
        
        
    }else {
        document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
        document.body.className = 'black'
    }
    let array = document.getElementsByClassName('list-container')[0].childNodes
    
    
    for(let i of array){
        
        
        
        if(document.body.className == 'white'){
                if(i.className == 'list'){
                     i.className = 'list-ligth'
                }else if(i.className == 'list-active') {
                    i.className = 'list-active-ligth'
                }
                
        }else if(document.body.className == 'black'){
                if(i.className == 'list-ligth'){
                     i.className = 'list'
                }else if(i.className == 'list-active-ligth') {
                    i.className = 'list-active'
                }
                
        }
    }
    
    setwalpaper(cal => document.body.className == 'white'?'src/assets/images/bg-desktop-light.jpg' :"src/assets/images/bg-desktop-dark.jpg")
    }


    let handleclick3 = () => {
                setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))
                
        setuncomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-ligth'): document.querySelectorAll('.list'))
        let compligth =document.querySelectorAll('.list-active-ligth')
        let comp = document.body.className=='white' ?document.querySelectorAll('.list-active-ligth') : document.querySelectorAll('.list-active')
        if(comp.length != 0){
            for(let i of uncomplated){
                i.style.display = 'none'
            }
            for(let i of comp){
                i.style.display = 'flex'
            }
            for(let i of compligth){
                i.style.display = 'flex'
            }

          }
          console.log(uncomplated);
          
      }

      let handleclick4 = () => {
        
        setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))


          setuncomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-ligth'): document.querySelectorAll('.list'))
          let compligth =document.querySelectorAll('.list-active-ligth')
          let comp = document.querySelectorAll('.list-active')
          if(uncomplated.length != 0){
              for(let i of uncomplated){
                  i.style.display = 'flex'
              }
              for(let i of comp){
                  i.style.display = 'none'
              }
              for(let i of compligth){
                  i.style.display = 'none'
              }
          }
      }
      let handleclick5 = () => {
          let comp = document.querySelectorAll('.list-active')
                  setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))

          let compligth =document.querySelectorAll('.list-active-ligth')
           for(let i of uncomplated){
                  i.style.display = 'flex'
              }
              for(let i of comp){
                  i.style.display = 'flex'
              }
             for(let i of compligth){
                  i.style.display = 'flex'
              } 
      }
      let handleclick1 = () => {
             setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))

      if (inputval === '') {
          setplaceholder('Please enter task')
  
      } else {
          setplaceholder('Create a new todo...')
          setlist(val => [...val,inputval])
          setinputval('')
          setuncomplated( document.body.className=='white'? document.querySelectorAll('.list-ligth'): document.querySelectorAll('.list'))
          
          
          setcount(val => val+1)
        
        
    }
    
    if(src == 'src/assets/images/icon-moon.svg' ){
        let ligthlists = document.querySelectorAll('.list')
            document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
            
            
    }else {
        let ligthlists = document.querySelectorAll('.list')
        document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
        
    }
   let array = document.getElementsByClassName('list-container')[0].childNodes
    
    
    for(let i of array){
        
        
        
        if(document.body.className == 'white'){
                if(i.className == 'list'){
                     i.className = 'list-ligth'
                }
        }else if(document.body.className == 'black'){
                if(i.className == 'list-ligth'){
                     i.className = 'list'
                }
                
        }
    }
    
    
      };
      let handleclick2 = () => {
          let comp =document.querySelectorAll('.list-active')
          let compligth =document.querySelectorAll('.list-active-ligth')
          setuncomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-ligth'): document.querySelectorAll('.list'))
                  setcomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-active-ligth'): document.querySelectorAll('.list-active'))

          for(let i of comp){
              i.style.display = 'none'
              i.className = 'null'
          }
          for(let i of compligth){
              i.style.display = 'none'
              i.className = 'null'
          }
      }
      let classes = e => {
        
        e.target.className = 'list'
        if(document.body.className == 'white' && e.target.className == 'list'){
            return 'list-ligth'
        }else if(document.body.className == 'black' && e.target.className == 'list-ligth'){
            return 'list'
        }else if(document.body.className == 'white' && e.target.className == 'list-active'){
            return 'list-active-ligth'
        }else if(document.body.className == 'black' && e.target.className == 'list-active-ligth'){
            return 'list-active'
        }
    }
  return (
      <>
        <header >
          <img className="header" src={walpaper} alt="" />
        </header>
        <main>
          <div className="main-header">
              <h1>TODO</h1>
              <button className='dark-ligth' onClick={handleclick6}><img src={src} alt="" /></button>
          </div>

                      <div className={"main-search"+ ligththem} onMouseOut={val => {
                      let div = document.getElementsByClassName('main-navigation')
                      if(typeof(uncomplated) == typeof([])){
                      if(uncomplated.length != 0){
                          setuncomplated(val =>document.body.className=='white'? document.querySelectorAll('.list-ligth'): document.querySelectorAll('.list'))
                          
                          
                          if(src == 'src/assets/images/icon-moon.svg' ){
                            let ligthlists = document.querySelectorAll('.list')
                                document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
                           
                                
                        }else {
                            let ligthlists = document.querySelectorAll('.list')
                            document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
                            
                        }
                      }
                      }   
                      let array = document.getElementsByClassName('list-container')[0].childNodes
    
    
                        for(let i of array){
                            
                            
                            
                            if(document.body.className == 'white'){
                                    if(i.className == 'list'){
                                        i.className = 'list-ligth'
                                    }
                            }else if(document.body.className == 'black'){
                                    if(i.className == 'list-ligth'){
                                        i.className = 'list'
                                    }
                                    
                            }
                        }  
                      
                      
                      
                  }
                      }>
                          <button className="search-check" onClick={handleclick1} ><img src="src/assets/images/icon-check.svg" alt="" /></button>
                          <input value={inputval} placeholder={placeholder} id='input' onInput={(e) => setinputval(e.target.value)}/>
                          
                      </div>
                      <div className='main-list'> 
                      <div className='list-container' id='list'>
                        
                            {list.map((val,index) => <List text={val} key={index} classes={classes}/>)}
                            
                      </div>
                      
                    </div>
                    <div className="footer">
                      <div className={'main-navigation' + ligththem}>
                          <p className='count'>{count ==1 ? count :uncomplated.length} items left</p>
                          <div className='nav'>
                              <p className='nav-p' onClick={handleclick5}>All</p>
                              <p className='nav-p' onClick={handleclick4}>Active</p>
                              <p className='nav-p' onClick={handleclick3}>Completed</p>
                          </div>
                          <p className='clear' onClick={handleclick2}>Clear Completed</p>
                      </div>
                     
                    </div>
                    
                    
                  
          
        </main>
        <center><p className="footer-p">Drag and drop to render list</p></center>
        
      </>
    )
}

export default App
