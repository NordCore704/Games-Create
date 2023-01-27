import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css' 
import MainComp from './About'
import Navbar from './Navbar'
import Footer from './footer'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const journalContent = data.map((content) => {
     return(
      <MainComp 
         key={content.id}
         item={content}
      />
     )
  })
  return (
    <div className="App">
      <Navbar />
      {journalContent}
      <Footer />
    </div>
  )
}

export default App