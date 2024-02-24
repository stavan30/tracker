import 
import Card from './Components/Card';

function App() {
 

  return (
    <div className='flex justify-center items-center h-screen gap-5'>
      <Card day="Chest-Tricep"/>
      <Card day="Back-Bicep"/>
      <Card day="Leg-Shoulder"/>
      <Card day="Cardio"/>
    </div>
  )
}

export default App
