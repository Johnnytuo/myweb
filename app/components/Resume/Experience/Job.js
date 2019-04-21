import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h3><a href={data.link}>{data.company}</a></h3>
      <p className="daterange"> {data.position},  {data.daterange}</p>
    </header>
    {/* {data.projects.map(project =>(
        <ul key={project.name}>{project.name}</ul>
        {project.points.map(function(point) =>(
          return 
          <li key={point}>{point}</li>
        )}
    ))} */}
    <ul className="points" >
    <h6> {data.projects}</h6>
      {data.points.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    projects: PropTypes.map.isRequired,
    // points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Job;
