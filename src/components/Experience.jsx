import { useState } from 'react';

function Experience({ setExperience }) {
  const [isEditing, setIsEditing] = useState(false);
  const [job, setJob] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperience(job);
    setIsEditing(false);
  };

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <input
            type="text"
            name="position"
            value={job.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            type="date"
            name="startDate"
            value={job.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={job.endDate}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            value={job.responsibilities}
            onChange={handleChange}
            placeholder="Main Responsibilities"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {job.company}</p>
          <p>Position: {job.position}</p>
          <p>Duration: {job.startDate} - {job.endDate}</p>
          <p>Responsibilities: {job.responsibilities}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
