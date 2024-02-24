import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';
import Chest from './Components/Chest/Chest';
import Back from './Components/Back/Back';
import Leg from './Components/Leg'
import Cardio from './Components/Cardio';

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='flex justify-center items-center h-screen gap-5'>
            <Card day="Chest-Tricep"/>
            <Card day="Back-Bicep"/>
            <Card day="Leg-Shoulder"/>
            <Card day="Cardio"/>
          </div>
        } />
        
        <Route path="/chest-tricep" element={<Chest/>} />
        <Route path="/back-bicep" element={<Back/>} />  
        <Route path="/leg-shoulder" element={<Leg/>} />
        <Route path="/cardio" element={<Cardio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
