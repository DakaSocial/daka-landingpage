import '../App.less';
import PCPage from './pc';
import MobilePage from './mobile';
import { useEffect, useState } from 'react';
import { isMobileOnly } from 'react-device-detect';

let isInit = false;

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(isMobileOnly)
  let baseMaxWidth = isMobileOnly ? 360 : 1442

  const handleWindowResize = () => {
    const cw = window.innerWidth; // document.body.clientWidth;
    
    if(cw < 900) {
      setIsMobile(true)
      baseMaxWidth = 360
    } else {
      setIsMobile(false)
      baseMaxWidth = 1442
    }
    document.body.style.zoom = cw / baseMaxWidth;
  };

  useEffect(() => {
    if (isInit) return;
    isInit = true;
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    // return () => {
    //   window.removeEventListener('resize', handleWindowResize);
    // };
  }, []);

  return <>{isMobile ? <MobilePage /> : <PCPage />}</>;
}
