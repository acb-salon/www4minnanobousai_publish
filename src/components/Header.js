import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import minnanobousailogo from "../assets/images/minnanobousai_logo_w600.png"

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
      </header>
      <footer>
      <img width="45%" height="45%" src={ minnanobousailogo } alt="みんなの防災＋ソナエ ロゴ" /><br />
        <Scroll type="id" element="banner">
          <a href="#banner" className="button style2 ">
            みんなの防災+ソナエって？
          </a>
        </Scroll>
      </footer>
    </section>
  );
}
