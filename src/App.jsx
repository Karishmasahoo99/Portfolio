import React, { useState, useEffect } from 'react'
import { About, Experience, Home, Navbar, Portfolio, SocialLinks, Theme, Contact } from './components'
import { ThemeProvider } from './context/theme';


function App() {
  const [themeMode, setThemeMode]=useState("dark")
  const lightTheme=()=>{
   // console.log("light theme")
    setThemeMode("light");
  }

  const darkTheme=()=>{
    //console.log("dark theme")
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <Theme/>
      <SocialLinks/>
    </ThemeProvider>
  )
}

export default App