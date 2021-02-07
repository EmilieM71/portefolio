import React from 'react';
import PartTitle from '../components/PartTitle';
import style from '../asset/css/Training.module.css';
import WCS from '../asset/images/WildCodeSchool.png';
import ORTEC from '../asset/images/ortec.jpg';
import Mines from '../asset/images/Mines.jpg';

function Trainning() {
  return (
    <section className={style.pagesection} id="about">
      <div className="container">
        <div className="text-center">
          <PartTitle title="Mon Parcours" />
        </div>
        <div className="row">
          <div className="col mb-4">
            <h4 className="fw-bold text-decoration-underline">FORMATION</h4>
          </div>
          <div className="col mb-4">
            <h4 className="fw-bold text-decoration-underline">
              EXPERIENCES PROFESSIONNEL
            </h4>
          </div>
        </div>
        <ul className={style.timeline}>
          <li>
            <div className={style.timelineImage}>
              <img className="rounded-circle img-fluid" src={WCS} alt="" />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>09-2020 - 02-2021</h4>
                <h4 className={style.subheading}>WILD CODE SCHOOL</h4>
                <h4 className={style.subheading}>Développeuse web</h4>
              </div>
              <div className={style.timelineBody}>
                <p className={style.textMuted}>
                  Formation développeur web intensive de 5 mois : création de
                  sites internet interactifs qui utilisent les technologies
                  HTML, CSS, Javascript, React/Node JS, ainsi que l&apos;UX
                  design, le versionning avec Git, et des méthodes de gestion de
                  projet Scrum, Agile.
                </p>

                <p className={style.textMuted}>
                  Les compétences sont acquises par la pratique de projets
                  clients.
                </p>
              </div>
            </div>
          </li>
          <li className={style.timelineInverted}>
            <div className={style.timelineImage}>
              <img className="rounded-circle img-fluid" src={ORTEC} alt="" />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>11-2011 - 12-2018</h4>
                <h4 className={style.subheading}>ORTEC ENVIRONNEMENT</h4>
                <h4 className={style.subheading}>Coordinnatrice de contrat</h4>
              </div>
              <div className={style.timelineBody}>
                <p className={style.textMuted}>
                  ✓ Gérer un budget, suivre la rentabilité des affaires
                  confiées.
                </p>
                <p className={style.textMuted}>
                  ✓ Planifier les interventions client en fonction des moyens
                  disponible (SAP)
                </p>
                <p className={style.textMuted}>
                  ✓ Analyser les besoins clients, élaboration de mode opératoire
                </p>
                <p className={style.textMuted}>
                  ✓ Manager une équipe et gestion les intérimaires
                </p>
                <p className={style.textMuted}>
                  ✓ Animer une formation / accueillir les nouveaux arrivants
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className={style.timelineImage}>
              <img className="rounded-circle img-fluid" src={Mines} alt="" />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>09-2011 - 06-2013</h4>
                <h4 className={style.subheading}>
                  Ecole des Mines de St-Etienne (ISTP)
                </h4>
                <h4 className={style.subheading}>Ingénieur génie industriel</h4>
              </div>
              <div className={style.timelineBody}>
                <p className={style.textMuted}>
                  Formation en alternance réalisée avec Ortec Environnement. Au
                  programme : anglais, communication et expression, management
                  des ressources humaines, gestion d’entreprise, méthodes et
                  outils, sciences et techniques des produits et procédés
                  (électricité, mécanique, thermodynamique, régulation…),
                  conception, industrialisation et gestion de systèmes de
                  production, excellence opérationnelle, approche globale de la
                  performance et conduite de projet.
                </p>
              </div>
            </div>
          </li>
          <li className={style.timelineInverted}>
            <div className={style.timelineImage}>
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt=""
              />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>July 2014</h4>
                <h4 className={style.subheading}>Phase Two Expansion</h4>
              </div>
              <div className={style.timelineBody}>
                <p className={style.textMuted}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className={style.timelineInverted}>
            <div className={style.timelineImage}>
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Trainning;
