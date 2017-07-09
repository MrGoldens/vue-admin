<template>
  <div class="hello">
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
    name: 'dashboard2',
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
