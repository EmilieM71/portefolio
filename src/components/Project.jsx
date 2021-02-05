import React from 'react';
import PropTypes from 'prop-types';
import style from '../asset/css/Project.module.css';

function Project(props) {
  const { name, description, skills, img, github } = props;
  return (
    <div className="project">
      <div className="row m-2">
        <div className="col">
          <ul className={style.tags}>
            {skills.map((skill) => (
              <li className={style.tag} key={skill.id}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className={style.card}>
            <div className="card-header">
              <h3 className="card-title">{name}</h3>
            </div>
            <div className="card">
              <div className={style.conteneur}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="270"
                  height="270"
                  fill="currentColor"
                  className={`bi bi-laptop  ${style.front}`}
                  viewBox="0 0 16 16"
                  z-index="0"
                >
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
                <img
                  src={img}
                  className={`card-img-top ${style.cardImg}`}
                  alt="..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  fill="currentColor"
                  className={`bi bi-phone  ${style.mobile}`}
                  viewBox="0 0 16 16"
                  z-index="4"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
            </div>

            <div className="card-body">
              <a href={github} className="btn btn-primary">
                <span className="fa fa-github"> </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
