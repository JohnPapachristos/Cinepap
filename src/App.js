import React from 'react'
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import { Footer, Header } from './components'
import ScrollButton from './components/ScrollButton'

export const App = () => {
  return (
    < >
      <Header></Header>
      <AllRoutes />
      <Footer></Footer>
      <ScrollButton></ScrollButton>
    </>
  )
}


export default App;
