import { useContext, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/idex'
import Private from './pages/Private'
import './App.css'
import { RequireAuth } from './contexts/Auth/RequireAuth'
import { AuthContext } from './contexts/Auth/AuthContext'
function App() {
  const navigate = useNavigate()
  const auth  = useContext(AuthContext)
  const handleLogout = async () => {
    await auth.signout()
    window.location.href = window.location.href
    navigate("/")
  }
  return (
    <div>
      <header>
        <h1>Header do site</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/private">Página Privada</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/private" element={
        <RequireAuth>
          <Private />
        </RequireAuth>
      } />

      </Routes>
    </div>
  )
}

export default App
