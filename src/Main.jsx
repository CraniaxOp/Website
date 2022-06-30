import React, { useEffect, useState } from 'react'
import About from './components/about/about'
import Header from './components/header/header'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer' 
import Nav from './components/nav/Nav'
import Experiance from './components/experiance/experiance'
import Portfolio from './components/portfolio/portfolio'  
import ReactSwitch from 'react-switch'
import Alerts from './components/alerts/alert'
import './Main.css'
const Main = () => {
  const[theme, setTheme]=useState("light_theme")
 const toggletheme=()=>{
//  theme === 'dark_theme' ? setTheme('light_theme') : setTheme('dark_theme')
if(theme ==="dark_theme")
{
  setTheme("light_theme")
  showAlert("Theme: ","Light Theme Enabled")
}
else{
  setTheme("dark_theme")
  showAlert("Theme: ","Dark Theme Enabled")
}
 }
  useEffect(() => {
    document.body.className=theme;
  },[theme])
const [alert, setAlert] = useState(null)
const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
})
setTimeout(() => {
  setAlert(null)
}, 2000)
}

  return (
    <>
    <div className="toggle">
      {/* <button type="button" onClick={()=> toggletheme()}>Mode</button> */}
      <ReactSwitch onChange={()=> toggletheme()} checked = {theme ==="dark_theme"} className="toggle_switch"/>
      <Alerts alert = {alert}/>
    </div>
        <Header/>
        <Nav/>
        <About/>
        <Experiance/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Main