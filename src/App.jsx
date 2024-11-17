import { useState, useEffect } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import CVPreview from './components/CVPreview'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    skills: []
  })
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  useEffect(() => {
    loadExample();
  }, []);

  const loadExample = () => {
    setGeneralInfo({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(123) 456-7890',
      location: 'New York, NY',
      summary: 'Experienced software developer with a passion for creating efficient and scalable applications.',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL']
    })

    setEducation([
      {
        school: 'University of Technology',
        study: 'Bachelor of Science in Computer Science',
        location: 'San Francisco, CA',
        startDate: '2015-09-01',
        endDate: '2019-05-31',
        achievements: 'Dean\'s List, Graduated with Honors, Capstone Project: AI-powered Chatbot'
      },
      {
        school: 'University of Technology',
        study: 'Bachelor of Science in Computer Science',
        location: 'San Francisco, CA',
        startDate: '2015-09-01',
        endDate: '2019-05-31',
        achievements: 'Dean\'s List, Graduated with Honors, Capstone Project: AI-powered Chatbot'
      }
    ])

    setExperience([
      {
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Developer',
        location: 'New York, NY',
        startDate: '2019-06-15',
        endDate: 'Present',
        responsibilities: 'Lead development of web applications, Mentor junior developers, Implement CI/CD pipelines'
      },
      {
        company: 'StartUp Solutions',
        position: 'Junior Developer',
        location: 'San Francisco, CA',
        startDate: '2017-05-01',
        endDate: '2019-05-31',
        responsibilities: 'Developed and maintained company website, Assisted in creating mobile applications, Participated in code reviews'
      }
    ])
  }

  const clearResume = () => {
    setGeneralInfo({
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
      skills: []
    })
    setEducation([])
    setExperience([])
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
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Education education={education} setEducation={setEducation} />
        <Experience experience={experience} setExperience={setExperience} />
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
