import iconTime from '../../../assets/images/detail/icon_time.svg'
import iconLocation from '../../../assets/images/detail/icon_location.svg'
import iconReward from '../../../assets/images/detail/icon_reward.svg'

import { formatTime } from '../../../utils/utils';

import './index.less'

export default props => {
  const { data, handleJump } = props;

  const customBgColorMap = {
    crypto: 'linear-gradient(203.64deg, #75ff53 15.22%, #5effa8 93.43%)',
    gastronomy: 'linear-gradient(203.64deg, #FCFF71 15.22%, #FFC2A0 93.43%)',
    attraction: 'linear-gradient(196.62deg, #68AEFF 11.49%, #FDA4FF 93.14%)',
  };

  return (
    <div className="detail-card" style={{ background: customBgColorMap[data.type] }}>
      <div className="top-info">
        <div className="title">{data.name}</div>
        <div className="desc">{data.description}</div>
      </div>

      <div className="bottom-info">
        <div className="info-item">
          <img src={iconTime} alt="time" className="icon" />
          <div className="label">{formatTime(data.startDate)}</div>
        </div>
        <div className="info-item">
          <img src={iconLocation} alt="time" className="icon" />
          <div className="label">{data.city}</div>
        </div>
        <div className="info-item" v-if="data.reward.point">
          <img src={iconReward} alt="time" className="icon" />
          <div className="label">{data.reward?.point} Points</div>
        </div>

        <div className="reserve-btn" onClick={handleJump}>
          <span>Reserve</span>
        </div>
      </div>
    </div>
  );
};
