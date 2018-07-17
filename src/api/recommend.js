import jsonp from 'common/js/jsonp';
import axios from 'axios';
import { url, commonParams, options } from './config';

export const getRecommend = () => {
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url.slider, data, options);
};

export const getDiscList = () => {
  const data = Object.assign({}, commonParams, {
    rnd: Math.random(),
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29
  });
  return axios
    .get(url.discList, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
};
