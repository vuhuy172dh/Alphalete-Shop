import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext } from 'react'
import { ThemeContext } from './theme/themes.js'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="app" data-theme={theme}>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
