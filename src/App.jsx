import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home1 from './pages/Home1'
import './App.css'
import Editor1 from './Editor1'
import Home from './Home'
import Editor2 from './pages/Editor2'


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/editor2" element={<Editor2 />} />
        <Route path="/editor1" element={<Editor1/>} />
      </Routes>
    </Router>
  )
}

export default App
