export const a = "a"; //tree shaking 此种写法自动tree shaking(vue3)
export const b = "b";
export const c = () => {
  console.log('c');
};

export default {
  a, b, c
};//不支持 tree shaking 全部导出 （vue2）