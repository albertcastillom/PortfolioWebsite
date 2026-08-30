import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"

import styles from "./App.module.css"

function App() {
  const { pathname } = useLocation()
  const usesGridBackground = pathname === "/" || pathname === "/projects"

  return (
    <div className={usesGridBackground ? styles.gridShell : undefined}>
    <Navbar onGridBackground={usesGridBackground} />

    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={< About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
    </Routes> 
    </div>
  )
}

export default App
