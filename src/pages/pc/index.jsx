import './pc.less';

import imgLogo from '../../assets/images/common/logo.svg';
import imgLogo2 from '../../assets/images/common/logo2.svg';
import imgBar01 from '../../assets/images/pc/bar01.svg';
import imgBar02 from '../../assets/images/pc/bar02.svg';
import imgBar03 from '../../assets/images/pc/bar03.svg';
import imgBar04 from '../../assets/images/pc/bar04.svg';
import imgBar05 from '../../assets/images/pc/bar05.svg';
import imgBar06 from '../../assets/images/pc/bar06.svg';
import imgBar07 from '../../assets/images/pc/bar07.svg';

import imgDakaPic from '../../assets/images/pc/daka_pic.png';
import imgInputBaseBg from '../../assets/images/pc/input_base_bg.svg';
import imgInputErrorBg from '../../assets/images/pc/input_error_bg.svg';
import imgEmailArrow from '../../assets/images/common/email_arrow.svg';
import imgBox6Logo from '../../assets/images/pc/box6_logo.png';
import imgLocation from '../../assets/images/common/location.png';

import GifDaka from '../../components/gif-daka/GifDaka';
import CommonBar from '../../components/common-bar/CommonBar';
// import DownloadDakaBtn from '../../components/download-daka-btn/DownloadDakaBtn';
import DownloadBtns from '../../components/download-btns/DownloadBtns';
import SendEmailBar from '../../components/send-email-bar/SendEmailBar';

import { linkMap, stepPCList } from '../../const/const';

export default function PC() {
  const handleOpenLink = (url) => {
    window.open(url)
  }

  return (
    <div className="daka-pc">
      <div className="layer1 logo-bar">
        <img src={imgLogo} alt="daka" className="logo" />
        {/* <DownloadDakaBtn /> */}
      </div>

      <div className="layer1 row1">
        <div className="left">
          <div className="logo1">
            <GifDaka />
          </div>
          <div className="text">Track Your Journey, Capture the Moments: Clock-in Your Adventures</div>
        </div>
        <div className="right">
          <div className="banner-text">
            <div className="text">App Download</div>
            <DownloadBtns />
          </div>
        </div>
      </div>

      <div className="layer1 bar-box">
        <div className="row-l">
          <CommonBar bg={imgBar01} color="b">
            WELCOME TO
          </CommonBar>
          <CommonBar bg={imgBar02}>DAKA</CommonBar>
        </div>
        <div className="row-s">
          <CommonBar bg={imgBar03} type="small">
            Your Gateway to Local
          </CommonBar>
          <CommonBar bg={imgBar04} type="small" color="b">
            Experiences!
          </CommonBar>
        </div>
      </div>

      <div className="layer1 box1">
        <div className="title">
          Are you looking to <b>Explore</b> and <b>Engage</b> with your <b>Local Community</b> like never before?
        </div>
        <div className="text">
          Daka is here to connect you with exciting events, businesses, and experiences right at your doorstep. Say goodbye to missing out on what's happening around you and
          embrace a new era of community engagement!
        </div>
      </div>

      <div className="layer1 bar-box">
        <div className="row-l">
          <CommonBar bg={imgBar05}>WHY CHOOSE</CommonBar>
          <CommonBar bg={imgBar02}>DAKA</CommonBar>
        </div>
      </div>

      <div className="layer1 box2">
        <div className="letter-bg">
          <div className="letter">
            <div className="info">
              <div className="title">Discover Local Gems</div>
              <div className="text">
                Uncover hidden treasures and exciting events happening in your neighborhood. Daka brings you personalized recommendations based on your interests, making sure you
                never miss out on the best experiences.
              </div>
            </div>
            <div className="info">
              <div className="title">Earn Rewards & Exclusive Deals</div>
              <div className="text">
                Participate in check-ins, complete tasks, and unlock rewards! Daka offers a variety of incentives, from exclusive discounts to special perks, just for engaging with
                local businesses and events.
              </div>
            </div>
            <div className="info">
              <div className="title">Embrace Community Spirit</div>
              <div className="text">
                Become a part of a thriving community that shares your passions and interests. Connect with like-minded locals, make new friends, and strengthen the bond within
                your neighborhood.
              </div>
            </div>

            <div className="info">
              <div className="title">Web3 Integration</div>
              <div className="text">For Web3 related play and interaction, Daka has a designated place for rewards and games. Daka embraces the latest technology trends.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="layer1 bar-box">
        <div className="row-l">
          <CommonBar bg={imgBar06}>HOW IT</CommonBar>
          <CommonBar bg={imgBar07} color="b">
            WORKS??
          </CommonBar>
        </div>
      </div>

      <div className="box3">
        <div className="box3-item left">
          <img src={imgLocation} className="location" alt="" />
        </div>
        <div className="box3-item right">
          {stepPCList.map((v, index) => {
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
      </div>

      <div className="layer1 box4">
        <div className="title">Join the Daka Community Today!</div>
        <img src={imgDakaPic} alt="" className="daka-pic" />
        <div className="text text1">
          Ready to embark on a journey of local discovery and meaningful connections? Sign up now to experience a new way of engaging with your community. Don't miss out on
          exclusive early-bird offers and become part of the Daka family today!
        </div>
        <SendEmailBar baseBg={imgInputBaseBg} errorBg={imgInputErrorBg} placeholder="EMAIL ADRESS" />

        <img src={imgEmailArrow} alt="arrow" className="email-arrow" />

        <div className="title1">Stay Updated</div>
        <div className="text text2">Sign up for our newsletter to receive the latest news, event highlights, and special promotions delivered directly to your inbox.</div>
      </div>

      <div className="layer1 box5">
        <div className="left">
          {/* <div className="title">Download the App</div>
          <div className="title1">App Coming Soon !</div>
          <div className="text">Available on App Store and Google Play. Join Daka today and unlock a world of local experiences!</div> */}
          <div className="text">Have questions or feedback? We'd love to hear from you! Reach out to our friendly support team at <a target="_blank" href="mailto:support@daka.social">support@daka.social</a> or follow us on social media for updates and exciting community stories</div>
        </div>
        <div className="right">
          <div className="title">Get in Touch</div>
          {/* <div className="text">
            Have questions or feedback? We'd love to hear from you! Reach out to our friendly support team at support@daka.social or follow us on social media for updates and exciting
            community stories
          </div> */}
        </div>
      </div>

      <div className="layer1 box6">
        <img src={imgBox6Logo} alt="" className="logo-pic" />
      </div>

      <div className="copyright">
        <img src={imgLogo2} alt="daka" className="logo2" />
        <div className="footer">
          <div className="l">
            <div className="text">@2023 DAKA. All rights reserved </div>
          </div>
          <div className="r">
            {/* <span>Whitepaper</span> */}
            <span onClick={() => handleOpenLink(linkMap.Twitter)}>Twitter</span>
            <span onClick={() => handleOpenLink(linkMap.Medium)}>Medium</span>
            <span onClick={() => handleOpenLink(linkMap.Instagram)}>Instagram</span>
            {/* <span>Facebook</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
