// import './js/libs/weapp-adapter'
// import './js/libs/symbol';

import {Scene, Layer, Sprite} from './js/libs/sprite-wxapp';

const scene = new Scene();
const fglayer = scene.layer('fglayer');
const bglayer = scene.layer('bglayer');

// const layer = new Layer({context: canvas.getContext('2d')})
// canvas.width = 200

const s = new Sprite('https://p3.ssl.qhimg.com/t01d435c21276da7d3b.png');

s.attr({
  size: [100, 100],
  pos: [100, 100],
  bgcolor: 'red',
});

bglayer.append(s);

console.log(scene.children);
