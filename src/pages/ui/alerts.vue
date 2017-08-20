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
      <div class="col-md-6">
        <vue-panel vue-panel-title="Dismissible alerts" class="with-scroll">
          <div >
            <div class="alert bg-success closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>
            <div class="alert bg-info closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>
            <div class="alert bg-warning closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </div>
            <div class="alert bg-danger closeable" role="alert"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
          </div>
        </vue-panel>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <vue-panel vue-panel-title="Links in alerts" class="with-scroll">
          <div >
            <div class="alert bg-success">
              <strong>Well done!</strong> You successfully read <a href class="alert-link">this important alert message</a>.
            </div>
            <div class="alert bg-info">
              <strong>Heads up!</strong> This <a href class="alert-link">alert needs your attention</a>, but it's not super important.
            </div>
            <div class="alert bg-warning">
              <strong>Warning!</strong> Better check yourself, you're <a href class="alert-link">not looking too good</a>.
            </div>
            <div class="alert bg-danger">
              <strong>Oh snap!</strong> <a href class="alert-link">Change a few things up</a> and try submitting again.
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
