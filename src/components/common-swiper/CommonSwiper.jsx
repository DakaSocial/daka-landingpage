import { Swiper } from 'antd-mobile';

import './index.less'

export default (props) => {
  const { data } = props

  return (
    <Swiper
      className='common-swiper'
      autoplay={true}
      loop={true}
      indicatorProps={{
        color: 'white',
      }}
    >
      {data.banner.map((img, index) => (
        <Swiper.Item className="common-swiper-item" key={index}>
          <img src={img} className="banner" />
        </Swiper.Item>
      ))}
    </Swiper>
  );
};
