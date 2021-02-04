import React from 'react';
import style from '../../asset/css/Contact.module.css';

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <h1 className="title m-5">CONTACTEZ -MOI</h1>
          <div className="border-title mx_auto pb-5"> </div>
        </div>
      </div>
      <form action="">
        <div className="row my-4">
          <div className="col">
            <div className="row">
              <div className="col">
                <label htmlFor="firstname" className="form-label m-0">
                  Prénom :{' '}
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  placeholder="Prénom"
                  aria-label="First name"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <label htmlFor="lastname" className="form-label">
                  NOM :{' '}
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="Nom de famille"
                  aria-label="Last name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-3">
            <label htmlFor="Email" className="form-label">
              E-mail :{' '}
            </label>
          </div>
          <div className="col-9">
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Adresse E-mail"
              aria-label="Email"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-3">
            <label htmlFor="business" className="form-label">
              Entreprise :{' '}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              id="business"
              className="form-control"
              placeholder="Nom de votre entreprise"
              aria-label="business"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-3">
            <label htmlFor="subject" className="form-label">
              Sujet :{' '}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              id="subject"
              className="form-control"
              placeholder="Objet du message"
              aria-label="subject"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-3">
            <label htmlFor="message" className="form-label">
              Message :{' '}
            </label>
          </div>
          <div className="col-9">
            <textarea
              type="text"
              id="message"
              className="form-control"
              rows="6"
              placeholder="Texte du message"
              aria-label="message"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-12">
            <button className={style.button} type="submit">
              <div className=""> </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Contact;
