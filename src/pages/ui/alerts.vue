<template>
  <div class="widgets">
    <div class="row">
      <div class="col-md-6">
        <vue-panel vue-panel-title="Basic" class="with-scroll">
          <div >
            <div class="alert bg-success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>
            <div class="alert bg-info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>
            <div class="alert bg-warning">
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>
            <div class="alert bg-danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
          </div>
        </vue-panel>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePanel from '../../components/vuePanels/vuePanels.vue'

  export default {components: {VuePanel}}

</script>

<style></style>
