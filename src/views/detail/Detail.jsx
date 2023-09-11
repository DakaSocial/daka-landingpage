import axios from 'axios';
import { useEffect, useState } from 'react';
import { Toast } from 'antd-mobile';

import CommonSwiper from '../../components/common-swiper/CommonSwiper';
import Card from './components/Card';

import './detail.less';

import iconFb from '../../assets/images/detail/facebook_icon.svg';
import iconIns from '../../assets/images/detail/ins_icon.svg';
import iconTw from '../../assets/images/detail/Twitter_icon.svg';

import iconChat from '../../assets/images/detail/icon_chat.svg';
import iconChatDiscord from '../../assets/images/detail/icon_chat_discord.svg';
import iconTask from '../../assets/images/detail/icon_task.svg';
import { useParams } from 'react-router-dom';

export default () => {
  const [data, setData] = useState({});
  const { name } = useParams()

  const handleWindowResize = () => {
    const cw = window.innerWidth;
    const baseMaxWidth = 375;
    document.body.style.zoom = cw / baseMaxWidth;
  };

  const fetchData = (name) => {
    Toast.show({
      icon: 'loading',
      duration: 0,
    });
    axios
      .get(`https://api.daka.social/task/show/${name}`)
      .then(res => {
        const { statusCode, data, message } = res.data;
        if (statusCode === 200) {
          setData(data);
          Toast.clear();
        } else {
          Toast.show(message);
        }
      })
      .catch(() => {
        Toast.clear();
      });
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    fetchData(name);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); 

  const handleJump = () => {
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const iOSUrl = 'https://apps.apple.com/cn/app/daka-social/id6459793946'
    const androidUrl = 'https://play.google.com/store/apps/details?id=social.daka.client'
    const url = isIOS ? iOSUrl : androidUrl
    window.open(url)
  };

  return (
    <div className="detail">
      {data.id ? (
        <>
          <CommonSwiper data={data} />
          <Card data={data} handleJump={handleJump} />
          {data.completer && data.completer.length > 0 && (
            <div className="participant-container">
              <div className="label">
                <span>Participants (</span>
                <span>{data.completerCount > 99 ? '99+' : data.completerCount}</span>
                <span>)</span>
              </div>
              <div className="participant-list">
                {data.completer.map((item, index) => {
                  return <img key={index} src={item.profileImg} className="participant-item" />;
                })}
              </div>
            </div>
          )}

          {data.reward && data.reward.shards && data.reward.shards.length > 0 && (
            <div className="shards-container">
              <div className="label">
                <span>Shards (</span>
                <span>{data.reward.shards.length > 99 ? '99+' : data.reward.shards.length}</span>
                <span>)</span>
              </div>
              <div className="shards-list">
                {data.reward.shards.map(item => {
                  return (
                    <div className="reward-card" key={item.id}>
                      <img src={item.img} alt="" className="logo" />
                      <div className="content">
                        <div className="count">x{item.count}</div>
                        <div className="name">Shards</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="social-media">
            <div className="label">Social media</div>

            <div className="social-media-list">
              {data.socialMedia.Instagram && <img src={iconIns} alt="ins" onClick={handleJump} />}

              {data.socialMedia.Twitter && <img src={iconTw} alt="Twitter" onClick={handleJump} />}

              {data.socialMedia.Facebook && <img src={iconFb} alt="facebook" onClick={handleJump} />}
            </div>
          </div>

          <div className="operation">
            <div className="btn task-btn" onClick={handleJump}>
              <img src={iconTask} alt="task btn" />
              <span>Task</span>
            </div>

            <div className="btn chat-btn" onClick={handleJump}>
              {data.contact && data.contact.telegram ? <img src={iconChat} /> : <img src={iconChatDiscord} />}
              <span>Chat</span>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
