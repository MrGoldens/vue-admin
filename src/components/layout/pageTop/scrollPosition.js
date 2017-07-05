/**
 * Created by setsuna on 2017/7/5.
 */
import Vue from 'vue'
import $ from 'jquery'
function scrollPosition () {
  console.log($(window))
  console.log('123')
}
Vue.directive('scrollPosition',{
  bind:function () {
    console.log('123')
  },
  props: ['maxHeight'],
})
