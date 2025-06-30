import './App.css'
import { Route, Routes } from 'react-router'
import Portofolio from './Portofolio'
import BelanjaQu from './BelanjaQu'
import KesehatanKu from './Kesehatanku'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Portofolio />} />
      <Route path="/belanjaqu" element={<BelanjaQu />} />
      <Route path="/kesehatanku" element={<KesehatanKu />} />
    </Routes>
    </>
  )
}

export default App
