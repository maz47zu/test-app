import { useState} from 'react'

export default function FirstLesson() {
const [letters, setLetters] = useState<string>("Here will appear 'Hello react!' when you'll push button below.")
  return (
    <div>
      <div className="App">
        
             <div className="App-header">
        
               <p>{letters}</p>
               <button className='button-click' onClick={() => setLetters('Hello react!')}>Show 'Hello react!'</button>
               <a
                 className="App-link"
                 href="https://github.com/maz47zu/test-app"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Link to test-app repository
               </a>
             </div>
           </div>
    </div>
  )
}
