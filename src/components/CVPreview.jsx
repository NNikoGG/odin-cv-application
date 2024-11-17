/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function CVPreview({ generalInfo, education, experience }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Calculate content for each page
    const pageHeight = 297 - 40; // A4 height minus margins in mm
    const contentElement = document.querySelector('.cv-preview-content');
    if (contentElement) {
      const contentHeight = contentElement.scrollHeight;
      const calculatedPages = Math.ceil(contentHeight / (pageHeight * 3.779528)); // Convert mm to px
      setTotalPages(calculatedPages);
    }
  }, [generalInfo, education, experience]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="cv-preview">
      <div className="cv-preview-page" style={{ transform: `translateY(-${(currentPage - 1) * 100}%)` }}>
        <div className="cv-preview-content">
          <header>
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email} | {generalInfo.phone} | {generalInfo.location}</p>
          </header>
          
          <section className="professional-summary">
            <h2>Professional Summary</h2>
            <p>{generalInfo.summary}</p>
          </section>
          
          <section className="skills">
            <h2>Skills</h2>
            <ul>
              {generalInfo.skills && generalInfo.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
          
          <section className="experience">
            <h2>Work Experience</h2>
            {Array.isArray(experience) ? (
              experience.map((job, index) => (
                <div key={index} className="job">
                  <div className="job-header">
                    <span>{job.company}, {job.location}</span>
                    <span>{job.startDate} - {job.endDate}</span>
                  </div>
                  <p className="job-title">{job.position}</p>
                  <ul>
                    {job.responsibilities.split(',').map((resp, idx) => (
                      <li key={idx}>{resp.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="job">
                <div className="job-header">
                  <span>{experience.company}, {experience.location}</span>
                  <span>{experience.startDate} - {experience.endDate}</span>
                </div>
                <p className="job-title">{experience.position}</p>
                <ul>
                  {experience.responsibilities.split(',').map((resp, idx) => (
                    <li key={idx}>{resp.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
          
          <section className="education">
            <h2>Education</h2>
            {Array.isArray(education) ? (
              education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <span>{edu.school}, {edu.location}</span>
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p>{edu.study}</p>
                  <ul>
                    {edu.achievements.split(',').map((achievement, idx) => (
                      <li key={idx}>{achievement.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="education-item">
                <div className="education-header">
                  <span>{education.school}, {education.location}</span>
                  <span>{education.startDate} - {education.endDate}</span>
                </div>
                <p>{education.study}</p>
                <ul>
                  {education.achievements.split(',').map((achievement, idx) => (
                    <li key={idx}>{achievement.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default CVPreview;
