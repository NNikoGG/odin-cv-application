function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <h1>{generalInfo.name}</h1>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>

      <h2>Education</h2>
      <p>{education.school}</p>
      <p>{education.study}</p>
      <p>{education.date}</p>

      <h2>Experience</h2>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{experience.responsibilities}</p>
      <p>{experience.startDate} - {experience.endDate}</p>
    </div>
  );
}

export default CVPreview;
