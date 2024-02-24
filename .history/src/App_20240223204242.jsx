import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';
import Chest from './Components/Chest';

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
        <Route path="/back-bicep" element={<Card day="Back-Bicep" />} />  
        <Route path="/leg-shoulder" element={<Card day="Leg-Shoulder" />} />
        <Route path="/cardio" element={<Card day="Cardio" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
