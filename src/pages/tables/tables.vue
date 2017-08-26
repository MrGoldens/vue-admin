<template>
<div class="widgets">
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <vue-panel class="with-scroll table-panel" vue-panel-title="Hover Rows">
        <div class="horizontal-scroll">
          <table class="table table-hover">
            <thead>
            <tr class="black-muted-bg">
              <th class="browser-icons"></th>
              <th>Browser</th>
              <th class="align-right">Visits</th>
              <th class="table-arr"></th>
              <th class="align-right">Purchases</th>
              <th class="table-arr"></th>
              <th class="align-right">%</th>
              <th class="table-arr"></th>
            </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
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
