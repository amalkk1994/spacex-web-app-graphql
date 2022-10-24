import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Launches from "./pages/Launches"
import Missions from "./pages/Missions"
import Ships from "./pages/Ships"
import Container from "./Layouts/Container"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="absolute min-h-screen w-screen">
      <header className="fixed top-0 w-full">
        <NavBar />
      </header>
      <div className="pt-24 sm:pb-24">
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="missions" element={<Missions />} />
            <Route path="ships" element={<Ships />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
