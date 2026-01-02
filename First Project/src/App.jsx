import { useState } from "react"

function App() {
  let [meniu,setmeniu] = useState(false)
  let [temperature,setremperature] = useState('C')
  let [WindSpeed,setWindSpeed] = useState('km/h')
  let [Percipotation,setPercipotation] = useState('mm')
  return (
    <>
      <div className="container">
        <nav className="navigation">
          
            <img src="src/assets/images/logo.svg" alt="" />
            <button className="units-dropdown-meniu" onClick={e =>{if(e.target.className != 'meniu'){setmeniu(val => !val ? true : false)}}}>
              <img src="src/assets/images/icon-units.svg" alt="" /> Units <img src="src/assets/images/icon-dropdown.svg" alt="" /> 
           
            </button>
             
        </nav>
        <main className="main">
          <div className={'meniu absolute w-50 h-100 bg-[#272541] top-0 right-0 rounded-[5px] z-1' + (meniu == true ? ' flex flex-col items-start' : ' hidden')}>
                <button className="units" onClick={() => {
                    setremperature('C')
                    setWindSpeed('km/h')
                    setPercipotation('mm')
                }}>Switch to Imperial</button>
                <p className="mesurments">Temperature</p>
                <button className="units" onClick={() => setremperature('C')}>Celsius (C) <img src={temperature == 'C' ? "src/assets/images/icon-checkmark.svg" : ''} alt="" /></button>
                <button className="units" onClick={() => setremperature('F')}>Fahrenheit (F) <img src={temperature == 'F' ?"src/assets/images/icon-checkmark.svg" : ''} alt="" /></button>
                <div></div>
                <p className="mesurments">Wind Speed</p>
                <button className="units" onClick={() => setWindSpeed('km/h')}>km/h <img src={WindSpeed == 'km/h' ? "src/assets/images/icon-checkmark.svg" : ''} alt="" /></button>
                <button className="units" onClick={() => setWindSpeed('mph')}>mph <img src={WindSpeed == 'mph' ? "src/assets/images/icon-checkmark.svg": ''} alt="" /></button>
                <div></div>
                <p className="mesurments">Percipotation</p>
                <button className="units" onClick={() => setPercipotation('mm')}>Millimeters (mm) <img src={Percipotation == 'mm' ? "src/assets/images/icon-checkmark.svg" : ''} alt="" /></button>
                <button className="units" onClick={() => setPercipotation('in')}>Inches (in) <img src={Percipotation == 'in' ?"src/assets/images/icon-checkmark.svg" : ''} alt="" /></button>
              </div>



              <div className="w-full h-fit flex flex-col items-center gap-5">
                <p className="text-white text-[40px] font-[Bricolage Grotesque] font-bold">How's the sky looking today ?</p>
                <div className="h-fit flex gap-5 items-center">
                  <div className="h-fit relative">
                    <input className="input w-100 h-11 rounded-[5px] text-[white] font-[DM Sans] bg-[#272541]" type="text" placeholder="Search for a place..."/>
                    <img src="src/assets/images/icon-search.svg" alt=""  className="absolute top-[30%] left-[3%]"/>
                  </div>
                    <button className="submit-search">Search</button>
                </div>
              </div>


              <div className="mains-main">
                
              </div>
        </main>
        
      </div>
      
    </>
  )
}

export default App
