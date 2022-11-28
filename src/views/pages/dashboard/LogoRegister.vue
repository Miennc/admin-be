<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <b-tabs content-class="p-3 text-muted">
              <b-tab active class="border-0">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">등록</span>
                </template>

                <div class="row">
                  <div class="col-12">

                    <div class="card-body">
                      <div class="row">
                        <div class="col-12">
                          <form class="form-horizontal" role="form">
                            <div class="mb-3 row">
                              <label class="col-md-2 col-form-label">구분</label>
                              <div class="col-md-10">
                                <select class="form-select">
                                  <option>고객사</option>
                                  <option>고객사</option>
                                  <option>고객사</option>
                                </select>
                                <p class="mt-2">
                                  예) 고객사, 파트너사
                                </p>
                              </div>
                            </div>

                            <b-form-group class="mb-3" id="example text" label-cols-sm="2" label-cols-lg="2" label="회사명"
                              label-for="text">
                              <b-form-input for="text" placeholder="Woori Bank Vietnam">
                              </b-form-input>
                              <p class="mt-2">
                                예) 우리은행
                              </p>
                            </b-form-group>

                            <div class="mb-3 row">
                              <label class="col-md-2 col-form-label">이미지</label>
                              <div class="col-md-10">
                                <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true"
                                  :options="dropzoneOptions">
                                  <div class="dropzone-custom-content">
                                    <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                    <h4>Drop files here or click to upload.</h4>
                                  </div>
                                </vue-dropzone>
                              </div>
                            </div>


                            <b-form-group id="example-url" label-cols-sm="2" label-cols-lg="2" label="홈페이지"
                              label-for="url" class="mb-3">
                              <b-form-input id="url" placeholder="www.woori.com.vn" type="url" name="url">
                              </b-form-input>
                              <p class="mt-2">
                                예) www.woori.com.vn
                              </p>
                            </b-form-group>

                            <b-form-group id="example-date" label-cols-sm="2" label-cols-lg="2" label="등록일"
                              label-for="date" class="mb-3">
                              <flat-pickr class="form-control flatpickr-input" v-model="disabledate"
                                :config="disabledOption"></flat-pickr>
                            </b-form-group>

                            <div class="mb-3 row">
                              <label class="col-md-2 col-form-label">내용</label>
                              <div class="col-md-10">
                                <textarea class="form-control col-md-10" name="textarea" rows="5"></textarea>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <!-- end row -->
                      <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="reset" class="btn btn-secondary ms-1">
                          Cancel
                        </button>
                      </div>
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                </div>
              </b-tab>

              <b-tab>
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">조회/변경/삭제 </span>
                </template>
                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-body">
                        <h4 class="card-title">Data Table</h4>
                        <div class="mt-4 row">
                          <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_length" class="dataTables_length">
                              <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
                                &nbsp;entries
                              </label>
                            </div>
                          </div>
                          <!-- Search -->
                          <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                              <label class="d-inline-flex align-items-center">
                                Search:
                                <b-form-input v-model="filter" type="search" placeholder="Search..."
                                  class="form-control form-control-sm ms-2"></b-form-input>
                              </label>
                            </div>
                          </div>
                          <!-- End search -->
                        </div>
                        <!-- Table -->
                        <div class="mb-0 table-responsive">
                          <b-table :items="tableData" :fields="fields" responsive="sm" :per-page="perPage"
                            :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                            :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered"></b-table>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                              <ul class="mb-0 pagination pagination-rounded">
                                <!-- pagination -->
                                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage">
                                </b-pagination>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import flatPickr from "vue-flatpickr-component";
import vue2Dropzone from "vue2-dropzone";
import "flatpickr/dist/flatpickr.css";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

