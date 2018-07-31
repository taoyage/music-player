export const url = {
  slider: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  discList: '/api/getDiscList',
  singerList: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg',
  singerDetail: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
  songsPlayUrl: '/api/getPurlUrl'
};

export const commonParams = {
  g_tk: 5381,
  format: 'json',
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
};

export const options = {
  param: ['jsonpCallback']
};

export const ERR_OK = 0;
