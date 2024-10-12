/* eslint-disable react/prop-types */
import { useState } from 'react';

function Education({ setEducation }) {
  const [educations, setEducations] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    study: '',
    location: '',
    startDate: '',
    endDate: '',
    achievements: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducations((prevEducations) => [...prevEducations, currentEducation]);
    setEducation((prevEducation) => [...prevEducation, currentEducation]);
    setCurrentEducation({
      school: '',
      study: '',
      location: '',
      startDate: '',
      endDate: '',
      achievements: '',
    });
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="school"
          value={currentEducation.school}
          onChange={handleChange}
          placeholder="School Name"
        />
        <input
          type="text"
          name="study"
          value={currentEducation.study}
          onChange={handleChange}
          placeholder="Field of Study"
        />
        <input
          type="text"
          name="location"
          value={currentEducation.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="date"
          name="startDate"
          value={currentEducation.startDate}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={currentEducation.endDate}
          onChange={handleChange}
        />
        <textarea
          name="achievements"
          value={currentEducation.achievements}
          onChange={handleChange}
          placeholder="Achievements (separate with commas)"
        />
        <button type="submit">Add Education</button>
      </form>
      {educations.map((edu, index) => (
        <div key={index}>
          <p>School: {edu.school}</p>
          <p>Study: {edu.study}</p>
          <p>Location: {edu.location}</p>
          <p>Duration: {edu.startDate} - {edu.endDate}</p>
          <p>Achievements: {edu.achievements}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;