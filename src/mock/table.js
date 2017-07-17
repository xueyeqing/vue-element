/**
 * Created by a1 on 17/7/17.
 */
import Mock from 'mockjs'
import {param2Obj} from 'utils';

const List = [];
const count = 100;

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    // time: '@datetime',
    timestamp: +Mock.Random.date('T'),
    name: '@cname',
    title: '@ctitle(10, 20)',
    address: '@county'
  }));
}

export default {
  getList: config => {
    const {page, limit, name} = param2Obj(config.url)
    let mockList = List.filter(item => {
      if (name && item.name.indexOf(name) < 0) return false;
      return true;
    });

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1));

    return {
      total: mockList.length,
      items: pageList
    }
  }
}

