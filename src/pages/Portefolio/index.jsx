import React from 'react';
import ProjectList from '../../components/ProjectList';

function Portefolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <h1 className="title m-5">PORTEFOLIO</h1>
          <div className="border-title mx_auto pb-5"> </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <h2>Filtrer</h2>
        </div>
      </div>
      <div className="row">
        <ProjectList />
      </div>
    </div>
  );
}

export default Portefolio;
