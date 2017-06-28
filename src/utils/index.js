/**
 * Created by a1 on 17/6/28.
 */

/**
 * 如：https://www.baidu.com/home/news/data/newspage?nid=4330552084590160075&n_type=0&p_from=1
 * @param url
 * {https://www.baidu.com/home/news/data/newspage?nid: "4330552084590160075", n_type: "0", p_from: "1"}
 */
export function param2Obj(url) { // 如 https://api-dev/user/info?token=editor
  const search = url.split('?')[1];
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  //  返回：token=editor
}
