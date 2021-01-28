import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <section id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="copyright">
        <ul className="menu">
          <li>&copy; みんなの防災プロジェクト実行委員会. All rights reserved.<br /> <br />
            Design: <a href="https://github.com/furuhashilab">HTML5 UP with Aoyama Collaboration Base and Furuhashi Lab.</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
