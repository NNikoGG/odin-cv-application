import { useState } from 'react';

function Education({ setEducation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [education, setEducationInfo] = useState({
    school: '',
    study: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation(education);
    setIsEditing(false);
  };

  return (
    <div className="education">
      <h2>Education</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="school"
            value={education.school}
            onChange={handleChange}
            placeholder="School Name"
          />
          <input
            type="text"
            name="study"
            value={education.study}
            onChange={handleChange}
            placeholder="Title of Study"
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Study: {education.study}</p>
          <p>Date: {education.date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
