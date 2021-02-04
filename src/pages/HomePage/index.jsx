import React from 'react';
import ImgCode from '../../asset/images/code.png';
import style from '../../asset/css/HomePage.module.css';

function Home() {
  return (
    <div className="home ">
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.title}>
            <span className={style.block}> </span>
            <h1 className={style.h1}>
              Hello ! Je m&#39;appelle Emilie
              <span className={style.span}> </span>
            </h1>
          </div>

          <div className={style.role}>
            <div className={style.block}> </div>
            <p className={style.p}>Je suis développeuse web junior</p>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <section className="about row justify-content-md-center">
          <div className="col p-0">
            <img
              className={`${style.ImgCode} d-none d-sm-block`}
              src={ImgCode}
              alt=""
            />
          </div>
          <div className="col p-0">
            <h1 className="title m-5">A PROPOS DE MOI</h1>
            <div className="border-title mx_auto pb-5"> </div>
            <p>
              Je suis passionnée de developpement, et j&#39;ai décidé de faire
              de cette passion mon métier, je me suis donc réorientée. C&#39;est
              en autodidacte que j&#39;ai commencé, puis j&#39;ai suivie une
              formation. Désireuse d&#39;apprendre, d&#39;acquérir de nouvelles
              compétences, je réalise des petits projets perso, je suis
              l&#39;actualité du web et recherche un challenge professionnel.
              Alors, n&#39;hésitez pas à me contacter
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
