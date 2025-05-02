<template>
  <div id="layout-wrapper">
<NavbarView />
    <div class="hori-overlay"></div>

    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
        <!-- Content Here -->
        <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavbarView from '@/components/Navbar.vue'
</script>
