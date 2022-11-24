<script setup>
import HeaderSection from '../src/components/layouts/HeaderSection.vue';
import SidebarSection from '../src/components/layouts/SidebarSection.vue';
import FooterSection from '../src/components/layouts/FooterSection.vue';
</script>
<template>
  <div>
    <div class="flex  bg-packed font-lexend dark:bg-gray-900">
      <div
          id="sidebar-scroll"
          class="flex-sidebar lg:flex-auto w-[300px] lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
      >
        <SidebarSection/>
      </div>
      <div class="flex-auto w-full overflow-auto h-screen " id="body-scroll">
        <HeaderSection/>
        <div class="main-content min-h-[650px]">
          <router-view></router-view>
        </div>
        <FooterSection/>
      </div>
    </div>

  </div>
</template>

