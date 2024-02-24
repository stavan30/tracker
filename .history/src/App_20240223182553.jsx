import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card';

function App() {
 

  return (
    <>
    <div className='flex justify-center items-center h-screen gap-5'>
      <Route path='/chest-tricep'><Card day="Chest-Tricep"/></Route>
      <Card day="Back-Bicep"/>
      <Card day="Leg-Shoulder"/>
      <Card day="Cardio"/>
    </div>
    </>
  )
}

export default App
