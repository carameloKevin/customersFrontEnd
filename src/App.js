import React, {useEffect, useState} from "react"
import Public from './Routes/Public'
import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {

  const [backendData, setBackendData] = useState([{}])


  return (
  
  <div className="App">
    <Router>
      <Public />
      <div>Footer</div>
    </Router>
  </div>
  );
}

export default App;