const tableData = [
  {
    name: 'Lucinda Stickley',
    position: 'Data Coordiator',
    office: 'Sirnarasa',
    age: 31,
    date: '2018/07/29',
    salary: '$13600'
  }, {
    name: 'Henrietta Carsberg',
    position: 'Data Coordiator',
    office: 'Paninggaran',
    age: 59,
    date: '2019/07/13',
    salary: '$13700'
  }, {
    name: 'Phylys David',
    position: 'Senior Developer',
    office: 'New Glasgow',
    age: 52,
    date: '2019/04/08',
    salary: '$15200'
  }, {
    name: 'Brena Shivell',
    position: 'Graphic Designer',
    office: 'Caen',
    age: 50,
    date: '2018/12/14',
    salary: '$15800'
  }, {
    name: 'Carmon Tuiller',
    position: 'Marketing Assistant',
    office: 'Jiangbei',
    age: 46,
    date: '2019/06/19',
    salary: '$12800'
  }, {
    name: 'Tina Strattan',
    position: 'Account Representative III',
    office: 'São Miguel da Carreira',
    age: 31,
    date: '2019/07/08',
    salary: '$13900'
  }, {
    name: 'Jon Tarbox',
    position: 'Senior Cost Accountant',
    office: 'Ryazhsk',
    age: 61,
    date: '2019/02/22',
    salary: '$16000'
  }, {
    name: 'Carmine Hollibone',
    position: 'Assistant Manager',
    office: 'Punta del Este',
    age: 50,
    date: '2019/04/23',
    salary: '$15000'
  }, {
    name: 'Cora Germann',
    position: 'Automation Specialist III',
    office: 'Heshui',
    age: 47,
    date: '2019/03/27',
    salary: '$11300'
  }, {
    name: 'Dawna Hillyatt',
    position: 'Biostatistician I',
    office: 'Suresnes',
    age: 37,
    date: '2018/12/02',
    salary: '$14800'
  }, {
    name: 'Natty Casini',
    position: 'Senior Developer',
    office: 'Pucallpa',
    age: 31,
    date: '2018/08/19',
    salary: '$11900'
  }, {
    name: 'Vittorio Lauder',
    position: 'Developer II',
    office: 'Tønsberg',
    age: 54,
    date: '2018/12/10',
    salary: '$16200'
  }, {
    name: 'Chery Cardenas',
    position: 'Senior Developer',
    office: 'Santo Tomas',
    age: 26,
    date: '2018/12/07',
    salary: '$11100'
  }, {
    name: 'Hilde McFfaden',
    position: 'Senior Financial Analyst',
    office: 'Cruz',
    age: 43,
    date: '2018/11/05',
    salary: '$14100'
  }, {
    name: 'Siward Kindred',
    position: 'Office Assistant III',
    office: 'Béziers',
    age: 39,
    date: '2018/09/26',
    salary: '$15500'
  }, {
    name: 'Tamera Caneo',
    position: 'Executive Secretary',
    office: 'Hetian',
    age: 38,
    date: '2018/09/28',
    salary: '$12300'
  }, {
    name: 'Munmro Rendell',
    position: 'Marketing Manager',
    office: 'Castelo',
    age: 60,
    date: '2018/11/15',
    salary: '$12400'
  }, {
    name: 'Nerta Eddisforth',
    position: 'Social Worker',
    office: 'Al Ḩayfah',
    age: 33,
    date: '2018/12/01',
    salary: '$14900'
  }, {
    name: 'Laraine Hamlyn',
    position: 'Chemical Engineer',
    office: 'Baška Voda',
    age: 44,
    date: '2019/03/25',
    salary: '$12800'
  }, {
    name: 'Timoteo Lyddy',
    position: 'Recruiting Manager',
    office: 'Vidago',
    age: 29,
    date: '2018/12/04',
    salary: '$11700'
  }, {
    name: 'Cherye Bleby',
    position: 'Quality Engineer',
    office: 'La Concordia',
    age: 62,
    date: '2018/10/04',
    salary: '$14700'
  }, {
    name: 'Zacharias O\'Shaughnessy',
    position: 'Senior Editor',
    office: 'Maungatapere',
    age: 26,
    date: '2018/07/30',
    salary: '$11600'
  }, {
    name: 'Odie Jentin',
    position: 'Programmer II',
    office: 'Grabovci',
    age: 26,
    date: '2019/05/16',
    salary: '$11200'
  }, {
    name: 'Eugenie Sang',
    position: 'Operator',
    office: 'Oxbow',
    age: 59,
    date: '2019/07/16',
    salary: '$15200'
  }, {
    name: 'Sammy Guyers',
    position: 'Mechanical Systems Engineer',
    office: 'Sanhe',
    age: 53,
    date: '2019/07/09',
    salary: '$14200'
  }, {
    name: 'Tarah Blick',
    position: 'Paralegal',
    office: 'Fylí',
    age: 23,
    date: '2018/12/14',
    salary: '$15200'
  }, {
    name: 'Jemie Ormshaw',
    position: 'Systems Administrator II',
    office: 'Vila Fria',
    age: 28,
    date: '2019/05/15',
    salary: '$14400'
  }, {
    name: 'Gerrie Semeradova',
    position: 'Research Associate',
    office: 'Balykchy',
    age: 26,
    date: '2018/09/28',
    salary: '$14900'
  }, {
    name: 'Ottilie Mostyn',
    position: 'Accounting Assistant II',
    office: 'Eskilstuna',
    age: 43,
    date: '2018/08/20',
    salary: '$11300'
  }, {
    name: 'Lombard Crepin',
    position: 'Project Manager',
    office: 'Novoul’yanovsk',
    age: 63,
    date: '2019/04/28',
    salary: '$13300'
  }, {
    name: 'Fons Sopp',
    position: 'Structural Analysis Engineer',
    office: 'Bealanana',
    age: 47,
    date: '2019/02/22',
    salary: '$13300'
  }, {
    name: 'Berenice Wildey',
    position: 'Sales Representative',
    office: 'Markópoulo Oropoú',
    age: 49,
    date: '2018/10/19',
    salary: '$14700'
  }, {
    name: 'Maybelle Cullotey',
    position: 'Senior Financial Analyst',
    office: 'Arcos de Valdevez',
    age: 33,
    date: '2019/02/06',
    salary: '$14700'
  }, {
    name: 'Mikkel Lingner',
    position: 'Assistant Media Planner',
    office: 'Celestynów',
    age: 32,
    date: '2018/08/12',
    salary: '$11400'
  }, {
    name: 'Silvano Hartil',
    position: 'Assistant Manager',
    office: 'Leles',
    age: 26,
    date: '2019/04/30',
    salary: '$11500'
  }, {
    name: 'Maddi Mansell',
    position: 'Assistant Media Planner',
    office: 'Doug An',
    age: 48,
    date: '2019/05/29',
    salary: '$14600'
  }, {
    name: 'Mohandas Course',
    position: 'Staff Accountant II',
    office: 'Wuping',
    age: 59,
    date: '2019/07/18',
    salary: '$12900'
  }, {
    name: 'Ericha Clilverd',
    position: 'Desktop Support Technician',
    office: 'Conde',
    age: 37,
    date: '2018/09/12',
    salary: '$14400'
  }, {
    name: 'Elspeth Leap',
    position: 'Paralegal',
    office: 'Hägersten',
    age: 42,
    date: '2019/02/15',
    salary: '$14400'
  }, {
    name: 'Sam Chinge',
    position: 'Assistant Media Planner',
    office: 'Arai',
    age: 55,
    date: '2019/05/26',
    salary: '$11800'
  }, {
    name: 'Judie Hug',
    position: 'Operator',
    office: 'Verkhniy Rohachyk',
    age: 32,
    date: '2018/11/18',
    salary: '$11300'
  }, {
    name: 'Lulita Espasa',
    position: 'Operator',
    office: 'Sabi',
    age: 59,
    date: '2019/06/06',
    salary: '$13600'
  }, {
    name: 'Kandy Fulker',
    position: 'Human Resources Assistant I',
    office: 'Murowana Goślina',
    age: 57,
    date: '2019/05/01',
    salary: '$13100'
  }, {
    name: 'Bradley Gunbie',
    position: 'Assistant Media Planner',
    office: 'Bundoran',
    age: 34,
    date: '2019/03/16',
    salary: '$13700'
  }, {
    name: 'Katie Proctor',
    position: 'Quality Engineer',
    office: 'Qingxi',
    age: 34,
    date: '2018/10/14',
    salary: '$12400'
  }, {
    name: 'Lin Gallaccio',
    position: 'VP Quality Control',
    office: 'Rongcheng',
    age: 23,
    date: '2018/08/27',
    salary: '$10300'
  }, {
    name: 'Christy Ranaghan',
    position: 'Nurse Practicioner',
    office: 'Naval',
    age: 42,
    date: '2018/11/02',
    salary: '$15700'
  }, {
    name: 'Concordia Varrow',
    position: 'Environmental Specialist',
    office: 'Rashaant',
    age: 48,
    date: '2018/12/11',
    salary: '$12500'
  }, {
    name: 'Normand Tropman',
    position: 'Legal Assistant',
    office: 'Yläne',
    age: 52,
    date: '2019/01/21',
    salary: '$14600'
  }, {
    name: 'Oswald Cruikshank',
    position: 'Help Desk Operator',
    office: 'Armenia',
    age: 57,
    date: '2019/05/16',
    salary: '$15700'
  }, {
    name: 'Debbie Pinchin',
    position: 'Tax Accountant',
    office: 'Seara',
    age: 35,
    date: '2018/08/29',
    salary: '$12100'
  }, {
    name: 'Wells Dartan',
    position: 'Financial Analyst',
    office: 'Bhalwāl',
    age: 44,
    date: '2019/03/03',
    salary: '$10500'
  }, {
    name: 'Kelsey Zucker',
    position: 'Accountant III',
    office: 'Douz',
    age: 44,
    date: '2018/11/09',
    salary: '$15700'
  }, {
    name: 'Lothaire Rubinchik',
    position: 'Operator',
    office: 'Paringin',
    age: 37,
    date: '2018/07/26',
    salary: '$13800'
  }, {
    name: 'Dmitri Marrow',
    position: 'Quality Engineer',
    office: 'Kirzhach',
    age: 30,
    date: '2018/11/25',
    salary: '$13400'
  }, {
    name: 'Virgie Bullivant',
    position: 'Dental Hygienist',
    office: 'Mungyeong',
    age: 34,
    date: '2019/07/16',
    salary: '$14600'
  }, {
    name: 'Simmonds Moughtin',
    position: 'Programmer III',
    office: 'Loma',
    age: 44,
    date: '2018/10/20',
    salary: '$13900'
  }, {
    name: 'Ralina Bounds',
    position: 'Associate Professor',
    office: 'Cacocum',
    age: 52,
    date: '2019/05/12',
    salary: '$11400'
  }, {
    name: 'Bettye Hearons',
    position: 'Food Chemist',
    office: 'Guayabetal',
    age: 30,
    date: '2018/12/29',
    salary: '$16000'
  }, {
    name: 'Cortie Andreacci',
    position: 'Assistant Manager',
    office: 'Yongheshi',
    age: 33,
    date: '2018/11/23',
    salary: '$11200'
  }, {
    name: 'Frederic Fozard',
    position: 'Occupational Therapist',
    office: 'Wierzbica',
    age: 29,
    date: '2019/02/14',
    salary: '$10500'
  }, {
    name: 'Carissa Simeoni',
    position: 'Developer II',
    office: 'Huansheng',
    age: 29,
    date: '2019/05/21',
    salary: '$13100'
  }, {
    name: 'Ruperto Humblestone',
    position: 'Clinical Specialist',
    office: 'Zubūbah',
    age: 31,
    date: '2019/07/01',
    salary: '$13200'
  }, {
    name: 'Leontine Sailes',
    position: 'Quality Control Specialist',
    office: 'Novocherkassk',
    age: 33,
    date: '2018/11/28',
    salary: '$11800'
  }, {
    name: 'Lanny Cregeen',
    position: 'Programmer I',
    office: 'Abbeville',
    age: 60,
    date: '2018/09/26',
    salary: '$15400'
  }, {
    name: 'Linus Flucker',
    position: 'Help Desk Operator',
    office: 'Libofshë',
    age: 37,
    date: '2019/03/02',
    salary: '$10300'
  }, {
    name: 'Edd Valentin',
    position: 'Associate Professor',
    office: 'Vila Chã do Monte',
    age: 42,
    date: '2018/08/26',
    salary: '$14000'
  }, {
    name: 'Rafaela Kingsworth',
    position: 'Senior Sales Associate',
    office: 'Penco',
    age: 41,
    date: '2019/05/26',
    salary: '$14800'
  }, {
    name: 'Helge Cutajar',
    position: 'Associate Professor',
    office: 'Wololele A',
    age: 42,
    date: '2019/03/13',
    salary: '$15000'
  }, {
    name: 'Dusty Abethell',
    position: 'Mechanical Systems Engineer',
    office: 'Bodø',
    age: 36,
    date: '2018/08/30',
    salary: '$15300'
  }
];

export default {
  components: {
    flatPickr,
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      disabledOption: {
        onReady: function () {
          this.jumpToDate("2025-01");
        },
        disable: [
          "2025-01-30",
          "2025-02-21",
          "2025-03-08",
          new Date(2025, 4, 9),
        ],
        dateFormat: "Y-m-d",
        defaultDate: new Date(),
      },
      disabledate: new Date(),

      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
        headers: {
          "My-Awesome-Header": "header value",
        },
      },

      tableData: tableData,

      title: "Advanced",
      items: [
        {
          text: "Tables",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        {
          key: "name",
          sortable: true,
        },
        {
          key: "position",
          sortable: true,
        },
        {
          key: "office",
          sortable: true,
        },
        {
          key: "age",
          sortable: true,
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "salary",
          sortable: true,
        },
      ],
    }
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    },
  },
};
</script>
<style>
.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
