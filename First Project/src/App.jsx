import {useState} from "react"
import React from "react"

//images{
  //icons
  import dropdownIcon from './assets/images/icon-dropdown.svg'
  import check from './assets/images/icon-checkmark.svg'
  import search from './assets/images/icon-search.svg'
  import units from './assets/images/icon-units.svg'
  import logo from './assets/images/logo.svg'
  //images
  import dizzle from './assets/images/icon-drizzle.webp'
  import fog from './assets/images/icon-fog.webp'
  import clouds from './assets/images/icon-partly-cloudy.webp'
  import rain from './assets/images/icon-rain.webp'
  import snow from './assets/images/icon-snow.webp'
  import thunderstorm from './assets/images/icon-storm.webp'
  import sun from './assets/images/icon-sunny.webp'
//}



function App() {
  let [meniu,setmeniu] = useState(false)
  let [temperature,setremperature] = useState('C')
  let [WindSpeed,setWindSpeed] = useState('km/h')
  let [Percipotation,setPercipotation] = useState('mm')
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("Tuesday");
  let [hourly1,setHourl1] = useState([])
  let [valinput,setinput] = useState('')
  let [weather,setweather] = useState('')
  let date = new Date()
  let weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  let weathers = ['Drizzle','Fog','Clouds','Rain','Snow','Thunderstorm','Clear']
  let weathers1 = [dizzle,fog,clouds,rain,snow,thunderstorm,sun]
  let [image,setimage ]= useState('')
  let [data2,setData2] = useState()
  let [daily,setDaily] = useState([])
  let API = async () => {

    if (valinput == '') {return;}
      let url = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=fe8f53162d39413ba73135544252812&q=${valinput}&num_of_days=7&tp=3&format=JSON`
      let api = await fetch(url)
      let data = await api.json()
      setData2(data)
      hourlyCast(data)
      setweather(data)
      dailyCast(data)
     
  
  }
  let imageapi = async () => {
    if (valinput == '') {return;}
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${valinput}&appid=839d7ddc348c431160fc6ae9388bbb0e&units=metric`
    let api = await fetch(url)
    let data = await api.json()
    selectimage(data)
  }
  
  let selectimage = (image1) => {
    if (valinput == '') {return;}
   if(!weathers.includes(image1.weather[0].main) ){
                          if(image1.weather[0].main =='Mist' || image1.weather[0].main =='Smoke' || image1.weather[0].main =='Haze' || image1.weather[0].main =='Dust' || image1.weather[0].main =='Ash' ||image1.weather[0].main =='Squall' ){
                            setimage(fog)
                          }else {
                            setimage(sun)
                          }
                          
                        }
                        else{
                          for(let i = 0;i < weathers.length;i++){
                            if(image1.weather[0].main == weathers[i]){
                              setimage(weathers1[i])
                              
                            }
                            
                            
                            
                          }
                        }
  }
  
  let hourlyCast = data => {
    if(data.data.error) return;
    
    
    setHourl1([])
    for(let i of data.data.weather){
      if(weekdays[(new Date(i.date)).getDay()] == day){
        for(let e of i.hourly){
          setHourl1(val => [
            ...val,
            {
              time:e.time / 100 + ':00',
              tempC1:e.tempC + '°C',
              tempF1:e.tempF +'°F'
              
            }

          ])
        }
        
      }
    }
  }
  let dailyCast = data => {
    if(data.data.error) return;
    setDaily([])
    for(let i = 0 ;i< data.data.weather.length ;i++){
      
        
          setDaily(val => [
            ...val,
            {
              day:weekdays[(new Date(data.data.weather[i].date)).getDay()].slice(0,3),
              tempC1:data.data.weather[i].avgtempC + '°C',
              tempF1:data.data.weather[i].avgtempF +'°F',
              image:weathers1[i]
            }

          ])
        
        
      
    }
  }
  return (
    <>
      <div className="container">
        <nav className="navigation">
          
            <img src={logo} className="max-[520px]: w-40" alt="" />
            <button className="units-dropdown-meniu" onClick={e =>{if(e.target.className != 'meniu'){setmeniu(val => !val ? true : false)}}}>
              <img src={units} alt="" /> Units <img src={dropdownIcon} alt="" /> 
           
            </button>
             
        </nav>
        <main className="main ">
          <div className={'meniu absolute w-50 h-100 bg-[#272541] top-0 right-0 rounded-[5px] z-1' + (meniu == true ? ' flex flex-col items-start' : ' hidden')}>
                <button className="units" onClick={() => {
                    setremperature('C')
                    setWindSpeed('km/h')
                    setPercipotation('mm')
                }}>Switch to Imperial</button>
                <p className="mesurments">Temperature</p>
                <button className="units" onClick={() => {
                  setremperature('C')
                  API()
                  }}>Celsius (C) <img src={temperature == 'C' ? check : null} alt="" /></button>
                <button className="units" onClick={() => {
                  setremperature('F')
                  API()
                }}>Fahrenheit (F) <img src={temperature == 'F' ? check : null} alt="" /></button>
                <div></div>
                <p className="mesurments">Wind Speed</p>
                <button className="units" onClick={() => setWindSpeed('km/h')}>km/h <img src={WindSpeed == 'km/h' ? check : null} alt="" /></button>
                <button className="units" onClick={() => setWindSpeed('mph')}>mph <img src={WindSpeed == 'mph' ? check: null} alt="" /></button>
                <div></div>
                <p className="mesurments">Percipotation</p>
                <button className="units" onClick={() => setPercipotation('mm')}>Millimeters (mm) <img src={Percipotation == 'mm' ? check : null} alt="" /></button>
                <button className="units" onClick={() => setPercipotation('in')}>Inches (in) <img src={Percipotation == 'in' ?check : null} alt="" /></button>
              </div>



              <div className="w-full h-fit flex flex-col items-center gap-5">
                <p className="text-white text-[40px] font-[Bricolage Grotesque] font-bold max-[600px]:text-[20px]">How's the sky looking today ?</p>
                <div className="h-fit flex gap-5 items-center max-[520px]:flex-col">
                  <div className="h-fit relative">
                    <input className="input w-100 h-11 rounded-[5px] text-[white] font-[DM Sans] bg-[#272541] max-[520px]:w-70" type="text" value={valinput} placeholder="Search for a place..."  onInput={e => {
                      setinput(e.target.value)
                    }}/>
                    <img src={search} alt=""  className="absolute top-[30%] left-[3%]"/>
                  </div>
                    <button className="submit-search" onClick={() => {
                        setinput('')
                        imageapi()
                        API()
                        
                        
                    }}>Search</button>
                </div>
              </div>


              {weather && weather.data.error ?
                <div className="ApiError  h-100 flex items-center justify-center ">
                  
                  <p className="text-[#272541] text-[40px] font-[Bricolage Grotesque] font-bold">Wrong City or Error (Try again)</p>
                 
                </div>: null}




              {weather && !weather.data.error ? <div className="mains-main">
                <div className="weather">
                  
                    <div className="cont w-1/2 h-fit flex flex-col gap-1 max-[1200px]:w-full">
                      <p className="text-white text-[22px] font-[Bricolage Grotesque] font-bold">{weather != '' ? weather.data.request[0].query: ''}</p>
                      <p className="text-[hsl(240,6%,70%)] text-[20px] font-[Bricolage Grotesque]">{weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
                    </div>

                    <div className="w-1/2 h-fit flex items-center justify-center max-[1200px]:w-full">

                      <img src={image} alt="" className="w-40"/>
                      <p className="text-white text-[60px] font-[Bricolage Grotesque] font-bold max-[520px]:text-[40px]">
                          {temperature == 'F' ? weather.data.current_condition[0].temp_F + '°F': weather.data.current_condition[0].temp_C +'°C'}
</p>

                    </div>
                  
                </div>
                

                <div className="descriptions">
                  <div className="description-div">
                    <p className='div-h'>Feels Like</p>
                    <p className='div-p'>{temperature == 'F' ?weather.data.current_condition[0].FeelsLikeF +'°F' : weather.data.current_condition[0].FeelsLikeC + '°C'}</p>
                  </div>

                  <div className="description-div">
                    <p className='div-h'>Humidity</p>
                    <p className='div-p'>{weather.data.current_condition[0].humidity}%</p>
                  </div>

                  <div className="description-div">
                    <p className='div-h'>Wind Speed</p>
                    <p className='div-p'>{WindSpeed == 'km/h' ? weather.data.current_condition[0].windspeedKmph + 'km/h' : weather.data.current_condition[0].windspeedMiles + 'mph'}</p>
                  </div>

                  <div className="description-div">
                    <p className='div-h'>Precipitation</p>
                    <p className='div-p'>0{Percipotation == 'in' ? 'in' : 'mm'}</p>
                  </div>
                </div>

    

          {/* LEFT SIDE */}
           

            
            <section className="daily">
              <div className="daily-header">
                <h3 className="hh"  >Daily forecast</h3>
                
              </div>

              <div className="daily-cards">
                {daily.map((val,i) => (
                  <div className="day-card" key={i}>
                    <span className="day" >{val.day}</span>
                    <img className="icon" src={val.image}/> 
                    <span className="temps">
                      <span className="temp-placeholder">{temperature == 'F' ? val.tempF1 : val.tempC1}</span>
                    
                    </span>
                  </div>
                ))}
              </div>
            </section>
           

          {/* RIGHT SIDE */}
          <aside className="hourly">
            <div className="hourly-head">
              <h3 className="hh">Hourly forecast</h3>

              <div className="dropdown-wrapper">
                <div
                  className="dropdown"
                  onClick={() => setOpen(!open)}
                >
                  {day} 
                  <img src={dropdownIcon} alt="" />
                </div>

                {open && (
                  <div className="dropdown-menu">
                    {weekdays.map(
                      (d) => (
                        <div
                          key={d}
                          className="dropdown-item"
                          onClick={() => {
                            setDay(d);
                            setOpen(false);
                            hourlyCast(data2)
                          }}
                        >
                          {d}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {hourly1.map((val,i) => (
              <div className="hour" key={i}>
                <span>☁️</span>
                <span className='hh'>{val.time}</span>
                
                <span className="temp-placeholder">{temperature == 'F' ? val.tempF1 : val.tempC1}</span>
              </div>
            ))}
          </aside>

       
              </div>
              
              
              : null}
        </main>
        
        
      </div>
        
    </>
  )
}

export default App
