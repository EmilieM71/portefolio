import React from 'react';
import PartTitle from '../components/PartTitle';
import style from '../asset/css/Training.module.css';

function Trainning() {
  return (
    <section className={style.pagesection} id="about">
      <div className="container">
        <div className="text-center">
          <PartTitle title="Mon Parcours" />

          <h3 className={`${style.sectionSubheading} text-muted`}>
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <ul className={style.timeline}>
          <li>
            <div className={style.timelineImage}>
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/1.jpg"
                alt=""
              />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>2009-2011</h4>
                <h4 className={style.subheading}>Our Humble Beginnings</h4>
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
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/2.jpg"
                alt=""
              />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>March 2011</h4>
                <h4 className={style.subheading}>An Agency is Born</h4>
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
          <li>
            <div className={style.timelineImage}>
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/3.jpg"
                alt=""
              />
            </div>
            <div className={style.timelinePanel}>
              <div className={style.timelineHeading}>
                <h4>December 2012</h4>
                <h4 className={style.subheading}>Transition to Full Service</h4>
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
