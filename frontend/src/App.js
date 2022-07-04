import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogInPage from './pages/LogInPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useContext, useState } from 'react'
import { ThemeContext } from './theme/themes.js'
import NavDrawer from './components/NavDrawer'

function App() {
  const { theme } = useContext(ThemeContext)
  const [isMenuClicked, setMenuClicked] = useState(false)
  function handleMenuClick() {
    setMenuClicked(!isMenuClicked)
  }

  console.log(isMenuClicked)
  return (
    <div className="app" data-theme={theme}>
      <header>
        <Navbar handleMenuClick={handleMenuClick} />
        <NavDrawer
          isMenuClicked={isMenuClicked}
          handleMenuClick={handleMenuClick}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account/login" element={<LogInPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
