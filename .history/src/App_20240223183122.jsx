import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
      <div className='flex justify-center items-center h-screen gap-5'>
      <Card day="Chest-Tricep"/>
      <Card day="Back-Bicep"/>
      <Card day="Leg-Shoulder"/>
      <Card day="Cardio"/>
      </div>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App