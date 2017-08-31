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
            <tr v-for="item in metricsTableData" class="no-top-border">
              <td><img :src="item.image" alt="" width="20" height="20"/></td>
              <td class="nowrap">{{item.browser}}</td>
              <td class="align-right">{{item.visits}}</td>
              <td class="table-arr"><i :class="{'icon-up': item.isVisitsUp, 'icon-down': !item.isVisitsUp }"></i></td>
              <td class="align-right">{{item.purchases}}</td>
              <td class="table-arr"><i :class="{'icon-up': item.isPurchasesUp, 'icon-down': !item.isPurchasesUp }"></i></td>
              <td class="align-right">{{item.percent}}</td>
              <td class="table-arr"><i :class="{'icon-up': item.isPercentUp, 'icon-down': !item.isPercentUp }"></i></td>
            </tr>
            </tbody>
          </table>
        </div>
      </vue-panel>
    </div>
    <div class="col-lg-6 col-md-12">
      <vue-panel vue-panel-title="Bordered Table" class="with-scroll table-panel">
        <div class="horizontal-scroll">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th class="browser-icons"></th>
              <th>Browser</th>
              <th class="align-right">Visits</th>
              <th class="align-right">Purchases</th>
              <th class="align-right">%</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in metricsTableData">
              <td><img :src="item.image" width="20" height="20"></td>
              <td class="nowrap">{{item.browser}}</td>
              <td class="align-right">{{item.visits}}</td>
              <td class="align-right">{{item.purchases}}</td>
              <td class="align-right">{{item.percent}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </vue-panel>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <vue-panel vue-panel-tilte="Condensed Table" class="with-scroll table-panel">
        <div class="horizontal-scroll">
          <table class="table table-condensed">
            <thead>
            <tr>
              <th class="table-id">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in peopleTableData">
              <td class="table-id">{{item.id}}</td>
              <td>{{item.firstName}}</td>
              <td>{{item.lastName}}</td>
              <td>{{item.username}}</td>
              <td><a class="email-link" :href="'mailto:'+item.email">{{item.email}}</a></td>
              <td><button class="status-button btn btn-xs" :class="'btn-'+item.status">{{item.status}}</button></td>
            </tr>
            </tbody>
          </table>
        </div>
      </vue-panel>
    </div>
    <div class="col-lg-6 col-md-12">
      <vue-panel vue-panel-title="Striped Rows" class="with-scroll table-panel">

      </vue-panel>
    </div>
  </div>
</div>
</template>

<script>
  import VuePanel from '../../components/vuePanels/vuePanels.vue'
  import chrome from '../../assets/img/app/browsers/chrome.svg'
  import firefox from '../../assets/img/app/browsers/firefox.svg'
  import ie from '../../assets/img/app/browsers/ie.svg'
  import safari from '../../assets/img/app/browsers/safari.svg'
  import opera from '../../assets/img/app/browsers/opera.svg'
  export default {
    components: { VuePanel },
    data () {
      return {
        metricsTableData: [
          {
            image: chrome,
            browser: 'Google Chrome',
            visits: '10,392',
            isVisitsUp: true,
            purchases: '4,214',
            isPurchasesUp: true,
            percent: '45%',
            isPercentUp: true
          },
          {
            image: firefox,
            browser: 'Mozilla Firefox',
            visits: '7,873',
            isVisitsUp: true,
            purchases: '3,031',
            isPurchasesUp: false,
            percent: '28%',
            isPercentUp: true
          },
          {
            image: ie,
            browser: 'Internet Explorer',
            visits: '5,890',
            isVisitsUp: false,
            purchases: '2,102',
            isPurchasesUp: false,
            percent: '17%',
            isPercentUp: false
          },
          {
            image: safari,
            browser: 'Safari',
            visits: '4,001',
            isVisitsUp: false,
            purchases: '1,001',
            isPurchasesUp: false,
            percent: '14%',
            isPercentUp: true
          },
          {
            image: opera,
            browser: 'Opera',
            visits: '1,833',
            isVisitsUp: true,
            purchases: '83',
            isPurchasesUp: true,
            percent: '5%',
            isPercentUp: false
          }
        ],
        peopleTableData: [
          {
            id: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28',
            status: 'info'
          },
          {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45',
            status: 'primary'
          },
          {
            id: 3,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18',
            status: 'success'
          },
          {
            id: 4,
            firstName: 'John',
            lastName: 'Snow',
            username: '@snow',
            email: 'snow@gmail.com',
            age: '20',
            status: 'danger'
          },
          {
            id: 5,
            firstName: 'Jack',
            lastName: 'Sparrow',
            username: '@jack',
            email: 'jack@yandex.ru',
            age: '30',
            status: 'warning'
          }
        ]
      }
    }
  }
</script>

<style></style>
