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
      <div class="col-md-3">
        <vue-panel class="with-scroll button-panel df-size-button-panel"  vue-panel-title="Different sizes">
          <div class="button-wrapper"><button type="button" class="btn btn-default  btn-xs">Default</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-primary  btn-sm">Primary</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-success btn-mm">Success</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-info btn-md">Info</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-warning btn-xm">Warning</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-danger btn-lg">Danger</button></div>
        </vue-panel>
      </div>
      <div class="col-md-3">
        <vue-panel class="with-scroll button-panel"  vue-panel-title="Disabled">
          <div class="button-wrapper"><button type="button" class="btn btn-default" disabled="disabled">Default</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-primary" disabled="disabled">Primary</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-success" disabled="disabled">Success</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-info" disabled="disabled">Info</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-warning" disabled="disabled">Warning</button></div>
          <div class="button-wrapper"><button type="button" class="btn btn-danger" disabled="disabled">Danger</button></div>
        </vue-panel>
      </div>
    </div>
    <div class="row">
      <vue-panel class="col-md-6">
        <vue-panel vue-panel-title="Icon Buttons" class="with-scroll">
          <div>
            <ul class="btn-list clearfix">
              <li><button type="button" class="btn btn-primary btn-icon"><i class="ion-android-download"></i></button></li>
              <li><button type="button" class="btn btn-default btn-icon"><i class="ion-stats-bars"></i></button></li>
              <li><button type="button" class="btn btn-success btn-icon"><i class="ion-android-checkmark-circle"></i></button></li>
              <li><button type="button" class="btn btn-info btn-icon"><i class="ion-information"></i></button></li>
              <li><button type="button" class="btn btn-warning btn-icon"><i class="ion-android-warning"></i></button></li>
              <li><button type="button" class="btn btn-danger btn-icon"><i class="ion-nuclear"></i></button></li>
            </ul>
            <h5 class="panel-subtitle">Buttons with icons</h5>
            <ul class="btn-list clearfix">
              <li><button type="button" class="btn btn-primary btn-with-icon"><i class="ion-android-download"></i>Primary</button></li>
              <li><button type="button" class="btn btn-default btn-with-icon"><i class="ion-stats-bars"></i>Default</button></li>
              <li><button type="button" class="btn btn-success btn-with-icon"><i class="ion-android-checkmark-circle"></i>Success</button></li>
              <li><button type="button" class="btn btn-info btn-with-icon"><i class="ion-information"></i>Info</button></li>
              <li><button type="button" class="btn btn-warning btn-with-icon"><i class="ion-android-warning"></i>Warning</button></li>
              <li><button type="button" class="btn btn-danger btn-with-icon"><i class="ion-nuclear"></i>Danger</button></li>
            </ul>
          </div>
        </vue-panel>
        <vue-panel vue-panel-title="Large Buttons" class="with-scroll large-buttons-panel">
          <div>
            <div class="row btns-row btns-same-width-lg">
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-primary btn-lg">Primary</button></div>
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-success btn-lg">Success</button></div>
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-info btn-lg">Info</button></div>
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-default btn-lg">Default</button></div>
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-warning btn-lg">Warning</button></div>
              <div class="col-sm-4 col-xs-6"><button type="button" class="btn btn-danger btn-lg">Danger</button></div>
            </div>
          </div>
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
