import React from 'react'
import qr from './assets/image-qr-code.png'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='card'>
        <img src={qr} alt="QR code" />

        <h2>Improve your front-end skills by building projects</h2>

        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">Frontend Mentor</a>.<br />
          Coded by <a href="https://www.frontendmentor.io/profile/ntjnh" target="_blank">Nate</a>.
        </div>
      </div>
    </div>
  )
}

export default App
