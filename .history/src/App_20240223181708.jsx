import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';

function App() {
 

  return (
    <BrowserRouter>
    <div className='flex justify-center items-center h-screen gap-5'>
      <Routes>
      <Card day="Chest-Tricep"/>
      <Card day="Back-Bicep"/>
      <Card day="Leg-Shoulder"/>
      <Card day="Cardio"/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
