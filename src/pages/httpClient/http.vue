<template>
  <div>
    http test
    <button @click="get()">
      get
    </button>
    <button @click="post()">
      post
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      get () {
        this.$http.get('/someUrl').then(response => {
          console.log('success')
          console.log(response)
        }, response => {
          // error callback
          console.log('error')
          console.log(response)
        })
      },
      post () {
        this.$http.post('/someUrl').then(response => {
          console.log('success')
          console.log(response)
        }, response => {
          // error callback
          console.log('error')
          console.log(response)
        })
      }
    }
  }
</script>

<style></style>
