import { useState } from 'react';
import Card from './Components/Card';

function App() {
 

  return (
    <div className='grid grid-cols-2 gap-6'>
      <Card day="Chest/Tricep"/>
      <Card day="Bacl/Bicep"/>
      <Card day="Leg/Shoulder"/>
      <Card day="Cardio"/>
    </div>
  )
}

export default App
