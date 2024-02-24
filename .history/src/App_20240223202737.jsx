import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';

function App() {
 

  return (
    <>
      <div className='flex justify-center items-center h-screen gap-5'>
      <BrowserRouter>
      <Routes>
      <Card day="Chest-Tricep"/>
      <Card day="Back-Bicep"/>
      <Card day="Leg-Shoulder"/>
      <Card day="Cardio"/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
