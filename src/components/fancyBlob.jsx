import React, { useEffect } from 'react';
import KUTE from 'kute.js';
import BlobPaths from './fancyBlobPaths';

import './fancyBlob.css';

function FancyBlob() {
  const targetBlob = 'targetBlob';
  let Paths = BlobPaths;

  useEffect(() => {

    // Keep first path as starting point
    const startPath = Paths.shift();
    Paths = shuffle(Paths);
    Paths.unshift(startPath);

    // Create an array of Params for KUTE.fromTo function
    let tweenObjs = Paths.map((p, i) => {
      let nextPath;
      if (i === Paths.length - 1) {
        // TargetPath of last has to be the first for looping
        nextPath = Paths[0];
      } else {
        nextPath = Paths[i + 1];
      }

      return [
        '#' + targetBlob,
        { path: p },
        { path: nextPath },
        {
          easing: 'Sinusoidal',
          duration: 1000,
          morphPrecision: 1,
        },
      ];
    });

    // Create Tween Objects
    let tweenList = [];
    tweenObjs.forEach((tw) => {
      tweenList.push(KUTE.fromTo(...tw));
    });

    // Chain Tween Objects together
    tweenList.forEach((tween, i, twList) => {
      if (i === twList.length - 1) {
        // The last one has to be chained to the first to loop
        tween.chain(twList[0]);
      } else {
        tween.chain(twList[i + 1]);
      }
    });

    // Start animating
    tweenList[0].start();
  });

  return (
    <div className="flex-container svg-wrapper">
      <svg
        id="visual"
        viewBox="0 0 400 400"
        width="400"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(223.22017921481188 188.3027565870667)">
          <path
            id={targetBlob}
            d="M73.5 -106C93.3 -86.8 106.1 -62.7 116.3 -36.6C126.5 -10.4 134.1 17.8 127.4 42.3C120.7 66.8 99.7 87.6 76.1 121.6C52.5 155.6 26.3 202.8 -2.8 206.7C-31.9 210.6 -63.9 171.2 -100.3 141.4C-136.8 111.6 -177.8 91.3 -187.8 60.9C-197.8 30.5 -176.9 -10.1 -155.1 -42.2C-133.4 -74.2 -110.8 -97.8 -84.8 -115C-58.8 -132.2 -29.4 -143.1 -1.3 -141.4C26.8 -139.6 53.7 -125.2 73.5 -106"
            fill="#BB004B"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default FancyBlob;

function shuffle(p) {
  let res = [];
  let list = p;
  while (list.length > 0) {
    const rnd = Math.round(Math.random() * p.length - 1);
    res.push(list.splice(rnd, 1)[0]);
  }
  return res;
}
