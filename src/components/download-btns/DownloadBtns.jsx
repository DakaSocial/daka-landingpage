import Android from '../../assets/images/common/Android.svg';
import iOS from '../../assets/images/common/ios.svg';

import './index.less'

export default () => {
  const downloadiOS = () => {
    window.open('https://apps.apple.com/cn/app/daka-social/id6459793946')
  }

  const downloadAndroid = () => {
    window.open('https://play.google.com/store/apps/details?id=social.daka.client')
  }

  return <div className="download-btns">
    <div className="btn" onClick={downloadiOS}>
      <img src={iOS} alt="" className="icon" />
      <div className="right-content">
        <div className="tip1">Download from</div>
        <div className="tip2">APPstore</div>
      </div>
    </div>
    <div className="btn" onClick={downloadAndroid}>
    <img src={Android} alt="" className="icon" />
      <div className="right-content">
        <div className="tip1">Download from</div>
        <div className="tip2">Google Play</div>
      </div>
    </div>
  </div>
}