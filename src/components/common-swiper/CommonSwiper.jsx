import { Swiper } from 'antd-mobile';

import './index.less'

export default (props) => {
  const { data } = props

  return (
    <Swiper
      className='common-swiper'
      indicatorProps={{
        color: 'white',
      }}
      defaultIndex={1}
    >
      {[...data.banner, ...data.banner, ...data.banner].map((img, index) => (
        <Swiper.Item className="common-swiper-item" key={index}>
          <img src={img} class="banner" />
        </Swiper.Item>
      ))}
    </Swiper>
  );
};
