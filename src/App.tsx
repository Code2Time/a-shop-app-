import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import PageNotFound from './pages/pagenotfound/PageNotFound'


function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
  )
}

export default App
