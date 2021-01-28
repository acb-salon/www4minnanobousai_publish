import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: '神戸市消防局　ガチャピン・ムックの火の用心',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: '神戸市消防局ガチャピン・ムックの危機一髪',
  },
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: '神戸市消防局　ガチャピン・ムックの火の用心',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: '神戸市消防局ガチャピン・ムックの危機一髪',
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: '神戸市消防局ガチャピン・ムックの危機一髪',
  },
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: '神戸市消防局　ガチャピン・ムックの火の用心',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: '神戸市消防局ガチャピン・ムックの危機一髪',
  },
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: '神戸市消防局　ガチャピン・ムックの火の用心',
  },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="banner">
      <header>
        <h2>「みんなの防災＋ソナエ」とは</h2>
      </header>
      <p>
「みんなの防災+ソナエ」は、東日本大震災を受けて2016年から災害弱者である乳幼児とその保護者を対象に自助力向上を目的とした防災啓発活動を開始、2019年までに延べ30万人が参加する国内最大級の防災啓発イベントを日本全国で開催してきました。2020年は新型ウイルス感染症の影響でイベント開催が難しいため、オンラインで学べる防災をテーマにこの公式サイトをスタートさせました！
      </p>
      <footer>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            早速動画を見て備えよう
          </a>
        </Scroll>

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube.com/embed/1crw1rrew_w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </footer>
    </section>




    <article className="container box style2">
      <header>
        <h2>他にも備えるための</h2>
        <h2>楽しく学べる動画がたくさん！</h2>
       <p>
          クリックして防災を楽しく学ぼう！
          <br />
          新しいコンテンツも続々登場するよ。
        </p>
      </header>

      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>
    </article>

    <article className="container box style3">
      <header>
        <h2>CONTACT</h2>
        <h1>個人情報の取り扱いについて</h1>

        <p>
お問い合わせより取得しましたご利用者様のお名前、ご連絡先電話番号、回答先メールアドレスなどの個人情報（その他ご利用者様からいただいた情報のうち個人情報に該当するものを含む）及びお問い合わせの内容の利用目的は次のとおりです。<br /><br />

・ご意見、ご要望、お問い合わせへの対応および確認<br />
・当団体の活動改善のための分析<br /><br />

お問い合わせの内容によっては、適切な回答を行うため、必要に応じて関係各社などへ転送し、確認および回答をさせていただく場合がございますので、あらかじめご了承ください。<br />
当団体は、個人情報の流出・漏洩の防止、その他個人情報の安全管理のために必要かつ適切な措置を講じるものとし、法令などに正当な理由がある場合を除き、ご利用者様の同意なく目的外での利用および第三者への提供は行いません。
</p>
      </header>
      <form method="post" action="#">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article>

    <article className="container box style3">
      <header>
        <h2>みんなの防災プロジェクト実行委員会</h2>
        <p>
        本委員会は、多種多様な災害から一人でも多くの国民のいのちを守るための意識と知識の具体的な術を普及することを目的に、防災啓蒙に取り組む行政機関や地方自治体、民間企業や団体と共に地域に根差した防災活動を大型商業施設を使用したイベント活動等を通じて、防災意識の向上を図ることを目的としています。<br /><br />

        <h3>専門家委員</h3>

        <h4>一般社団法人 危機管理教育研究所　国崎 信江【危機管理アドバイザー】</h4>
        <h4>青山学院大学 地球社会共生学部　古橋 大地【教授】</h4>
        <h4>銀座パートナーズ法律事務所　岡本 正【弁護士・博士（法学）・防災士】</h4>
        <h4>国士舘大学 防災・救急救助総合研究所　喜熨斗 智也【講師・救急救命士】</h4>
        </p>
        <br />please check 
        <Link to="/Members"> the details </Link>
      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
