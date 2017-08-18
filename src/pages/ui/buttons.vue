<template>
  <div class="widgets">
    <div class="row">
      <vue-panel class="col-md-3 with-scroll button-panel" vue-panel-title="Flat Buttons">
        <div class="button-wrapper"><button type="button" class="btn btn-default">Default</button></div>
        <div class="button-wrapper"><button type="button" class="btn btn-primary">Primary</button></div>
        <div class="button-wrapper"><button type="button" class="btn btn-success">Success</button></div>
        <div class="button-wrapper"><button type="button" class="btn btn-info">Info</button></div>
        <div class="button-wrapper"><button type="button" class="btn btn-warning">Warning</button></div>
        <div class="button-wrapper"><button type="button" class="btn btn-danger">Danger</button></div>
      </vue-panel>
    </div>
  </div>
</template>

<script>
  import VuePanel from '../../components/vuePanels/vuePanels.vue'
  export default {
    components: {VuePanel}
  }
</script>

<style></style>
