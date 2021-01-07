import { a, b, c } from './plugin';
import { common_a, common_b } from './cjs';
import _ from 'lodash';
import pkg from '../package.json';

console.log(pkg);
c();
console.log(common_a);