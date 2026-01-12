import { use } from "react"
import {useState} from "react"

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
  let images = ['icon-drizzle.webp','icon-fog.webp','icon-partly-cloudy.webp','icon-rain.webp','icon-snow.webp','icon-storm.webp','icon-sunny.webp']
  let weathers = ['Drizzle','Fog','Clouds','Rain','Snow','Thunderstorm','Clear']
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
                            setimage('icon-fog.webp')
                          }else {
                            setimage('icon-sunny.webp')
                          }
                          
                        }
                        else{
                          for(let i = 0;i < weathers.length;i++){
                            if(image1.weather[0].main == weathers[i]){
                              setimage(images[i])
                              
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
    for(let i of data.data.weather){
      
        
          setDaily(val => [
            ...val,
            {
              day:weekdays[(new Date(i.date)).getDay()].slice(0,3),
              tempC1:i.avgtempC + '°C',
              tempF1:i.avgtempF +'°F'
            }

          ])
        
        
      
    }
  }
  return (
    <>
      <div className="container">
        <nav className="navigation">
          
            <img src="src/assets/images/logo.svg" alt="" />
            <button className="units-dropdown-meniu" onClick={e =>{if(e.target.className != 'meniu'){setmeniu(val => !val ? true : false)}}}>
              <img src="src/assets/images/icon-units.svg" alt="" /> Units <img src="src/assets/images/icon-dropdown.svg" alt="" /> 
           
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
                  }}>Celsius (C) <img src={temperature == 'C' ? "src/assets/images/icon-checkmark.svg" : null} alt="" /></button>
                <button className="units" onClick={() => {
                  setremperature('F')
                  API()
                }}>Fahrenheit (F) <img src={temperature == 'F' ?"src/assets/images/icon-checkmark.svg" : null} alt="" /></button>
                <div></div>
                <p className="mesurments">Wind Speed</p>
                <button className="units" onClick={() => setWindSpeed('km/h')}>km/h <img src={WindSpeed == 'km/h' ? "src/assets/images/icon-checkmark.svg" : null} alt="" /></button>
                <button className="units" onClick={() => setWindSpeed('mph')}>mph <img src={WindSpeed == 'mph' ? "src/assets/images/icon-checkmark.svg": null} alt="" /></button>
                <div></div>
                <p className="mesurments">Percipotation</p>
                <button className="units" onClick={() => setPercipotation('mm')}>Millimeters (mm) <img src={Percipotation == 'mm' ? "src/assets/images/icon-checkmark.svg" : null} alt="" /></button>
                <button className="units" onClick={() => setPercipotation('in')}>Inches (in) <img src={Percipotation == 'in' ?"src/assets/images/icon-checkmark.svg" : null} alt="" /></button>
              </div>



              <div className="w-full h-fit flex flex-col items-center gap-5">
                <p className="text-white text-[40px] font-[Bricolage Grotesque] font-bold">How's the sky looking today ?</p>
                <div className="h-fit flex gap-5 items-center">
                  <div className="h-fit relative">
                    <input className="input w-100 h-11 rounded-[5px] text-[white] font-[DM Sans] bg-[#272541]" type="text" value={valinput} placeholder="Search for a place..."  onInput={e => {
                      setinput(e.target.value)
                    }}/>
                    <img src="src/assets/images/icon-search.svg" alt=""  className="absolute top-[30%] left-[3%]"/>
                  </div>
                    <button className="submit-search" onClick={() => {
                        setinput('')
                        imageapi()
                        API()
                        console.log(weather && weather.data.error );
                        
                    }}>Search</button>
                </div>
              </div>


              {weather && weather.data.error ?
                <div className="ApiError  h-100 flex items-center justify-center ">
                  
                  <p className="text-[#272541] text-[40px] font-[Bricolage Grotesque] font-bold">Wrong City or Error (Try again)</p>
                 
                </div>: null}




              {weather && !weather.data.error ? <div className="mains-main">
                <div className="weather">
                  
                    <div className="w-1/2 h-fit flex flex-col gap-1">
                      <p className="text-white text-[22px] font-[Bricolage Grotesque] font-bold">{weather != '' ? weather.data.request[0].query: ''}</p>
                      <p className="text-[hsl(240,6%,70%)] text-[20px] font-[Bricolage Grotesque]">{weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
                    </div>

                    <div className="w-1/2 h-fit flex items-center justify-center">

                      <img src={'src/assets/images/' + image} alt="" className="w-40"/>
                      <p className="text-white text-[60px] font-[Bricolage Grotesque] font-bold">
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
                    <span className="day">{val.day}</span>
                    <span className="icon">☁️</span>
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
                  <img src="src/assets/images/icon-dropdown.svg" alt="" />
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
