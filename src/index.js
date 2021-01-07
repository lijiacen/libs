// import { a, b, c } from './plugin';
// import { common_a, common_b } from './cjs';
// import _ from 'lodash';
// import pkg from '../package.json';
import Test from './Test.vue';

// console.log(pkg);
// c();
// console.log(common_a);
export default function (Vue) {
  Vue.component(Test.name, Test);
}