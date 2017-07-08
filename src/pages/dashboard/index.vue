<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <b-form-select v-model="selected"
                   :options="options"
                   calss="mb-3"
    ></b-form-select>
    <button class="btn btn-primary">123</button>
    <div>Selected: <strong>{{selected}}</strong></div>
  </div>
</template>

<script>
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

</script>
