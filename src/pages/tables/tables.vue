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
        <div class="vertical-scroll">
          <table class="table table-striped">
            <thead>
            <tr>
              <th class="table-id">#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in smartTableData">
              <td class="table-id">{{item.id}}</td>
              <td>{{item.firstName}}</td>
              <td>{{item.lastName}}</td>
              <td>{{item.username}}</td>
              <td><a class="email-link" :href="'mailto:'+item.email">{{item.email}}</a></td>
              <td>{{item.age}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </vue-panel>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 col-md-12">
      <vue-panel vue-panel-title="Contextual Table" class="with-scroll table-panel">
          <table class="table">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
            <tr class="primary">
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><a class="email-link "  href="mailto:mdo@gmail.com">mdo@gmail.com</a></td>
              <td>28</td>
            </tr>
            <tr class="success">
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><a class="email-link "  href="mailto:fat@yandex.ru">fat@yandex.ru</a></td>
              <td>45</td>
            </tr>
            <tr class="warning">
              <td>3</td>
              <td>Larry</td>
              <td>Bird</td>
              <td>@twitter</td>
              <td><a class="email-link " href="mailto:twitter@outlook.com">twitter@outlook.com</a>
              </td>
              <td>18</td>
            </tr>
            <tr class="danger">
              <td>4</td>
              <td>John</td>
              <td>Snow</td>
              <td>@snow</td>
              <td><a class="email-link" href="mailto:snow@gmail.com">snow@gmail.com</a></td>
              <td>20</td>
            </tr>
            <tr class="info">
              <td>5</td>
              <td>Jack</td>
              <td>Sparrow</td>
              <td>@jack</td>
              <td><a class="email-link" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td>
              <td>30</td>
            </tr>
          </table>
      </vue-panel>
    </div>
    <div class="col-md-6 col-md-12">
      <vue-panel class="with-scroll table-panel" vue-panel-title="Responsive Table">
        <div class="table-responsive">
          <table class="table">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><a class="email-link " href="mailto:mdo@gmail.com">mdo@gmail.com</a></td>
              <td>28</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><a class="email-link " href="mailto:fat@yandex.ru">fat@yandex.ru</a></td>
              <td>45</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>Bird</td>
              <td>@twitter</td>
              <td><a class="email-link " href="mailto:twitter@outlook.com">twitter@outlook.com</a>
              </td>
              <td>18</td>
            </tr>
            <tr>
              <td>4</td>
              <td>John</td>
              <td>Snow</td>
              <td>@snow</td>
              <td><a class="email-link" href="mailto:snow@gmail.com">snow@gmail.com</a></td>
              <td>20</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Jack</td>
              <td>Sparrow</td>
              <td>@jack</td>
              <td><a class="email-link" href="mailto:jack@yandex.ru">jack@yandex.ru</a></td>
              <td>30</td>
            </tr>
          </table>
        </div>
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
        ],
        smartTableData: [
          {
            id: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28'
          },
          {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45'
          },
          {
            id: 3,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18'
          },
          {
            id: 4,
            firstName: 'John',
            lastName: 'Snow',
            username: '@snow',
            email: 'snow@gmail.com',
            age: '20'
          },
          {
            id: 5,
            firstName: 'Jack',
            lastName: 'Sparrow',
            username: '@jack',
            email: 'jack@yandex.ru',
            age: '30'
          },
          {
            id: 6,
            firstName: 'Ann',
            lastName: 'Smith',
            username: '@ann',
            email: 'ann@gmail.com',
            age: '21'
          },
          {
            id: 7,
            firstName: 'Barbara',
            lastName: 'Black',
            username: '@barbara',
            email: 'barbara@yandex.ru',
            age: '43'
          },
          {
            id: 8,
            firstName: 'Sevan',
            lastName: 'Bagrat',
            username: '@sevan',
            email: 'sevan@outlook.com',
            age: '13'
          },
          {
            id: 9,
            firstName: 'Ruben',
            lastName: 'Vardan',
            username: '@ruben',
            email: 'ruben@gmail.com',
            age: '22'
          },
          {
            id: 10,
            firstName: 'Karen',
            lastName: 'Sevan',
            username: '@karen',
            email: 'karen@yandex.ru',
            age: '33'
          },
          {
            id: 11,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mark',
            email: 'mark@gmail.com',
            age: '38'
          },
          {
            id: 12,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@jacob',
            email: 'jacob@yandex.ru',
            age: '48'
          },
          {
            id: 13,
            firstName: 'Haik',
            lastName: 'Hakob',
            username: '@haik',
            email: 'haik@outlook.com',
            age: '48'
          },
          {
            id: 14,
            firstName: 'Garegin',
            lastName: 'Jirair',
            username: '@garegin',
            email: 'garegin@gmail.com',
            age: '40'
          },
          {
            id: 15,
            firstName: 'Krikor',
            lastName: 'Bedros',
            username: '@krikor',
            email: 'krikor@yandex.ru',
            age: '32'
          },
          {
            id: 16,
            firstName: 'Francisca',
            lastName: 'Brady',
            username: '@Gibson',
            email: 'franciscagibson@comtours.com',
            age: 11
          },
          {
            id: 17,
            firstName: 'Tillman',
            lastName: 'Figueroa',
            username: '@Snow',
            email: 'tillmansnow@comtours.com',
            age: 34
          },
          {
            id: 18,
            firstName: 'Jimenez',
            lastName: 'Morris',
            username: '@Bryant',
            email: 'jimenezbryant@comtours.com',
            age: 45
          },
          {
            id: 19,
            firstName: 'Sandoval',
            lastName: 'Jacobson',
            username: '@Mcbride',
            email: 'sandovalmcbride@comtours.com',
            age: 32
          },
          {
            id: 20,
            firstName: 'Griffin',
            lastName: 'Torres',
            username: '@Charles',
            email: 'griffincharles@comtours.com',
            age: 19
          },
          {
            id: 21,
            firstName: 'Cora',
            lastName: 'Parker',
            username: '@Caldwell',
            email: 'coracaldwell@comtours.com',
            age: 27
          },
          {
            id: 22,
            firstName: 'Cindy',
            lastName: 'Bond',
            username: '@Velez',
            email: 'cindyvelez@comtours.com',
            age: 24
          },
          {
            id: 23,
            firstName: 'Frieda',
            lastName: 'Tyson',
            username: '@Craig',
            email: 'friedacraig@comtours.com',
            age: 45
          },
          {
            id: 24,
            firstName: 'Cote',
            lastName: 'Holcomb',
            username: '@Rowe',
            email: 'coterowe@comtours.com',
            age: 20
          },
          {
            id: 25,
            firstName: 'Trujillo',
            lastName: 'Mejia',
            username: '@Valenzuela',
            email: 'trujillovalenzuela@comtours.com',
            age: 16
          },
          {
            id: 26,
            firstName: 'Pruitt',
            lastName: 'Shepard',
            username: '@Sloan',
            email: 'pruittsloan@comtours.com',
            age: 44
          },
          {
            id: 27,
            firstName: 'Sutton',
            lastName: 'Ortega',
            username: '@Black',
            email: 'suttonblack@comtours.com',
            age: 42
          },
          {
            id: 28,
            firstName: 'Marion',
            lastName: 'Heath',
            username: '@Espinoza',
            email: 'marionespinoza@comtours.com',
            age: 47
          },
          {
            id: 29,
            firstName: 'Newman',
            lastName: 'Hicks',
            username: '@Keith',
            email: 'newmankeith@comtours.com',
            age: 15
          },
          {
            id: 30,
            firstName: 'Boyle',
            lastName: 'Larson',
            username: '@Summers',
            email: 'boylesummers@comtours.com',
            age: 32
          },
          {
            id: 31,
            firstName: 'Haynes',
            lastName: 'Vinson',
            username: '@Mckenzie',
            email: 'haynesmckenzie@comtours.com',
            age: 15
          },
          {
            id: 32,
            firstName: 'Miller',
            lastName: 'Acosta',
            username: '@Young',
            email: 'milleryoung@comtours.com',
            age: 55
          },
          {
            id: 33,
            firstName: 'Johnston',
            lastName: 'Brown',
            username: '@Knight',
            email: 'johnstonknight@comtours.com',
            age: 29
          },
          {
            id: 34,
            firstName: 'Lena',
            lastName: 'Pitts',
            username: '@Forbes',
            email: 'lenaforbes@comtours.com',
            age: 25
          },
          {
            id: 35,
            firstName: 'Terrie',
            lastName: 'Kennedy',
            username: '@Branch',
            email: 'terriebranch@comtours.com',
            age: 37
          },
          {
            id: 36,
            firstName: 'Louise',
            lastName: 'Aguirre',
            username: '@Kirby',
            email: 'louisekirby@comtours.com',
            age: 44
          },
          {
            id: 37,
            firstName: 'David',
            lastName: 'Patton',
            username: '@Sanders',
            email: 'davidsanders@comtours.com',
            age: 26
          },
          {
            id: 38,
            firstName: 'Holden',
            lastName: 'Barlow',
            username: '@Mckinney',
            email: 'holdenmckinney@comtours.com',
            age: 11
          },
          {
            id: 39,
            firstName: 'Baker',
            lastName: 'Rivera',
            username: '@Montoya',
            email: 'bakermontoya@comtours.com',
            age: 47
          },
          {
            id: 40,
            firstName: 'Belinda',
            lastName: 'Lloyd',
            username: '@Calderon',
            email: 'belindacalderon@comtours.com',
            age: 21
          },
          {
            id: 41,
            firstName: 'Pearson',
            lastName: 'Patrick',
            username: '@Clements',
            email: 'pearsonclements@comtours.com',
            age: 42
          },
          {
            id: 42,
            firstName: 'Alyce',
            lastName: 'Mckee',
            username: '@Daugherty',
            email: 'alycedaugherty@comtours.com',
            age: 55
          },
          {
            id: 43,
            firstName: 'Valencia',
            lastName: 'Spence',
            username: '@Olsen',
            email: 'valenciaolsen@comtours.com',
            age: 20
          },
          {
            id: 44,
            firstName: 'Leach',
            lastName: 'Holcomb',
            username: '@Humphrey',
            email: 'leachhumphrey@comtours.com',
            age: 28
          },
          {
            id: 45,
            firstName: 'Moss',
            lastName: 'Baxter',
            username: '@Fitzpatrick',
            email: 'mossfitzpatrick@comtours.com',
            age: 51
          },
          {
            id: 46,
            firstName: 'Jeanne',
            lastName: 'Cooke',
            username: '@Ward',
            email: 'jeanneward@comtours.com',
            age: 59
          },
          {
            id: 47,
            firstName: 'Wilma',
            lastName: 'Briggs',
            username: '@Kidd',
            email: 'wilmakidd@comtours.com',
            age: 53
          },
          {
            id: 48,
            firstName: 'Beatrice',
            lastName: 'Perry',
            username: '@Gilbert',
            email: 'beatricegilbert@comtours.com',
            age: 39
          },
          {
            id: 49,
            firstName: 'Whitaker',
            lastName: 'Hyde',
            username: '@Mcdonald',
            email: 'whitakermcdonald@comtours.com',
            age: 35
          },
          {
            id: 50,
            firstName: 'Rebekah',
            lastName: 'Duran',
            username: '@Gross',
            email: 'rebekahgross@comtours.com',
            age: 40
          },
          {
            id: 51,
            firstName: 'Earline',
            lastName: 'Mayer',
            username: '@Woodward',
            email: 'earlinewoodward@comtours.com',
            age: 52
          },
          {
            id: 52,
            firstName: 'Moran',
            lastName: 'Baxter',
            username: '@Johns',
            email: 'moranjohns@comtours.com',
            age: 20
          },
          {
            id: 53,
            firstName: 'Nanette',
            lastName: 'Hubbard',
            username: '@Cooke',
            email: 'nanettecooke@comtours.com',
            age: 55
          },
          {
            id: 54,
            firstName: 'Dalton',
            lastName: 'Walker',
            username: '@Hendricks',
            email: 'daltonhendricks@comtours.com',
            age: 25
          },
          {
            id: 55,
            firstName: 'Bennett',
            lastName: 'Blake',
            username: '@Pena',
            email: 'bennettpena@comtours.com',
            age: 13
          },
          {
            id: 56,
            firstName: 'Kellie',
            lastName: 'Horton',
            username: '@Weiss',
            email: 'kellieweiss@comtours.com',
            age: 48
          },
          {
            id: 57,
            firstName: 'Hobbs',
            lastName: 'Talley',
            username: '@Sanford',
            email: 'hobbssanford@comtours.com',
            age: 28
          },
          {
            id: 58,
            firstName: 'Mcguire',
            lastName: 'Donaldson',
            username: '@Roman',
            email: 'mcguireroman@comtours.com',
            age: 38
          },
          {
            id: 59,
            firstName: 'Rodriquez',
            lastName: 'Saunders',
            username: '@Harper',
            email: 'rodriquezharper@comtours.com',
            age: 20
          },
          {
            id: 60,
            firstName: 'Lou',
            lastName: 'Conner',
            username: '@Sanchez',
            email: 'lousanchez@comtours.com',
            age: 16
          }
        ]
      }
    }
  }
</script>

<style>
</style>
