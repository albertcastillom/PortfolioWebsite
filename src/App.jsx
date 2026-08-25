import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/about"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"


function App() {
  
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={< About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='resume' element={<Resume />} />
      <Route path='projects' element={<Projects />} />
    </Routes> 
    </>
  )
}

export default App
