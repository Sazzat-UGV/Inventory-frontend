<template>
  <div id="layout-wrapper">
    <NavbarView />
    <div class="hori-overlay"></div>

    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <!-- Content Here -->
          <router-view v-slot="{ Component, route }">
            <transition name="route" mode="out-in">
              <div :keys="route.name">
                <component :is="Component" />
              </div>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavbarView from "@/components/Navbar.vue";
</script>
<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.route-enter-active,
.router-leave-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
