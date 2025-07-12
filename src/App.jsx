import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
      {/* <Footer/> */}
    </>
  )
}

export default App
