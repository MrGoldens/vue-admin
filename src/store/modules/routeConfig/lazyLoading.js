/**
 * Created by Cai Kang Jie on 2017/7/13.
 */
export default (name, index = false) => () => import(`pages/${name}${index ? '/index' : ''}.vue`)
