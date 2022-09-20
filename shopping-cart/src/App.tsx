import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Donate } from "./pages/Donate"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <div>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </div>
  )
}

export default App
