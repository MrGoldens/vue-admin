/**
 * Created by Cai Kang Jie on 2017/7/3.
 */
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected: null,
      options: [
        {
          text: 'Please select some item',
          value: null
        },
        {
          text: 'This is First option',
          value: 'a'
        }, {
          text: 'Default Selected Option',
          value: 'b'
        }, {
          text: 'This is another option',
          value: 'c'
        }, {
          text: 'This one is disabled',
          value: 'd',
          disabled: true
        }]
    }
  }
}
