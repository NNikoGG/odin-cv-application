/* eslint-disable react/prop-types */
import { useState } from 'react';

function Experience({ experience, setExperience }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
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
    if (editingIndex !== null) {
      setExperience((prevExperience) => {
        const newExperience = [...prevExperience];
        newExperience[editingIndex] = currentJob;
        return newExperience;
      });
    } else {
      setExperience((prevExperience) => [...prevExperience, currentJob]);
    }
    setCurrentJob({
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setCurrentJob(experience[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    setExperience((prevExperience) => prevExperience.filter((_, i) => i !== index));
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
          <button className='edit-button' onClick={() => handleEdit(index)}>Edit</button>
          <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
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
          <button type="submit">{editingIndex !== null ? 'Update' : 'Add'} Job</button>
        </form>
      ) : (
        <button className='edit-button' onClick={() => setIsEditing(true)}>Add New Job</button>
      )}
    </div>
  );
}

export default Experience;
