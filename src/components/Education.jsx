/* eslint-disable react/prop-types */
import { useState } from 'react';

function Education({ education, setEducation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
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
    if (editingIndex !== null) {
      setEducation((prevEducation) => {
        const newEducation = [...prevEducation];
        newEducation[editingIndex] = currentEducation;
        return newEducation;
      });
    } else {
      setEducation((prevEducation) => [...prevEducation, currentEducation]);
    }
    setCurrentEducation({
      school: '',
      study: '',
      location: '',
      startDate: '',
      endDate: '',
      achievements: '',
    });
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setCurrentEducation(education[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleRemove = (index) => {
    setEducation((prevEducation) => prevEducation.filter((_, i) => i !== index));
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          {editingIndex === index ? (
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
              <button type="submit">Update Education</button>
              <button type="button" onClick={() => {
                setEditingIndex(null);
                setIsEditing(false);
              }}>Cancel</button>
            </form>
          ) : (
            <>
              <p>School: {edu.school}</p>
              <p>Study: {edu.study}</p>
              <p>Location: {edu.location}</p>
              <p>Duration: {edu.startDate} - {edu.endDate}</p>
              <p>Achievements: {edu.achievements}</p>
              <button className='edit-button' onClick={() => handleEdit(index)}>Edit</button>
              <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
            </>
          )}
        </div>
      ))}
      {isEditing && editingIndex === null ? (
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
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <button className='edit-button' onClick={() => setIsEditing(true)}>Add New Education</button>
      )}
    </div>
  );
}

export default Education;
