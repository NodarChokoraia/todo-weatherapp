import { useState } from 'react'
import './assets/components/search/search.css'
import List from './assets/components/list/list'


function App() {
    let [inputval,setinputval] = useState('')
    let [placeholder,setplaceholder] = useState('Create a new todo...')
    let [list,setlist] = useState([])
    let [ligththem,setligththem] = useState('')
    let [filtered,setliftered] = useState('all')
  return (
      <>
        <div className={'container' + ligththem}>
            <header >
              <img className="header" src={ligththem == '-ligth' ? 'src/assets/images/bg-desktop-light.jpg' : 'src/assets/images/bg-desktop-dark.jpg'}  alt="" />
            </header>
            <main>
              <div className="main-header">
                  <h1>TODO</h1>
                  <button className='dark-ligth' onClick={()=> setligththem(val => val == '' ? '-ligth' : '')}><img src={ligththem == '-ligth' ? 'src/assets/images/icon-moon.svg' : 'src/assets/images/icon-sun.svg'} alt="" /></button>
              </div>
    
                          <div className={"main-search"+ ligththem} >
                        
                              <button className="search-check" onClick={() => {
                                if(inputval !=''){
                                  setlist(val =>[
                                    ...val,
                                      {
                                        text:inputval,
                                        complated:false
                                      }
                                    ])
                                    setplaceholder('Create a new todo...')
                                }else{
                                  setplaceholder('Enter task!')
                                }
                                
                                list.forEach(val => console.log(val))
                                
                                setinputval('')
                              }}><img src="src/assets/images/icon-check.svg" alt="" /></button>
                              <input value={inputval} placeholder={placeholder} id='input' onInput={(e) => setinputval(e.target.value)}/>
                              
                          </div>
                          <div className='main-list'> 
                          <div className='list-container' id='list'>
                            
                                {list.filter(val => {

                                  if(filtered == 'active'){
                                    return val.complated == false
                                  }
                                  if(filtered == 'uncomplated'){
                                    return val.complated == true
                                  }
                                  
                                    return true
                                  
                                }).map((val,index) =>
                                  <List index={index} setcomps={setlist} items = {val}  ligth={ligththem}/>
                                  
                                 
                                 )}
                                
                          </div>
                          
                        </div>
                        <div className="footer">
                          <div className={'main-navigation' + ligththem}>
                              <p className='count'>{list.filter(val => val.complated == false).length} items left</p>
                              <div className='nav'>
                                  <p className='nav-p' onClick={()=>setliftered('all')}>All</p>
                                  <p className='nav-p' onClick={()=>setliftered('active')}>Active</p>
                                  <p className='nav-p' onClick={()=>setliftered('uncomplated')}>Completed</p>
                              </div>
                              <p className='clear' onClick={()=> {
                                setlist(val => val.filter(val => 
                                  val.complated!=true
                                ))
                              }}>Clear Completed</p>
                          </div>
                         
                        </div>
                        
                        
                      
              
            </main>
            <center><p className="footer-p">Drag and drop to render list</p></center>
            
        </div>
      </>
    )
}

export default App
