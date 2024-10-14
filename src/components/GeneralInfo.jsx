/* eslint-disable react/prop-types */
import { useState } from 'react';

function GeneralInfo({ generalInfo, setGeneralInfo }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      skills: skills,
    }));
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            type="text"
            name="location"
            value={generalInfo.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <textarea
            name="summary"
            value={generalInfo.summary}
            onChange={handleChange}
            placeholder="Professional Summary"
          />
          <input
            type="text"
            name="skills"
            value={generalInfo.skills.join(', ')}
            onChange={handleSkillsChange}
            placeholder="Skills (comma-separated)"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <p>Location: {generalInfo.location}</p>
          <p>Summary: {generalInfo.summary}</p>
          <p>Skills: {generalInfo.skills.join(', ')}</p>
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;