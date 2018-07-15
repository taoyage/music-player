import jsonp from 'common/js/jsonp';
import { url, commonPrams, options } from './config';

export function getRecommend() {
  const data = Object.assign({}, commonPrams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url.slider, data, options);
}
