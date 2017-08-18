<template>
  <div class="widgets">
    <div class="row">
      <div class="col-md-3">
        <vue-panel class="with-scroll button-panel" vue-panel-title="Flat Buttons">
          <div class="button-wrapper"><button type="button" class="btn btn-default">Default</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-primary">Primary</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-success">Success</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-info">Info</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-warning">Warning</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-danger">Danger</button></div>
        </vue-panel>
      </div>
      <div class="col-md-3">
        <vue-panel class="with-scroll button-panel" vue-panel-title="Raised Buttons">
          <div class="button-wrapper"><button type="button" class="btn btn-default btn-raised">Default</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-primary btn-raised">Primary</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-success btn-raised">Success</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-info btn-raised">Info</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-warning btn-raised">Warning</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-danger btn-raised">Danger</button></div>
        </vue-panel>
      </div>
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
