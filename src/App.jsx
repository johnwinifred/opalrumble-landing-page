import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import ErrorPage from "./pages/errorpage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route exact path="*" element={<ErrorPage />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App