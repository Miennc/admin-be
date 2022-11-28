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
                sdsd
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
    }
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
