/**
 * Created by a1 on 17/7/17.
 */
import fetch from 'utils/fetch'

export function getTables(query) {
  return fetch({
    url: '/article_table/list',
    method: 'get',
    params: query
  })
}
