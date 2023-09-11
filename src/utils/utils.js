export const loadBigImg = (img, cb) => {
  const image = new Image()
  image.src = img;
  image.onload = () => {
    cb(img)
  }
}

import gifDaka from '../assets/images/common/daka.gif';

export const loadDakaGif = (cb) => {
  loadBigImg(gifDaka, cb)
}

// function preloadAllImg() {
//   const that = this;
//   for (let img of ALL_IMG_LIST) {
//     let image = new Image();
//     image.src = img;
//     image.onload = () => {
//       that.count++;
//       // 计算图片加载的百分数，绑定到percent变量
//       let percentNum = Math.floor((that.count / ALL_IMG_LIST.length) * 100);
//       that.percent = `${percentNum}%`;
//       document.getElementById("percentNum").innerText = `${percentNum}%`;
//     };
//   }
// }

export function formatTime(time) {
  const date = new Date(time);
  const year = date.getFullYear();

  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}.${month}.${day}`
}