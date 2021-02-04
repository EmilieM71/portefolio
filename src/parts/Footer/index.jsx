/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from '../../asset/css/Footer.module.css';

function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="#">
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={`fa fa-linkedin ${style.span}`}> </span>
            </a>
          </li>
          <li className={style.li}>
            <a href="#">
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={style.span}> </span>
              <span className={`fa fa-github ${style.span}`}> </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
