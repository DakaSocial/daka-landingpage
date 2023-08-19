import './mobile.less';

import imgLogo from '../../assets/images/common/logo.svg';
import imgBar01 from '../../assets/images/m/bar_01.svg';
import imgBar02 from '../../assets/images/m/bar_02.svg';
import imgBar03 from '../../assets/images/m/bar_03.svg';
import imgBar04 from '../../assets/images/m/bar_04.svg';
import imgBar05 from '../../assets/images/m/bar_05.svg';
import imgBar06 from '../../assets/images/m/bar_06.svg';
import imgBar07 from '../../assets/images/m/bar_07.svg';
import imgLocation from '../../assets/images/common/location.png';
import imgDakaPic from '../../assets/images/m/daka_pic.png';
import imgEmailArrow from '../../assets/images/common/email_arrow.svg';
import imgDakaPic1 from '../../assets/images/m/daka_pic1.svg';
import imgLogo2 from '../../assets/images/common/logo2.svg';

import imgInputBaseBg from '../../assets/images/m/input_base_bg.svg';
import imgInputErrorBg from '../../assets/images/m/input_error_bg.svg';

import GifDaka from '../../components/gif-daka/GifDaka';
import DownloadDakaBtn from '../../components/download-daka-btn/DownloadDakaBtn';
// import CommonBar from '../../components/common-bar/CommonBar';
import SendEmailBar from '../../components/send-email-bar/SendEmailBar';

import { stepMList, linkMap } from '../../const/const';

export default function Mobile() {
  const handleOpenLink = (url) => {
    window.open(url)
  }

  return (
    <div className="daka-mobile">
      <div className="layer1 logo-bar">
        <img src={imgLogo} alt="" className="logo" />
        <DownloadDakaBtn />
      </div>

      <div className="layer1 logo1-container">
        <div className="logo1">
          <GifDaka />
        </div>
        <div className="text">Track Your Journey, Capture the Moments: Clock-in Your Adventures</div>
      </div>

      <div className="layer1 banner-container">
        <div className="text">Track Your Journey, Capture the Moments: Clock-in Your Adventures</div>
      </div>

      <div className="layer1 box">
        <img src={imgBar01} alt="WELCOME TO" className="bar-01" />
        <img src={imgBar02} alt="DAKA" className="bar-02" />
        <img src={imgBar03} alt="Your Gateway to Local" className="bar-03" />
        <img src={imgBar04} alt="Experiences" className="bar-04" />
      </div>

      <div className="layer1 box-01">
        <div className="title">
          Are you looking to <b>Explore</b> and <b>Engage</b> with your <b>Local Community</b> like never before?
        </div>
        <div className="text">
          Daka is here to connect you with exciting events, businesses, and experiences right at your doorstep. Say goodbye to missing out on what's happening around you and
          embrace a new era of community engagement!
        </div>
      </div>

      <div className="layer1 box">
        <img src={imgBar05} alt="WHY CHOOSE" className="bar-05" />
        <img src={imgBar02} alt="DAKA" className="bar-02" />
      </div>

      <div className="layer1 box-02">
        <div className="letter-bg">
          <div className="letter">
            <div className="info mt80">
              <div className="title">Discover Local Gems</div>
              <div className="text">
                Uncover hidden treasures and exciting events happening in your neighborhood. Daka brings you personalized recommendations based on your interests, making sure you
                never miss out on the best experiences.
              </div>
            </div>
            <div className="info mt117">
              <div className="title">Earn Rewards & Exclusive Deals</div>
              <div className="text">
                Participate in check-ins, complete tasks, and unlock rewards! Daka offers a variety of incentives, from exclusive discounts to special perks, just for engaging with
                local businesses and events.
              </div>
            </div>
            <div className="info mt111">
              <div className="title">Embrace Community Spirit</div>
              <div className="text">
                Become a part of a thriving community that shares your passions and interests. Connect with like-minded locals, make new friends, and strengthen the bond within
                your neighborhood.
              </div>
            </div>
            <div className="info mt132">
              <div className="title">Web3 Integration</div>
              <div className="text">For Web3 related play and interaction, Daka has a designated place for rewards and games. Daka embraces the latest technology trends.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="layer1 box">
        <img src={imgBar06} alt="HOW IT" className="bar-06" />
        <img src={imgBar07} alt="WORKS" className="bar-07" />
      </div>

      <div className="location-container">
        <img src={imgLocation} alt="location" className="location" />
      </div>

      <div className="layer1 box-03">
        {stepMList.map((v, index) => {
          return (
            <div className="item" key={index}>
              <div className="title-container">
                <img src={v.indexIcon} alt="number" />
                <div className="title">{v.title}</div>
              </div>
              <div className="text">{v.text}</div>
            </div>
          );
        })}
      </div>

      <div className="layer1 box-04">
        <img src={imgDakaPic} alt="" className="daka-pic" />
        <div className="message message-01">
          <div className="title">
            <div>Join the</div>
            <div>Daka</div>
            <div>Community</div>
            <div>Today!</div>
          </div>
          <div className="text">
            Ready to embark on a journey of local discovery and meaningful connections? Sign up now to experience a new way of engaging with your community. Don't miss out on
            exclusive early-bird offers and become part of the Daka family today!
          </div>
        </div>
        <SendEmailBar baseBg={imgInputBaseBg} errorBg={imgInputErrorBg} placeholder="EMAIL" />
        <div className="message message-02">
          <div className="title">
            <span>Stay Updated</span>
            <img src={imgEmailArrow} alt="arrow" className="email-arrow" />
          </div>
          <div className="text">Sign up for our newsletter to receive the latest news, event highlights, and special promotions delivered directly to your inbox.</div>
        </div>
      </div>

      <div className="layer1 box-05">
        <div className="bar-01">
          <div className="title">
            <div>Download</div>
            <div>the App</div>
          </div>
          <div className="title1">App Coming Soon !</div>
          <div className="text">Available on App Store and Google Play. Join Daka today and unlock a world of local experiences!</div>
        </div>

        <div className="bar-02">
          <div className="title">Get in Touch</div>
          <div className="text">
            Have questions or feedback? We'd love to hear from you! Reach out to our friendly support team at support@daka.social or follow us on social media for updates and exciting
            community stories
          </div>
        </div>

        <img src={imgDakaPic1} alt="daka" className="daka-pic1" />

        <div className="contact">
          <div className="line1">
            {/* <span>Whitepaper</span> */}
            <span onClick={() => handleOpenLink(linkMap.Twitter)} >Twitter</span>
            <span onClick={() => handleOpenLink(linkMap.Medium)} >Medium</span>
            <span onClick={() => handleOpenLink(linkMap.Instagram)} >Instagram</span>
          </div>
          {/* <div className="line2">
            <span>Twitter</span>
            <span>Instagram</span>
          </div> */}
        </div>

        <div className="copyright">
          <img src={imgLogo2} alt="" className="logo" />
          <div className="text">@2023 DAKA. All rights reserved </div>
        </div>
      </div>
    </div>
  );
}
