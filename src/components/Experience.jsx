/* eslint-disable react/prop-types */
import { useState } from 'react';

function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentJob, setCurrentJob] = useState({
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperience((prevExperience) => [...prevExperience, currentJob]);
    setCurrentJob({
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    });
    setIsEditing(false);
  };

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <p>Company: {job.company}</p>
          <p>Position: {job.position}</p>
          <p>Location: {job.location}</p>
          <p>Duration: {job.startDate} - {job.endDate}</p>
          <p>Responsibilities: {job.responsibilities}</p>
        </div>
      ))}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={currentJob.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="position"
            value={currentJob.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            type="text"
            name="location"
            value={currentJob.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <input
            type="date"
            name="startDate"
            value={currentJob.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={currentJob.endDate}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            value={currentJob.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities (separate with commas)"
          />
          <button type="submit">Add Job</button>
        </form>
      ) : (
        <button onClick={() => setIsEditing(true)}>Add New Job</button>
      )}
    </div>
  );
}

export default Experience;
