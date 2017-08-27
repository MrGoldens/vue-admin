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
            <tr v-for="x in metricsTableData">

            </tr>
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

  export default {
    components: { VuePanel },
    data () {
      return {
        metricsTableData: [
          {
            image: 'app/browsers/chrome.svg',
            browser: 'Google Chrome',
            visits: '10,392',
            isVisitsUp: true,
            purchases: '4,214',
            isPurchasesUp: true,
            percent: '45%',
            isPercentUp: true
          },
          {
            image: 'app/browsers/firefox.svg',
            browser: 'Mozilla Firefox',
            visits: '7,873',
            isVisitsUp: true,
            purchases: '3,031',
            isPurchasesUp: false,
            percent: '28%',
            isPercentUp: true
          },
          {
            image: 'app/browsers/ie.svg',
            browser: 'Internet Explorer',
            visits: '5,890',
            isVisitsUp: false,
            purchases: '2,102',
            isPurchasesUp: false,
            percent: '17%',
            isPercentUp: false
          },
          {
            image: 'app/browsers/safari.svg',
            browser: 'Safari',
            visits: '4,001',
            isVisitsUp: false,
            purchases: '1,001',
            isPurchasesUp: false,
            percent: '14%',
            isPercentUp: true
          },
          {
            image: 'app/browsers/opera.svg',
            browser: 'Opera',
            visits: '1,833',
            isVisitsUp: true,
            purchases: '83',
            isPurchasesUp: true,
            percent: '5%',
            isPercentUp: false
          }
        ]
      }
    }
  }
</script>

<style></style>
