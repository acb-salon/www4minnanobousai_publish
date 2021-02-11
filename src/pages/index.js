import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';
import Movie from '../components/Movie';
import plusiconw100 from '../assets/images/plus_icon_w100.png';
import gmail4mbs from '../assets/images/minnanobousai_gmail.png';


const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/sanbikinokobuta_w600xh400.jpg'),
    //youtubeurl: require('https://youtu.be/uP1SQPs32Lw'), //YouTubeリンク属性テスト
    thumbnail: require('../assets/images/thumbs/sanbikinokobuta_w264xh200.png'),
    caption: '3びきのこぶた｜みんなの防災＋ソナエ',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
  },
  {
    src: require('../assets/images/fulls/comingsoon_w600xh400.jpg'),
    thumbnail: require('../assets/images/thumbs/comingsoon_w264xh200.png'),
    caption: 'Coming Soon...',
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
        <Scroll type="id" element="gallery">
          <a href="#gallery" className="button style2 scrolly">
            早速動画を見て備えよう
          </a>
        </Scroll>

　<br />
　<br />
<iframe width="80%" height="315" src="https://www.youtube.com/embed/HgYkihzlBLY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<div>
  　<br />
  ※イベントの実施報告書をこちらからご覧いただけます。<br />
   <a href="https://www.gachapin-mukku.com/bousai/pdf/bousai_camp_report2015.pdf" target="_blank" class="button style4 scrolly">2015年度 イベントレポート<br />（PDF）</a>
   <a href="https://www.gachapin-mukku.com/bousai/pdf/bousai_event_report2016.pdf" target="_blank" class="button style4 scrolly">2016年度 イベントレポート<br />（PDF）</a>
   <a href="https://www.gachapin-mukku.com/bousai/pdf/bousai_event_report2017.pdf" target="_blank" class="button style4 scrolly">2017年度 イベントレポート<br />（PDF）</a><br />
   <a href="https://www.gachapin-mukku.com/bousai/pdf/sonaarea_report.pdf" target="_blank" class="button style4 scrolly">2017年度 そなエリア<br />イベントレポート（PDF）</a>
   <a href="https://www.gachapin-mukku.com/bousai/pdf/bousai_event_report2018.pdf" target="_blank" class="button style4 scrolly">2018年度 イベントレポート<br />（PDF）</a>
   <a href="https://www.gachapin-mukku.com/bousai/pdf/bousai_event_report2019.pdf" target="_blank" class="button style4 scrolly">2019年度 イベントレポート<br />（PDF）</a>
</div>


      </footer>
    </section>




    <section id="gallery">
    <article className="container box style2">
      <header>
        <h2>備えるための</h2>
        <h2>楽しく学べる動画がたくさん！</h2>
       <p>
          防災を楽しく学ぼう！
          <br />
          <a href="https://www.youtube.com/channel/UC6kTMrH503wEHoT5-yPsRJQ">新しいコンテンツも続々登場</a>するよ。
        </p>
      </header>
<br />　<br />
<iframe width="300" height="200" src="https://www.youtube.com/embed/0iFkMjTwJik?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>　　

<iframe width="300" height="200" src="https://www.youtube.com/embed/mhcLAaZpgbE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>　　

<iframe width="300" height="200" src="https://www.youtube.com/embed/uP1SQPs32Lw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
<br />　<br />

<iframe width="300" height="200" src="https://www.youtube.com/embed/s0O2uTo2E_4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </article>
    </section>

    <article className="container box style3">
      <header>
        <h2>個人情報の取り扱いについて</h2>
        <p> <br />
お問い合わせに取得しましたご利用者様のお名前、ご連絡先電話番号、回答先メールアドレスなどの個人情報（その他ご利用者様からいただいた情報のうち個人情報に該当するものを含む）及びお問い合わせの内容の利用目的は次のとおりです。<br /><br />

　・ご意見、ご要望、お問い合わせへの対応および確認<br />
　・当団体の活動改善のための分析<br /><br />

お問い合わせの内容によっては、適切な回答を行うため、お問い合わせ内容を必要に応じて関係各社などへ転送し（お客様の個人情報は転送いたしません）、確認および回答をさせていただく場合がございますので、あらかじめご了承ください。<br />
当団体は、個人情報の流出・漏洩の防止、その他個人情報の安全管理のために必要かつ適切な措置を講じるものとし、法令などに正当な理由がある場合を除き、ご利用者様の同意なく、お客様から取得しました個人情報の目的外での利用および第三者への提供は行いません。
      </p>
      </header>
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSekB2k45a5RwXTmm3vMi9Ac4K9QAI5VPYJ0JmM8bXGI1PuVIg/formResponse" target="_self" method="POST">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="entry.1549157192"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="entry.1363473089"
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea name="entry.2130480169" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article>

    <article className="container box style3">
      <header>
        <h2>みんなの防災プロジェクト実行委員会<br />専門家委員</h2>
        <p> <br />
        本委員会は、多種多様な災害から一人でも多くの国民のいのちを守るための意識と知識の具体的な術を普及することを目的に、防災啓蒙に取り組む行政機関や地方自治体、民間企業や団体と共に地域に根差した防災活動を大型商業施設を使用したイベント活動等を通じて、防災意識の向上を図ることを目的としています。<br /><br />

        <h4>一般社団法人 危機管理教育研究所　国崎 信江【危機管理アドバイザー】</h4>
        <h4>青山学院大学 地球社会共生学部　古橋 大地【教授】</h4>
        <h4>銀座パートナーズ法律事務所　岡本 正【弁護士・博士（法学）・防災士】</h4>
        <h4>国士舘大学 防災・救急救助総合研究所　喜熨斗 智也【講師・救急救命士】</h4>
        <br />
        【問い合わせ先】<br />
        みんなの防災プロジェクト実行委員会　事務局<br />
        <img width="200" src={ gmail4mbs } alt="みんなの防災プロジェクト実行委員会 事務局 メールアドレス" />
        </p>

      </header>
    </article>

    <Footer />
  </Layout>
);

export default IndexPage;
