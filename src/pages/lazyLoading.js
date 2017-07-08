/**
 * Created by Cai Kang Jie on 2017/7/8.
 */
// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
export default (name, index = false) => () => import(`pages/${name}${index ? '/index' : ''}.vue`)