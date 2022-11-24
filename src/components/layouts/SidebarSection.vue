<template>
  <!-- sidebar -->
  <nav class="sidebar bg-[#001529] dark:bg-gray-800 min-h-full relative">
    <!--     sidebar head-->
    <div class="sidebar-head pt-[30px]">
      <img class="mx-auto h-[70px] w-[70px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECed5LoZ4oQR3-3uEUxk0E9HifE17iG-aDQ&usqp=CAU" />
      <p class="text-center text-white mt-[10px]">Shiki Orisu</p>
      <router-link to="my-profile" class="text-center text-white text-[12px] mt-[10px] hover:bg-blue-400 bg-blue-500 block border-blue-400 border w-fit mx-auto px-[8px] py-[4px] rounded cursor-pointer">My Profile</router-link>
    </div>
    <!--     sidebar list-->


    <div v-if="show" id="showBar" @click="sidebarToggle" class="w-[50px] justify-end items-center absolute h-[50px]">
      <i class="fa-regular fa-circle-xmark text-2xl text-white cursor-pointer h-full w-full block">
      </i>
    </div>

    <div class="sidebar-list p-2">
      <div class="wrap-item mt-4 dark:text-gray-500">
        <div class="item">
          <router-link
              to="/"
              exact
              class="w-full flex text-left rounded-md box-border p-3 dark:hover:bg-gray-700"
          >
            <span class="mr-3 text-xl text-[#ffffffa6] text-sm">
              <Icon icon="bxs:dashboard"/>
            </span>

            <span class="w-full text-[#ffffffa6] text-sm hover:text-[#fff]">
              Bảng điều khiển
            </span>
          </router-link>
        </div>
      </div>
      <div v-for="data in dataList" :key="data.id" class="item test">
        <menu-accordion class="flex">
          <template v-slot:icon>

            <span class="text-xl text-[#ffffffa6] text-sm">
              <Icon :icon="data.iconName"/>
            </span>

          </template>
          <template v-slot:title>
            <div class="text-[#ffffffa6] capitalize text-sm hover:text-[#fff] mr-[7px]">
              {{ data.name }}
            </div>
          </template>

          <template v-slot:content>
            <router-link
                v-for="(item, indexItem) in data.itemList"
                :key="indexItem"
                :to="item.router"
                class="w-full overide capitalize text-left text-[#ffffffa6]  text-sm block hover:text-[#fff] rounded-md p-3  pl-10"
            >
              {{ item.nameItem }}
            </router-link>
          </template>
        </menu-accordion>
      </div>
    </div>
  </nav>
</template>
<style>
.active {
}

/*#sidebar-scroll{*/
/*  align-items: center;*/
/*}*/
.test button {
  align-items: center !important;
}
</style>
<script>
import {Icon} from "@iconify/vue";
import MenuAccordion from "../MenuAccordion.vue";

export default {
  components: {
    Icon,
    MenuAccordion,
  },
  data() {
    return {
      show: true,
      dataList: [
        {
          id: 1,
          name: "Services management",
          iconName: "bxs:dashboard",
          itemList: [
            {
              nameItem: "Tất cả người dùng",
              router: "/list-user",
            },
          ],
        },
        {
          id: 1,
          name: "Customer Support",
          iconName: "bxs:dashboard",
          itemList: [
            {
              nameItem: "Tất cả người dùng",
              router: "/list-user",
            },
          ],
        },
        {
          id: 1,
          name: "Company Introduction",
          iconName: "bxs:dashboard",
          itemList: [
            {
              nameItem: "Tất cả người dùng",
              router: "/list-user",
            },
          ],
        },

      ],
    };
  },
  methods: {
    sidebarToggle: function () {

      document.querySelector(".flex-sidebar").classList.add("hidden");
    },
  },


  mounted() {
    if (window.innerWidth > 768) {
      this.show = false;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        this.show = false;
      } else {
        this.show = true;
      }
    });
  },

};
</script>

<style>
.overide {
  color: #ffffffa6 !important;
}
</style>
