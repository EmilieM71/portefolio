import React from 'react';
import ImgCode from '../../asset/images/code.png';
import style from '../../asset/css/HomePage.module.css';
import PartTitle from '../../components/PartTitle';

function Home() {
  return (
    <div className={style.home}>
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
      <div className="container">
        <div>
          <PartTitle title="Mes objectifs" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            exercitationem quia. Dolorem commodi quis est beatae alias qui
            eligendi aspernatur sed tempora, nemo blanditiis facilis suscipit
            enim? Atque, quam?
          </p>
        </div>
        <div>
          <PartTitle title="Mes recherches" icon="bi bi-search" />
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search m-5"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            exercitationem quia. Dolorem commodi quis est beatae alias qui
            eligendi aspernatur sed tempora, nemo blanditiis facilis suscipit
            enim? Atque, quam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatibus qui harum quas iusto quaerat in,
            quasi nam possimus ea optio atque ratione sequi odio distinctio
            consequuntur id adipisci ipsam accusamus.
          </p>
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
              <PartTitle title="A PROPOS DE MOI" icon="" />
              <p>
                Je suis passionnée de developpement, et j&#39;ai décidé de faire
                de cette passion mon métier, je me suis donc réorientée.
                C&#39;est en autodidacte que j&#39;ai commencé, puis j&#39;ai
                suivie une formation. Désireuse d&#39;apprendre, d&#39;acquérir
                de nouvelles compétences, je réalise des petits projets perso,
                je suis l&#39;actualité du web et recherche un challenge
                professionnel. Alors, n&#39;hésitez pas à me contacter
              </p>
            </div>
          </section>
        </div>
        <div>
          <PartTitle title="Mes compétences" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            exercitationem quia. Dolorem commodi quis est beatae alias qui
            eligendi aspernatur sed tempora, nemo blanditiis facilis suscipit
            enim? Atque, quam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatibus qui harum quas iusto quaerat in,
            quasi nam possimus ea optio atque ratione sequi odio distinctio
            consequuntur id adipisci ipsam accusamus.
          </p>
        </div>
        <div>
          <PartTitle title="Ce que je peux vous apporter" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi
            exercitationem quia. Dolorem commodi quis est beatae alias qui
            eligendi aspernatur sed tempora, nemo blanditiis facilis suscipit
            enim? Atque, quam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatibus qui harum quas iusto quaerat in,
            quasi nam possimus ea optio atque ratione sequi odio distinctio
            consequuntur id adipisci ipsam accusamus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
