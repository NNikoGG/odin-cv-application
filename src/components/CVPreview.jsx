/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function CVPreview({ generalInfo, education, experience }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageHeight = 257 * 4.25; // A4 height minus padding in pixels

  useEffect(() => {
    const calculatePages = () => {
      const contentElement = document.querySelector('.cv-preview-content');
      if (!contentElement) return;

      const contentHeight = contentElement.scrollHeight;
      const calculatedPages = Math.max(1, Math.ceil(contentHeight / pageHeight));
      setTotalPages(calculatedPages);
    };

    const timer = setTimeout(calculatePages, 100);
    return () => clearTimeout(timer);
  }, [generalInfo, education, experience]);

  return (
    <div className="cv-preview">
      <div className="cv-preview-window" style={{ height: `${pageHeight}px` }}>
        <div 
          className="cv-preview-content"
          style={{
            transform: `translateY(-${(currentPage - 1) * pageHeight}px)`,
            transition: 'transform 0.3s ease-in-out'
          }}
        >
          <header>
            <h1>{generalInfo.name}</h1>
            <p>{generalInfo.email} | {generalInfo.phone} | {generalInfo.location}</p>
          </header>
          
          <section className="professional-summary">
            <h2>Professional Summary</h2>
            <p>{generalInfo.summary}</p>
          </section>
          
          <section className="experience">
            <h2>Work Experience</h2>
            {experience.map((job, index) => (
              <div key={index} className="job">
                <div className="job-header">
                  <span>{job.company}, {job.location}</span>
                  <span>{job.startDate} - {job.endDate}</span>
                </div>
                <div className="job-title">{job.position}</div>
                <ul>
                  {job.responsibilities.split(',').map((resp, idx) => (
                    <li key={idx}>{resp.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          
          <section className="education">
            <h2>Education</h2>
            {Array.isArray(education) && education.map((edu, index) => (
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
            ))}
          </section>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
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
