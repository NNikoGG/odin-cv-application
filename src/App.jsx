import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import CVPreview from './components/CVPreview'

function App() {
  const [generalInfo, setGeneralInfo] = useState({})
  const [education, setEducation] = useState({})
  const [experience, setExperience] = useState({})

  const loadExample = () => {
    // Implement example data loading
  }

  const clearResume = () => {
    setGeneralInfo({})
    setEducation({})
    setExperience({})
  }

  const saveAsPDF = () => {
    // Implement PDF saving functionality
  }

  return (
    <div className="cv-application">
      <div className="edit-section">
        <div className="top-buttons">
          <button onClick={loadExample}>Load Example</button>
          <button onClick={clearResume}>Clear Resume</button>
          <button onClick={saveAsPDF}>Save as PDF</button>
        </div>
        <GeneralInfo setGeneralInfo={setGeneralInfo} />
        <Education setEducation={setEducation} />
        <Experience setExperience={setExperience} />
      </div>
      <div className="preview-section">
        <CVPreview 
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  )
}

export default App
