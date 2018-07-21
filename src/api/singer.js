import jsonp from 'common/js/jsonp';
import { url, commonParams, options } from './config';

export const getSingerList = () => {
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  });
  return jsonp(url.singerList, data, options);
};
