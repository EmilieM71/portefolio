import React from 'react';
import Project from './Project';

const listProject = [
  {
    name: 'wejob',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos in molestias numquam vel assumenda quam eius saepe aut, consequuntur cumque architecto nostrum est placeat quasi enim excepturi. Accusamus, sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos in molestias numquam vel assumenda quam eius saepe aut, consequuntur cumque architecto nostrum est placeat quasi enim excepturi. Accusamus, sit?',
    skill: [
      { id: 7, name: 'JS' },
      { id: 8, name: 'REACT' },
      { id: 9, name: 'Node' },
      { id: 10, name: 'Express' },
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'Bootsrap' },
      { id: 4, name: 'Git' },
      { id: 5, name: 'Scrum' },
    ],
    img: 'https://via.placeholder.com/150x100',
    gitHub: '',
  },
  {
    name: 'Je suis ton FILM',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos in molestias numquam vel assumenda quam eius saepe aut, consequuntur cumque architecto nostrum est placeat quasi enim excepturi. Accusamus, sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos in molestias numquam vel assumenda quam eius saepe aut, consequuntur cumque architecto nostrum est placeat quasi enim excepturi. Accusamus, sit?',
    skill: [
      { id: 7, name: 'JS' },
      { id: 8, name: 'REACT' },
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 4, name: 'Git' },
      { id: 5, name: 'Scrum' },
    ],
    img: 'https://via.placeholder.com/150',
    gitHub: '',
  },
];
function ProjectList() {
  return (
    <div className="container">
      {listProject.map((project) => (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          skills={project.skill}
          img={project.img}
          github={project.gitHub}
        />
      ))}
    </div>
  );
}

export default ProjectList;
