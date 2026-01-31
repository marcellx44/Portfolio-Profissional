import './App.css'
import { NavBar } from "./components/NavBar/index.jsx";
import { Home } from "./components/Home/index.jsx";
import { About } from "./components/About/index.jsx";

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
    </>
  )
}

export default App
