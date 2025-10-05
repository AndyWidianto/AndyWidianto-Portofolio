import './App.css'
import { Route, Routes } from 'react-router'
import Portofolio from './Portofolio'
import Percobaan from './percobaan'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Portofolio />} />
      <Route path="/percobaan" element={<Percobaan />} />
    </Routes>
    </>
  )
}

export default App
