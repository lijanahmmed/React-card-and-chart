import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsChart from './components/ResultsChart/ResultsChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'




function App() {

  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      

    </>
  )
}

export default App
